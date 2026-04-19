export const videoGallery = [
  {
    id: 1,
    type: 'video',
    src: '/videos/vid1.mp4',
    thumbnail: '/images/gallery/img1.jpg',
    title: 'Complete Garden Transformation',
    description: 'Watch our team transform an overgrown garden into a beautiful outdoor living space.',
    duration: '2:30',
    category: 'transformation'
  },
  {
    id: 2,
    type: 'video',
    src: '/videos/vid2.mp4',
    thumbnail: '/images/gallery/img8.jpg',
    title: 'Landscaping Project Timelapse',
    description: 'From design to completion - see our professional landscaping process in action.',
    duration: '3:15',
    category: 'landscaping'
  },
  {
    id: 3,
    type: 'video',
    src: '/videos/vid3.mp4',
    thumbnail: '/images/gallery/img15.jpg',
    title: 'Tree Surgery Services',
    description: 'Professional tree care, pruning, and removal services by certified arborists.',
    duration: '1:45',
    category: 'tree-care'
  },
  {
    id: 4,
    type: 'video',
    src: '/videos/vid4.mp4',
    thumbnail: '/images/gallery/img22.jpg',
    title: 'Garden Maintenance Tips',
    description: 'Expert advice and demonstrations for maintaining a healthy, beautiful garden.',
    duration: '4:20',
    category: 'maintenance'
  }
]

export const getVideoById = (id) => {
  return videoGallery.find(video => video.id === id)
}

export const getVideosByCategory = (category) => {
  if (category === 'all') return videoGallery
  return videoGallery.filter(video => video.category === category)
}