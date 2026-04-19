import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import { testimonialsData } from '../../data/testimonialsData'
import SectionTitle from '../common/SectionTitle'

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const testimonialsPerPage = 3
  const totalPages = Math.ceil(testimonialsData.length / testimonialsPerPage)
  
  const currentTestimonials = testimonialsData.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  )

  return (
    <section className="section-padding bg-background/50">
      <div className="container-custom">
        <SectionTitle 
          label="TESTIMONIALS"
          title="What Our Clients Say"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col h-full"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-[#F1C40F] text-sm mr-1" />
                ))}
              </div>
              
              <p className="text-foreground text-lg italic leading-relaxed mb-8 flex-1">
                "{testimonial.text}"
              </p>
              
              {testimonial.name && (
                <div className="flex items-center mt-auto pt-6 border-t border-gray-50">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-foreground leading-none mb-1">{testimonial.name}</h4>
                    {testimonial.location && <p className="text-xs text-muted-foreground uppercase tracking-widest">{testimonial.location}</p>}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center space-x-2 mt-8">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentPage === i ? 'bg-primary w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Testimonials