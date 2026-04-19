import asyncHandler from 'express-async-handler'
import Testimonial from '../models/Testimonial.js'

export const getTestimonials = asyncHandler(async (req, res) => {
  const testimonials = await Testimonial.find({ approved: true }).sort('-createdAt')
  res.json({
    success: true,
    data: testimonials
  })
})

export const submitTestimonial = asyncHandler(async (req, res) => {
  const testimonial = await Testimonial.create({
    ...req.body,
    approved: false
  })

  res.status(201).json({
    success: true,
    message: 'Thank you for your testimonial! It will be reviewed shortly.',
    data: testimonial
  })
})