import express from 'express'
import { submitContact, getContacts, updateContactStatus } from '../controllers/contactController.js'

const router = express.Router()

router.post('/', submitContact)
router.get('/', getContacts)
router.put('/:id', updateContactStatus)

export default router