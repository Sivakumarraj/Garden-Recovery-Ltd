import { motion } from 'framer-motion'
import { FaLeaf, FaShieldAlt, FaClock, FaAward } from 'react-icons/fa'
import SectionTitle from '../common/SectionTitle'

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: FaLeaf,
      title: "Eco-Friendly",
      description: "We use sustainable practices and organic products wherever possible.",
      color: "text-green-600"
    },
    {
      icon: FaShieldAlt,
      title: "Fully Insured",
      description: "Complete peace of mind with comprehensive liability insurance.",
      color: "text-blue-600"
    },
    {
      icon: FaClock,
      title: "Reliable Service",
      description: "On-time, every time. We respect your schedule and your property.",
      color: "text-orange-600"
    },
    {
      icon: FaAward,
      title: "Expert Team",
      description: "Trained horticulturists with years of professional experience.",
      color: "text-purple-600"
    }
  ]

  return (
    <section className="section-padding bg-background/50">
      <div className="container-custom">
        <SectionTitle 
          label="WHY US"
          title="Why Choose Garden Recovery"
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group flex flex-col items-center"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-6">
                  <Icon className="text-2xl" />
                </div>
                <h3 className="text-xl font-display font-medium mb-3 text-foreground">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-[15px] font-normal px-4 max-w-xs">
                  {reason.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs