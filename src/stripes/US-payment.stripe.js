import env from 'dotenv'
import Stripe from 'stripe'
import * as response from '../utils/response.util'
env.config()
const stripe = Stripe(process.env.STRIPE_KEY)

export const makePayment = async (req, res) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 2000,
            currency: 'usd',
            payment_method: 'pm_card_us',
            confirm: true,
            automatic_payment_methods: {
                enabled: true,
                allow_redirects: 'never'
            }
        })
        return response.sendSuccess(res, 201, 'paymentIntent is sended to complete required-payment', paymentIntent)
    }
    catch (error) {
        return response.sendError(res, 500, error.message)
    }
}