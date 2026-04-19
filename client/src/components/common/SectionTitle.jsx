import { motion } from 'framer-motion'

const SectionTitle = ({ 
  label,
  title, 
  subtitle, 
  centered = true, 
  className = '',
  titleClassName = '',
  subtitleClassName = ''
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}
    >
      {label && (
        <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-[11px] mb-3">
          {label}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-display font-medium text-foreground tracking-tight mb-4 ${titleClassName}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg text-muted-foreground max-w-2xl ${centered ? 'mx-auto' : ''} ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

export default SectionTitle