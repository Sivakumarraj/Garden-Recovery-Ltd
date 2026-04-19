import mongoose from 'mongoose'

const testimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: String,
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  },
  text: {
    type: String,
    required: true
  },
  project: String,
  approved: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
})

const Testimonial = mongoose.model('Testimonial', testimonialSchema)
export default Testimonial