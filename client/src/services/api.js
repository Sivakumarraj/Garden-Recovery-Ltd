import axios from 'axios'

// Base API URL from environment variables
let API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

// Ensure URL ends with /api to avoid 404s on endpoints like /contact
if (API_URL.endsWith('.onrender.com')) {
  API_URL = `${API_URL}/api`
} else if (!API_URL.endsWith('/api') && !API_URL.includes('localhost')) {
  API_URL = `${API_URL}/api`
}

// Create axios instance with default configuration
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds timeout
})

// Request interceptor - runs before every request
api.interceptors.request.use(
  (config) => {
    // Log requests in development
    if (import.meta.env.DEV) {
      console.log(`📤 ${config.method.toUpperCase()} ${config.url}`, config.data || '')
    }
    return config
  },
  (error) => {
    console.error('❌ Request Error:', error)
    return Promise.reject(error)
  }
)

// Response interceptor - runs after every response
api.interceptors.response.use(
  (response) => {
    // Log responses in development
    if (import.meta.env.DEV) {
      console.log(`📥 ${response.status} ${response.config.url}`, response.data)
    }
    return response
  },
  (error) => {
    // Handle different error scenarios
    if (error.response) {
      // Server responded with error status
      console.error('❌ Response Error:', error.response.status, error.response.data)
      
      switch (error.response.status) {
        case 400:
          console.error('Bad Request - Check your input data')
          break
        case 401:
          console.error('Unauthorized - Please login again')
          break
        case 403:
          console.error('Forbidden - You don\'t have permission')
          break
        case 404:
          console.error('Not Found - Resource doesn\'t exist')
          break
        case 500:
          console.error('Server Error - Please try again later')
          break
        default:
          console.error('An error occurred')
      }
    } else if (error.request) {
      // Request made but no response received
      console.error('❌ Network Error: No response from server')
      console.error('Check if backend server is running on', API_URL)
    } else {
      // Error in request configuration
      console.error('❌ Request Setup Error:', error.message)
    }
    
    return Promise.reject(error)
  }
)

// ============================================
// CONTACT FORM API CALLS
// ============================================

/**
 * Submit contact form data
 * @param {Object} formData - Contact form data
 * @returns {Promise} API response
 */
export const submitContactForm = async (formData) => {
  try {
    const response = await api.post('/contact', formData)
    return {
      success: true,
      data: response.data,
      message: 'Form submitted successfully!'
    }
  } catch (error) {
    throw {
      success: false,
      message: error.response?.data?.message || 'Failed to submit form. Please try again.',
      error: error.response?.data || error.message
    }
  }
}

/**
 * Get all contact submissions (Admin only)
 * @returns {Promise} List of contact submissions
 */
export const getContactSubmissions = async () => {
  try {
    const response = await api.get('/contact')
    return {
      success: true,
      data: response.data,
      count: response.data.count
    }
  } catch (error) {
    throw {
      success: false,
      message: 'Failed to fetch contact submissions',
      error: error.response?.data || error.message
    }
  }
}

/**
 * Update contact submission status (Admin only)
 * @param {string} id - Contact submission ID
 * @param {string} status - New status
 * @returns {Promise} Updated contact
 */
export const updateContactStatus = async (id, status) => {
  try {
    const response = await api.put(`/contact/${id}`, { status })
    return {
      success: true,
      data: response.data
    }
  } catch (error) {
    throw {
      success: false,
      message: 'Failed to update contact status',
      error: error.response?.data || error.message
    }
  }
}

// ============================================
// GALLERY API CALLS
// ============================================

/**
 * Get all gallery items
 * @returns {Promise} Gallery items list
 */
export const getGalleryItems = async () => {
  try {
    const response = await api.get('/gallery')
    return {
      success: true,
      data: response.data,
      count: response.data.count
    }
  } catch (error) {
    // Return empty array if API fails (fallback to local data)
    console.warn('Using local gallery data as fallback')
    return {
      success: false,
      data: [],
      message: 'Using local gallery data'
    }
  }
}

/**
 * Get gallery items by category
 * @param {string} category - Category name
 * @returns {Promise} Filtered gallery items
 */
export const getGalleryByCategory = async (category) => {
  try {
    const response = await api.get(`/gallery/category/${category}`)
    return {
      success: true,
      data: response.data
    }
  } catch (error) {
    throw {
      success: false,
      message: 'Failed to fetch gallery items',
      error: error.response?.data || error.message
    }
  }
}

