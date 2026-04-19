import React from 'react'
import { Link } from 'react-router-dom'

const CallToAction = () => {
  return (
    <section className="relative overflow-hidden bg-[#247A4D] py-24">
      {/* Decorative abstract shapes to match reference */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="absolute -left-[20%] -bottom-[20%] w-[50%] h-[150%] bg-[#2E8B57] rounded-full blur-3xl opacity-40"></div>
      <div className="absolute right-0 top-0 w-[40%] h-[120%] bg-[#1E6740] rounded-l-full opacity-80 shadow-2xl"></div>
      
      <div className="container-custom relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
          Ready to Transform Your Garden?
        </h2>
        <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
          Get a free, no-obligation quote today and let our experts bring your garden vision to life.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/contact" 
            className="px-8 py-4 bg-white text-[#247A4D] font-bold rounded hover:bg-gray-50 transition-colors"
          >
            Get Free Quote
          </Link>
          <a 
            href="tel:+447712345678" 
            className="px-8 py-4 bg-transparent text-white border border-white/40 font-bold rounded hover:bg-white/10 transition-colors"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
