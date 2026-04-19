import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-dark to-primary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Ready to Transform Your Garden?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Get a free, no-obligation quote today and let our experts bring your garden vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-primary hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Free Quote
            </Link>
            <a 
              href="tel:+441234567890" 
              className="bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-lg border-2 border-white transition-all duration-300 transform hover:scale-105"
            >
              Call Us Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection