import { motion } from 'framer-motion'
import { useState } from 'react'

const VideoGrid = ({ videos }) => {
  const [playingVideo, setPlayingVideo] = useState(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {videos.map((video) => (
        <div key={video.id} className="relative group">
          {playingVideo === video.id ? (
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
              <video
                src={video.src}
                controls
                autoPlay
                className="w-full h-full object-cover"
                onEnded={() => setPlayingVideo(null)}
              />
              <button
                onClick={() => setPlayingVideo(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
              >
                ✕
              </button>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-lg overflow-hidden shadow-lg cursor-pointer"
              onClick={() => setPlayingVideo(video.id)}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-white font-semibold">{video.title}</h3>
                <p className="text-white/80 text-sm">{video.duration}</p>
              </div>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  )
}

export default VideoGrid