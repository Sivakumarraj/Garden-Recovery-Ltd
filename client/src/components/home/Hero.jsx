import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import heroBg from '../../assets/images/hero/hero-bg.jpg'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      <div className="container-custom relative z-10 text-white pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-center lg:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-[1.1] tracking-tight">
            Transform Your
            <span className="block opacity-100">Outdoor Space with</span>
            Expert Gardening Services
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-10 text-white/90 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
            Professional gardening, landscaping, and tree care services to bring your vision to life.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/contact" className="btn-primary px-10 py-4 text-base tracking-wide min-w-[200px]">
              Get Free Quote
            </Link>
            <a href="tel:+441234567890" className="btn-secondary px-10 py-4 text-base tracking-wide min-w-[200px] backdrop-blur-sm">
              Call Now
            </a>
          </div>


        </motion.div>
      </div>


    </section>
  )
}

export default Hero