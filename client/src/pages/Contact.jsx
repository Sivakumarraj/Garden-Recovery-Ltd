import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Phone, Mail, MapPin } from 'lucide-react'
import { FaTiktok, FaFacebookF, FaInstagram, FaEnvelope } from 'react-icons/fa'
import { submitContactForm } from '../services/api'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    try {
      const response = await submitContactForm(data)

      if (response.success) {
        setSubmitStatus('success')
        reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  return (
    <div className="pt-32 pb-20 bg-[#F8FAF9] min-h-[calc(100vh-300px)]">
      <Helmet>
        <title>Contact Us - Garden Recovery Ltd</title>
        <meta name="description" content="Reach out—we'd love to hear from you." />
      </Helmet>

      <div className="container-custom max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-primary font-bold tracking-widest text-sm uppercase mb-4">GET IN TOUCH</p>
          <h1 className="text-5xl md:text-6xl font-display font-medium text-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground">
            Have a question or ready to start your project? Reach out — we'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-10 mb-12">
              <div className="flex items-start group">
                <div className="w-14 h-14 rounded-full bg-[#EAF0E8] flex items-center justify-center text-[#247A4D] mr-5 flex-shrink-0 group-hover:bg-[#247A4D] group-hover:text-white transition-colors duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg mb-1">Phone</h3>
                  <a href="tel:07562240691" className="text-muted-foreground hover:text-primary transition-colors block">
                    07562 240691
                  </a>
                  <a href="tel:07714314156" className="text-muted-foreground hover:text-primary transition-colors block">
                    07714 314156
                  </a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-14 h-14 rounded-full bg-[#EAF0E8] flex items-center justify-center text-[#247A4D] mr-5 flex-shrink-0 group-hover:bg-[#247A4D] group-hover:text-white transition-colors duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg mb-1">Email</h3>
                  <a href="mailto:Gardenrecovery95@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    Gardenrecovery95@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-14 h-14 rounded-full bg-[#EAF0E8] flex items-center justify-center text-[#247A4D] mr-5 flex-shrink-0 group-hover:bg-[#247A4D] group-hover:text-white transition-colors duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg mb-1">Address</h3>
                  <span className="text-muted-foreground">
                    Chelmsford, Essex
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-display font-bold text-xl mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/share/17N2H7Stc5/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-[#EAF0E8] text-[#247A4D] flex items-center justify-center hover:bg-[#247A4D] hover:text-white transition-colors">
                  <FaFacebookF className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/garden_recovery_?igsh=MTVqYjdlM3J2aXpheg==" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-[#EAF0E8] text-[#247A4D] flex items-center justify-center hover:bg-[#247A4D] hover:text-white transition-colors">
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a href="https://www.tiktok.com/@_garden_recovery_essex_" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-[#EAF0E8] text-[#247A4D] flex items-center justify-center hover:bg-[#247A4D] hover:text-white transition-colors">
                  <FaTiktok className="w-5 h-5" />
                </a>
                <a href="mailto:Gardenrecovery95@gmail.com" className="w-12 h-12 rounded-full bg-[#EAF0E8] text-[#247A4D] flex items-center justify-center hover:bg-[#247A4D] hover:text-white transition-colors">
                  <FaEnvelope className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                <input
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-4 py-3 bg-[#FAFAFA] border border-gray-200 rounded text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Your full name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className="w-full px-4 py-3 bg-[#FAFAFA] border border-gray-200 rounded text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="you@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                <input
                  type="tel"
                  {...register('phone', { required: 'Phone number is required' })}
                  className="w-full px-4 py-3 bg-[#FAFAFA] border border-gray-200 rounded text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="+44 123 456 7890"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  rows="4"
                  className="w-full px-4 py-3 bg-[#FAFAFA] border border-gray-200 rounded text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full py-4 text-center disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <div className="bg-green-50 text-green-700 p-4 rounded text-sm mt-4 border border-green-200">
                  Thank you! We'll get back to you shortly.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 text-red-700 p-4 rounded text-sm mt-4 border border-red-200">
                  Something went wrong. Please try again later.
                </div>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default Contact