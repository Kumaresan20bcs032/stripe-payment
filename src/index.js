import express from 'express'
import env from 'dotenv'
import path from 'path'
import stripeRouter from './routes/stripe.route'
env.config()
const app = express()

app.use(express.json())

app.use('/', express.static('public'))
app.get('/', (req, res) => {
    res.sendFile(path.join(path.resolve('public'), 'stripe.html'))
})

app.use('/api/payment/v1',stripeRouter)

app.listen(process.env.PORT, () => {
    console.log(`server started at port:${process.env.PORT}`)
})