import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import GalleryTabs from '../components/gallery/GalleryTabs'
import ImageGrid from '../components/gallery/ImageGrid'
import VideoGrid from '../components/gallery/VideoGrid'
import Lightbox from '../components/gallery/Lightbox'
import SectionTitle from '../components/common/SectionTitle'
import { galleryCategories, galleryItems } from '../data/galleryData'
import { videoGallery } from '../data/videoData'

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)

  const filteredImages = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

  const handleImageClick = (item) => {
    setSelectedItem(item)
    setLightboxOpen(true)
  }

  const handleNext = () => {
    const currentIndex = filteredImages.findIndex(i => i.id === selectedItem.id)
    const nextItem = filteredImages[currentIndex + 1]
    if (nextItem) setSelectedItem(nextItem)
  }

  const handlePrev = () => {
    const currentIndex = filteredImages.findIndex(i => i.id === selectedItem.id)
    const prevItem = filteredImages[currentIndex - 1]
    if (prevItem) setSelectedItem(prevItem)
  }

  return (
    <>
      <Helmet>
        <title>Gallery - Garden Recovery Ltd | Our Portfolio</title>
        <meta name="description" content="Browse our gallery of stunning garden transformations. 27 project photos and 4 videos showcasing our landscaping expertise." />
      </Helmet>

      <section className="pt-32 pb-20 bg-background min-h-screen">
        <div className="container-custom">
          <SectionTitle 
            label="PORTFOLIO"
            title="Our Work Gallery"
            subtitle="Explore our portfolio of 24 stunning garden transformations"
          />

          <GalleryTabs
            categories={galleryCategories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">
              Project Photos ({filteredImages.length})
            </h2>
            <ImageGrid
              images={filteredImages}
              onImageClick={handleImageClick}
            />
          </div>

          <div className="mt-20">
            <h2 className="text-2xl font-bold mb-6">
              Project Videos ({videoGallery.length})
            </h2>
            <VideoGrid videos={videoGallery} />
          </div>
        </div>
      </section>

      {lightboxOpen && selectedItem && (
        <Lightbox
          item={selectedItem}
          onClose={() => setLightboxOpen(false)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </>
  )
}

export default Gallery