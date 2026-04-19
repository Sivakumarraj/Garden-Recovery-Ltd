import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { galleryItems } from '../../data/galleryData'
import SectionTitle from '../common/SectionTitle'

const GalleryPreview = () => {
  const previewImages = galleryItems.slice(0, 6)

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <SectionTitle 
          title="Gallery Preview"
          subtitle="Take a look at some of our recent projects."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-2xl cursor-pointer"
            >
              <img 
                src={image.src} 
                alt={image.title}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/gallery" className="btn-primary inline-block">
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  )
}

export default GalleryPreview