const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require('stripe')('sk_test_51IojwTSERUzepCsyJt83ASk0mQJRhUH9CM6oN9rFoJis538yQmXcwzNZtLyPxkYZuXioYS82XK6qnHXuXG72MJ5L00dBvSkHzS');

// APP config
const app = express();

// Middlewares
app.use(cors({ origin:true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('Hello World'));

app.post('/payments/create', async (request, response) =>{
    const total = request.query.total;
    console.log("Payment request received of >>>", total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});
// Listen Methods
exports.api = functions.https.onRequest(app)



