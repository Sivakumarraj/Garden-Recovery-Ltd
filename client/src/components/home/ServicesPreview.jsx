import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { servicesData } from '../../data/servicesData'
import SectionTitle from '../common/SectionTitle'

const ServicesPreview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <SectionTitle 
          label="OUR SERVICES"
          title="What We Offer"
          subtitle="From routine lawn maintenance to complete landscape transformations, we've got you covered."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.slice(0, 3).map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group border border-gray-100 flex flex-col h-full"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              
              <div className="p-8 lg:p-10 flex-1 flex flex-col">
                <h3 className="text-[28px] font-display font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ServicesPreview