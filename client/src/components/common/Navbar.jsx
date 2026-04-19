import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/80 backdrop-blur-xl border-b border-gray-100 py-3 shadow-sm' 
        : 'bg-transparent py-5'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center relative">
          {/* Logo - Left */}
          <Link to="/" className="flex items-center relative z-10">
            <img src="/logo.png" alt="Garden Recovery Logo" className="h-10 md:h-12 w-auto" />
            <span className={`ml-3 font-display font-bold text-xl md:text-2xl transition-colors duration-300 ${
              scrolled ? 'text-primary' : 'text-white'
            }`}>
              Garden Recovery Ltd
            </span>
          </Link>

          {/* Navigation Links - Centered */}
          <div className="hidden lg:flex items-center space-x-10 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[15px] font-medium tracking-wide transition-all duration-300 relative group ${
                  isActive(link.path)
                    ? scrolled ? 'text-primary' : 'text-white'
                    : scrolled ? 'text-gray-600 hover:text-primary' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 ${
                  isActive(link.path) ? 'w-full' : 'group-hover:w-full'
                } ${scrolled ? 'bg-primary' : 'bg-white'}`}></span>
              </Link>
            ))}
          </div>

          {/* CTA Button - Right */}
          <div className="hidden lg:block relative z-10">
            <Link to="/contact" className={`btn-primary px-6 py-2.5 text-sm ${
              !scrolled && 'bg-white text-primary border-none hover:bg-gray-100 shadow-md'
            }`}>
              Get Free Quote
            </Link>
          </div>

          <button
            className="lg:hidden text-2xl relative z-10"
            onClick={() => setIsOpen(!isOpen)}
            style={{ color: scrolled ? '#1E8449' : 'white' }}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 animate-slide-up">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-3 font-medium ${
                  isActive(link.path) ? 'text-primary' : 'text-gray-700 hover:text-primary'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-primary block text-center mt-4"
              onClick={() => setIsOpen(false)}
            >
              Get Free Quote
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar