import express from 'express'
import { makePayment } from '../stripes/US-payment.stripe'
const router = express.Router()

router.post('/stripe', makePayment)

export default router