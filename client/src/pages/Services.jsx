import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import CallToAction from '../components/common/CallToAction'

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services - Garden Recovery Ltd</title>
        <meta name="description" content="Professional lawn care, landscaping, and tree trimming services. We offer a full range of gardening and landscaping services tailored to your needs." />
      </Helmet>

      {/* Hero Header Section */}
      <section className="pt-40 pb-20 bg-[#EFF3EB] text-center px-4 relative overflow-hidden">
        {/* Abstract gradient backdrop resembling Lovable's template background */}
        <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-white/40 to-transparent pointer-events-none"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <p className="text-primary font-bold tracking-widest text-sm uppercase mb-4">Our Services</p>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
            Professional Gardening Services
          </h1>
          <p className="text-lg text-muted-foreground">
            We offer a full range of gardening and landscaping services tailored to your needs.
          </p>
        </motion.div>
      </section>

      {/* Services List Section */}
      <section className="py-24 bg-white">
        <div className="container-custom space-y-32">
          
          {/* Lawn Care */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/2 w-full"
            >
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                <img 
                  src="/images/services/lawn-care.jpg" 
                  alt="Lawn Care" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/2 w-full"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">Lawn Care</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                A beautiful lawn is the foundation of any great garden. Our comprehensive lawn care services ensure your grass stays green, healthy, and immaculate throughout the seasons.
              </p>
              <ul className="space-y-4">
                {['Regular mowing & edging', 'Fertilization programs', 'Weed & pest control', 'Aeration & overseeding', 'Seasonal clean-ups'].map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="text-primary w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Landscaping */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/2 w-full"
            >
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                <img 
                  src="/images/services/landscaping.jpg" 
                  alt="Landscaping" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/2 w-full"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">Landscaping</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Transform your outdoor space with our creative landscaping solutions. From initial design to final installation, we bring your garden vision to reality.
              </p>
              <ul className="space-y-4">
                {['Custom garden design', 'Planting & flower beds', 'Pathways & patios', 'Retaining walls', 'Water features & irrigation'].map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="text-primary w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Tree Trimming */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/2 w-full"
            >
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                <img 
                  src="/images/services/tree-trimming.jpg" 
                  alt="Tree Trimming" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/2 w-full"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">Tree Trimming</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Keep your trees healthy, safe, and beautiful with our professional tree care services. Our certified arborists handle everything from routine pruning to complex removals.
              </p>
              <ul className="space-y-4">
                {['Crown reduction & shaping', 'Dead wood removal', 'Hedge trimming', 'Stump grinding', 'Emergency storm damage'].map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="text-primary w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Shared CTA Component */}
      <CallToAction />
    </>
  )
}

export default Services