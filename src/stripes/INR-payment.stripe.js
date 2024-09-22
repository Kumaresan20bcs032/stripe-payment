import env from 'dotenv'
import Stripe from 'stripe'
import * as response from '../utils/response.util'
env.config()
const stripe = Stripe(process.env.STRIPE_KEY)

export const makePayment = async (req, res) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 2000,
            currency: 'inr',
            payment_method_types: [
                "card"
            ]
        })
        return response.sendSuccess(res, 201, 'paymentIntent is sended to complete required-payment', paymentIntent)
    }
    catch (error) {
        return response.sendError(res, 500, error.message)
    }
}