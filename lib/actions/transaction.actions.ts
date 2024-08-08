"use server"

import Stripe from "stripe"
import { redirect } from "next/navigation";
import { handleError } from "../utils";
import { connectToDatabase } from "../database/mongoose";
import Transaction from "../database/models/trans.model";
import { updateCredits } from "./user.actions";

export async function checkoutCredits(tramsaction: CheckoutTransactionParams) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

    const amount = Number(tramsaction.amount) * 100;

    const session = await stripe.checkout.sessions.create({
        line_items : [
            {
                price_data: {
                    currency: "usd",
                    unit_amount: amount,
                    product_data: {
                        name: tramsaction.plan,
                    }
                },
                quantity: 1
            }
        ],
        metadata: {
            plan: tramsaction.plan,
            credits: tramsaction.credits,
            buyerId: tramsaction.buyerId,
        },
        mode: "payment",
        success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/dashboard/profile `,
        cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/dashboard`,
    })

    redirect(session.url!)
} 

export async function createTrasaction(transaction:CreateTransactionParams) {
    try {
        await connectToDatabase();


        const newTransaction = await Transaction.create({
            ...transaction, buyer: transaction.buyerId
        })

        await updateCredits(transaction.buyerId, transaction.credits)

        return JSON.parse(JSON.stringify(newTransaction))
    } catch (error) {
        handleError(error)
    }
}