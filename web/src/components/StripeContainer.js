import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51LnRUoKVH5YZ6sNNtUrDuNuaPUnvy6Owmyo7rDKNZnZoZYego5aaAG8XYkT3DMZmkvV4kUvdeI7ziwgw3ZBwCCvH00nEC2SgA1"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}
