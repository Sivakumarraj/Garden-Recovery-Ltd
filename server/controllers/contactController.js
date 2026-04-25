import asyncHandler from 'express-async-handler'
import Contact from '../models/Contact.js'
import { sendContactEmail } from '../utils/sendEmail.js'

export const submitContact = asyncHandler(async (req, res) => {
  const { name, email, phone, service, message } = req.body

  console.log('Incoming contact submission:', { name, email, service })

  let contact;
  try {
    contact = await Contact.create({
      name,
      email,
      phone,
      service,
      message
    })
    console.log('Contact saved to database:', contact._id)
  } catch (dbError) {
    console.error('Database save failed:', dbError.message)
    res.status(500)
    throw new Error(`Database error: ${dbError.message}. Please check if MONGODB_URI is correct and your IP is whitelisted.`)
  }

  try {
    await sendContactEmail(contact)
    console.log('Email process completed successfully')
  } catch (emailError) {
    console.error('Email sending failed but contact was saved:', emailError.message)
    // We don't throw an error here because the contact was already saved to DB
  }

  res.status(201).json({
    success: true,
    message: 'Thank you for contacting us! We\'ll get back to you soon.',
    data: contact
  })
})

export const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({}).sort('-createdAt')
  res.json({
    success: true,
    count: contacts.length,
    data: contacts
  })
})

export const updateContactStatus = asyncHandler(async (req, res) => {
  const { status } = req.body
  
  const contact = await Contact.findByIdAndUpdate(
    req.params.id,
    { status },
    { new: true, runValidators: true }
  )

  if (!contact) {
    res.status(404)
    throw new Error('Contact not found')
  }

  res.json({
    success: true,
    data: contact
  })
})