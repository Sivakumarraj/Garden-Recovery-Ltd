import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import rateLimit from 'express-rate-limit'
import contactRoutes from './routes/contactRoutes.js'
import testimonialRoutes from './routes/testimonialRoutes.js'
import { errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const app = express()

app.use(helmet())

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
})
app.use('/api/', limiter)

app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://garden-recovery-ltd.onrender.com',
    'https://gardenrecovery.co.uk',
    'https://www.gardenrecovery.co.uk',
    process.env.CLIENT_URL
  ].filter(Boolean),
  credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/api/contact', contactRoutes)
app.use('/api/testimonials', testimonialRoutes)

app.get('/api/health', async (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? 'CONNECTED' : 'DISCONNECTED'
  res.json({ 
    status: 'OK', 
    message: 'Server is running',
    database: dbStatus,
    env: {
      hasMongoUri: !!process.env.MONGODB_URI,
      hasResendKey: !!process.env.RESEND_API_KEY,
      hasFromEmail: !!process.env.RESEND_FROM_EMAIL,
      clientUrl: process.env.CLIENT_URL || 'Not Set'
    }
  })
})

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})