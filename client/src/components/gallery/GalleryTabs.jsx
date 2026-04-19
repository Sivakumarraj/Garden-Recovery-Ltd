import { motion } from 'framer-motion'

const GalleryTabs = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {categories.map((category) => (
        <motion.button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-6 py-2 rounded-full font-medium transition-all ${
            activeCategory === category.id
              ? 'bg-primary text-white shadow-lg'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category.label}
          {category.count && (
            <span className={`ml-2 text-sm ${
              activeCategory === category.id ? 'text-white/80' : 'text-gray-500'
            }`}>
              ({category.count})
            </span>
          )}
        </motion.button>
      ))}
    </div>
  )
}

export default GalleryTabs