import { motion } from 'framer-motion'

const ImageGrid = ({ images, onImageClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className="relative group overflow-hidden rounded-lg cursor-pointer aspect-square"
          onClick={() => onImageClick(image)}
        >
          <img
            src={image.src}
            alt={image.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h4 className="text-white font-semibold">{image.title}</h4>
              <p className="text-white/80 text-sm capitalize">{image.category}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default ImageGrid