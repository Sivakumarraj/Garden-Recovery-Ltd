const generateGalleryImages = () => {
  const images = []
  const categories = ['landscaping', 'maintenance', 'before-after', 'hardscaping']
  
  for (let i = 1; i <= 24; i++) {
    let category
    if (i <= 6) category = 'landscaping'
    else if (i <= 12) category = 'maintenance'
    else if (i <= 18) category = 'before-after'
    else category = 'hardscaping'
    
    images.push({
      id: i,
      category: category,
      type: 'image',
      src: `/images/gallery/thumbnails/img${i}.jpg`,
      thumbnail: `/images/gallery/thumbnails/img${i}.jpg`,
      title: `Garden Project ${i}`,
      description: `Professional garden transformation project showcasing our ${category} expertise.`
    })
  }
  return images
}

export const galleryCategories = [
  { id: 'all', label: 'All Projects', count: 24 },
  { id: 'landscaping', label: 'Landscaping', count: 6 },
  { id: 'maintenance', label: 'Garden Maintenance', count: 6 },
  { id: 'before-after', label: 'Before & After', count: 6 },
  { id: 'hardscaping', label: 'Hardscaping', count: 6 }
]

export const galleryItems = generateGalleryImages()

export const getImagesByCategory = (category) => {
  if (category === 'all') return galleryItems
  return galleryItems.filter(item => item.category === category)
}

export const getImageById = (id) => {
  return galleryItems.find(item => item.id === id)
}