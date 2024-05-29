import express from 'express'
import { makePayment } from '../stripes/INR-payment.stripe'
const router = express.Router()

router.post('/stripe', makePayment)

export default router