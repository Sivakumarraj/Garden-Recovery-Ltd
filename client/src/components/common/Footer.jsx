import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTiktok, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#15281F] text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">Garden Recovery Ltd</h3>
            <p className="text-gray-400 mb-4">
              Professional gardening, landscaping, and tree care services. Transforming outdoor spaces across the UK.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/17N2H7Stc5/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.instagram.com/garden_recovery_?igsh=MTVqYjdlM3J2aXpheg==" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.tiktok.com/@_garden_recovery_essex_" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaTiktok size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'About', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Fencing & Decking</li>
              <li className="text-gray-400">Garden Maintenance</li>
              <li className="text-gray-400">Tree & Hedge Work</li>
              <li className="text-gray-400">Fish Pond Services</li>
              <li className="text-gray-400">Artificial Grass & Turfing</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaPhone className="text-primary-light mt-1" />
                <span className="text-gray-400">07562 240691 / 07714 314156</span>
              </li>
              <li className="flex items-start space-x-3">
                <FaEnvelope className="text-primary-light mt-1" />
                <a href="mailto:Gardenrecovery95@gmail.com" className="text-gray-400 hover:text-white transition-colors">Gardenrecovery95@gmail.com</a>
              </li>
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-primary-light mt-1" />
                <span className="text-gray-400">Chelmsford, Essex</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Garden Recovery Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer