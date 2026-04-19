import asyncHandler from 'express-async-handler'
import Contact from '../models/Contact.js'
import { sendContactEmail } from '../utils/sendEmail.js'

export const submitContact = asyncHandler(async (req, res) => {
  const { name, email, phone, service, message } = req.body

  const contact = await Contact.create({
    name,
    email,
    phone,
    service,
    message
  })

  try {
    await sendContactEmail(contact)
  } catch (emailError) {
    console.error('Email sending failed:', emailError)
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