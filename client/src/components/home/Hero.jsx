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

      <div className="container-custom relative z-10 text-white pt-24 pb-32 h-full flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[1000px] text-center flex flex-col items-center justify-center w-full"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-display font-bold text-white mb-6 leading-[1.1] tracking-tight">
            Transform Your Garden
            <span className="block opacity-100">into a Masterpiece</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-10 text-white/90 max-w-3xl font-normal leading-relaxed mx-auto">
            Passionate gardeners dedicated to creating and maintaining beautiful outdoor spaces.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/contact" className="btn-primary px-10 py-4 text-base tracking-wide min-w-[200px]">
              Get Free Quote
            </Link>
            <Link to="/services" className="btn-secondary px-10 py-4 text-base tracking-wide min-w-[200px] backdrop-blur-sm bg-white/10 hover:bg-white/20 border border-white/30 text-white">
              Our Services
            </Link>
          </div>
        </motion.div>
      </div>


    </section>
  )
}

export default Hero