// ============================================
// TESTIMONIALS API CALLS
// ============================================

/**
 * Get all approved testimonials
 * @returns {Promise} Testimonials list
 */
export const getTestimonials = async () => {
  try {
    const response = await api.get('/testimonials')
    return {
      success: true,
      data: response.data.data || response.data
    }
  } catch (error) {
    // Return empty array if API fails (fallback to local data)
    console.warn('Using local testimonials data as fallback')
    return {
      success: false,
      data: [],
      message: 'Using local testimonials data'
    }
  }
}

/**
 * Submit a new testimonial
 * @param {Object} testimonialData - Testimonial data
 * @returns {Promise} Submission response
 */
export const submitTestimonial = async (testimonialData) => {
  try {
    const response = await api.post('/testimonials', testimonialData)
    return {
      success: true,
      data: response.data,
      message: 'Thank you for your testimonial! It will be reviewed shortly.'
    }
  } catch (error) {
    throw {
      success: false,
      message: error.response?.data?.message || 'Failed to submit testimonial',
      error: error.response?.data || error.message
    }
  }
}

// ============================================
// SERVICES API CALLS
// ============================================

/**
 * Get all services
 * @returns {Promise} Services list
 */
export const getServices = async () => {
  try {
    const response = await api.get('/services')
    return {
      success: true,
      data: response.data
    }
  } catch (error) {
    // Fallback to local data
    console.warn('Using local services data as fallback')
    return {
      success: false,
      data: [],
      message: 'Using local services data'
    }
  }
}

/**
 * Get service by ID
 * @param {string} id - Service ID
 * @returns {Promise} Service details
 */
export const getServiceById = async (id) => {
  try {
    const response = await api.get(`/services/${id}`)
    return {
      success: true,
      data: response.data
    }
  } catch (error) {
    throw {
      success: false,
      message: 'Failed to fetch service details',
      error: error.response?.data || error.message
    }
  }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Check API health/status
 * @returns {Promise} API status
 */
export const checkApiHealth = async () => {
  try {
    const response = await api.get('/health')
    return {
      success: true,
      status: response.data.status,
      message: response.data.message,
      database: response.data.database
    }
  } catch (error) {
    return {
      success: false,
      status: 'OFFLINE',
      message: 'API server is not responding',
      database: 'Unknown'
    }
  }
}

/**
 * Test API connection
 * @returns {Promise} Connection test result
 */
export const testConnection = async () => {
  const startTime = Date.now()
  try {
    const response = await api.get('/health', { timeout: 5000 })
    const responseTime = Date.now() - startTime
    return {
      connected: true,
      responseTime: `${responseTime}ms`,
      status: response.data.status,
      database: response.data.database,
      url: API_URL
    }
  } catch (error) {
    return {
      connected: false,
      error: error.message,
      url: API_URL
    }
  }
}

/**
 * Format API error for display
 * @param {Object} error - Error object
 * @returns {string} Formatted error message
 */
export const formatApiError = (error) => {
  if (error.response) {
    const { status, data } = error.response
    return data.message || `Server error: ${status}`
  } else if (error.request) {
    return 'Unable to connect to server. Please check your internet connection.'
  } else {
    return error.message || 'An unexpected error occurred.'
  }
}

// ============================================
// DEVELOPMENT HELPERS
// ============================================

if (import.meta.env.DEV) {
  // Expose API to window for debugging in browser console
  window.api = {
    submitContactForm,
    getContactSubmissions,
    updateContactStatus,
    getGalleryItems,
    getGalleryByCategory,
    getTestimonials,
    submitTestimonial,
    getServices,
    getServiceById,
    checkApiHealth,
    testConnection,
    formatApiError
  }
  
  console.log('🔧 API Service initialized')
  console.log('📡 Base URL:', API_URL)
  
  // Test connection on load
  testConnection().then(result => {
    if (result.connected) {
      console.log(`✅ API connected successfully (${result.responseTime})`)
      console.log(`📁 Database: ${result.database}`)
    } else {
      console.warn(`⚠️  API connection failed. Running in offline mode.`)
      console.warn(`   Make sure backend server is running on ${API_URL}`)
      console.warn(`   Run 'npm run dev' in the server directory`)
    }
  })
}

// Export the axios instance as default
export default api