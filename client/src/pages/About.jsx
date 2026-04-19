import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { TreePine, Award, Users, Target } from 'lucide-react'
import CallToAction from '../components/common/CallToAction'

const About = () => {
  return (
    <div className="pt-24 bg-[#F8FAF9]">
      <Helmet>
        <title>About Us - Garden Recovery Ltd</title>
        <meta name="description" content="Passionate gardeners dedicated to transforming outdoor spaces since 2010." />
      </Helmet>

      {/* Stats Section / Top Banner */}
      <section className="bg-[#247A4D] text-white py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:divide-x sm:divide-white/20">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="text-4xl md:text-5xl font-display font-medium mb-2">15<span className="text-3xl font-light">+</span></div>
              <div className="text-sm md:text-base text-white/90">Years Experience</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="text-4xl md:text-5xl font-display font-medium mb-2">500<span className="text-3xl font-light">+</span></div>
              <div className="text-sm md:text-base text-white/90">Projects Completed</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="text-4xl md:text-5xl font-display font-medium mb-2">300<span className="text-3xl font-light">+</span></div>
              <div className="text-sm md:text-base text-white/90">Happy Clients</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <div className="text-4xl md:text-5xl font-display font-medium mb-2">25<span className="text-3xl font-light">+</span></div>
              <div className="text-sm md:text-base text-white/90">Team Members</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 text-center">
        <div className="container-custom max-w-6xl">
          <p className="text-primary font-bold tracking-widest text-sm uppercase mb-4">OUR VALUES</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-16">
            What Drives Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: TreePine, title: "Sustainability", desc: "We prioritize eco-friendly practices and materials in every project." },
              { icon: Award, title: "Excellence", desc: "We strive for perfection in every garden we touch." },
              { icon: Users, title: "Client Focus", desc: "Your vision drives everything we do." },
              { icon: Target, title: "Innovation", desc: "Embracing modern techniques for timeless results." }
            ].map((val, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 flex flex-col items-center shadow-sm"
              >
                <div className="w-16 h-16 rounded-full border border-primary/20 bg-[#F4FAF6] flex items-center justify-center text-primary mb-6">
                  <val.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-4">{val.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-24 bg-white text-center">
        <div className="container-custom max-w-5xl">
          <p className="text-primary font-bold tracking-widest text-sm uppercase mb-4">OUR TEAM</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-16">
            Meet the Experts
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { init: 'DG', name: 'David Green', role: 'Founder & Head Gardener' },
              { init: 'ER', name: 'Emily Rose', role: 'Landscape Designer' },
              { init: 'MW', name: 'Michael Woods', role: 'Lead Arborist' },
              { init: 'SB', name: 'Sarah Bloom', role: 'Client Relations Manager' }
            ].map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-32 h-32 rounded-full bg-[#E5ECE7] text-[#247A4D] flex items-center justify-center text-3xl font-display font-bold mb-6">
                  {member.init}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-muted-foreground text-xs text-gray-500 uppercase tracking-wide">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Shared CTA Component */}
      <CallToAction />
    </div>
  )
}

export default About