import { motion } from 'framer-motion'
import SectionTitle from '../common/SectionTitle'
import { FaPlay } from 'react-icons/fa'

const VideoSection = () => {
  const videos = [
    { id: 1, title: 'Lawn Maintenance', thumbnail: '/src/assets/images/services/lawn-care.jpg' },
    { id: 2, title: 'Landscaping Project', thumbnail: '/src/assets/images/services/landscaping.jpg' },
    { id: 3, title: 'Tree Surgery', thumbnail: '/src/assets/images/services/tree-trimming.jpg' },
    { id: 4, title: 'Garden Design', thumbnail: '/src/assets/images/gallery/img1.jpg' }
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
          {videos.map((video) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: video.id * 0.1 }}
              className="relative cursor-pointer overflow-hidden rounded-2xl shadow-sm bg-[#eaeee3] hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-[16/10] flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 mb-4">
                  <FaPlay className="text-primary ml-1 text-xl" />
                </div>
                <p className="text-gray-600 font-medium text-sm">Video {video.id}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VideoSection