import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionTitle from '../common/SectionTitle'

// Individual Video Component that handles its own Intersection Observer
const ScrollVideo = ({ video, index }) => {
  const videoRef = useRef(null)
  const isInView = useInView(videoRef, { amount: 0.5 }) // Trigger when 50% visible

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(e => console.log("Autoplay prevented:", e))
      } else {
        videoRef.current.pause()
      }
    }
  }, [isInView])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 bg-black"
    >
      <div className="aspect-[16/10]">
        <video
          ref={videoRef}
          src={video.src}
          poster={video.thumbnail}
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
        />
      </div>
    </motion.div>
  )
}

const VideoSection = () => {
  const videos = [
    { id: 1, src: '/videos/vid1.mp4', thumbnail: '/images/services/lawn-care.jpg' },
    { id: 2, src: '/videos/vid2.mp4', thumbnail: '/images/services/landscaping.jpg' },
    { id: 3, src: '/videos/vid3.mp4', thumbnail: '/images/services/tree-trimming.jpg' },
    { id: 4, src: '/videos/vid4.mp4', thumbnail: '/images/gallery/img1.jpg' }
  ]

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <SectionTitle 
          label="WATCH"
          title="See Us in Action"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          {videos.map((video, index) => (
            <ScrollVideo key={video.id} video={video} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default VideoSection