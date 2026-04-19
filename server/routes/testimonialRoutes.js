import express from 'express'
import { getTestimonials, submitTestimonial } from '../controllers/testimonialController.js'

const router = express.Router()

router.get('/', getTestimonials)
router.post('/', submitTestimonial)

export default router