import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card group"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <span className="text-4xl mr-3">{service.icon}</span>
          <h3 className="text-2xl font-bold inline">{service.title}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 mb-4">{service.description}</p>
        
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Key Features:</h4>
          <ul className="space-y-2">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <span className="text-primary mr-2 mt-1">✓</span>
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">{service.price}</span>
          <Link 
            to="/contact" 
            className="btn-primary"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default ServiceCard