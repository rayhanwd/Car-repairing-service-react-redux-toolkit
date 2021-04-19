import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
    CardElement,
    Elements,
    useElements,
    useStripe
} from "@stripe/react-stripe-js";

const PayCard = ({handlePayment}) => {
    const CARD_OPTIONS = {
        iconStyle: "solid",
        style: {
            base: {
                iconColor: "#c4f0ff",
                color: "Black",
                fontWeight: 500,
                fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                fontSize: "16px",
                fontSmoothing: "antialiased",
                ":-webkit-autofill": {
                    color: "#fce883"
                },
                "::placeholder": {
                    color: "#87bbfd"
                }
            },
            invalid: {
                iconColor: "#ffc7ee",
                color: "#ffc7ee"
            }
        }
    };
    
    const CardField = ({ onChange }) => (
        <div className="FormRow">
            <CardElement options={CARD_OPTIONS} onChange={onChange} />
        </div>
    );
    
    const ErrorMessage = ({ children }) => (
        <div className="ErrorMessage" role="alert">
            {children}
        </div>
    );
    
    const CheckoutForm = () => {
        const [paymentInfo, setPaymentInfo] = useState();
        const stripe = useStripe();
        const elements = useElements();
        const [error, setError] = useState(null);
        const [cardComplete, setCardComplete] = useState(false);
        const [processing, setProcessing] = useState(false);
        const [paymentMethod, setPaymentMethod] = useState(null);
        const [billingDetails, setBillingDetails] = useState({
            email: "",
            phone: "",
            name: ""
        });
    
        const handleSubmit = (event) => {
            event.preventDefault();
    
            if (!stripe || !elements) {
                return;
            }
    
            if (error) {
                elements.getElement("card").focus();
                return;
            }
    
            if (cardComplete) {
                setProcessing(true);
            }
    
            const payload =  stripe.createPaymentMethod({
                type: "card",
                card: elements.getElement(CardElement),
                billing_details: billingDetails
            });
    
            setProcessing(false);
    
            if (payload.error) {
                setError(payload.error);
            } else {
                
                setPaymentInfo(billingDetails.email)
                setPaymentMethod(payload.paymentMethod);
                handlePayment(billingDetails.email); 
                alert('Your payment successfully placed')  
            }
    
            
    
        };
    
        return paymentMethod ? (
            <div className="Result">
                <div className="ResultTitle" role="alert">
                    Payment successful
          </div>
                <div className="ResultMessage">
                    Thank you for your ordering , we are soon delivering your home
                </div>
            </div>
        ) : (
            <form className="Form" onSubmit={handleSubmit}>
                <fieldset className="FormGroup">
                    <div class="mb-3 row">
                        <label for="Name" class="col-2 col-form-label">Name</label>
                        <div class="col-8">
                            <input
                                id="name"
                                type="text"
                                placeholder="Jane Doe"
                                required
                                autoComplete="name"
                                value={billingDetails.name}
                                onChange={(e) => {
                                    setBillingDetails({ ...billingDetails, name: e.target.value });
                                }} class="form-control" />
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="Email" class="col-2 col-form-label">Email</label>
                        <div class="col-8">
                            <input
                                id="email"
                                type="email"
                                placeholder="janedoe@gmail.com"
                                required
                                autoComplete="email"
                                value={billingDetails.email}
                                onChange={(e) => {
                                    setBillingDetails({ ...billingDetails, email: e.target.value });
                                }} class="form-control" />
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="Phone" class="col-2 col-form-label">Phone</label>
                        <div class="col-8">
                            <input
                                id="phone"
                                type="tel"
                                placeholder="(941) 555-0123"
                                required
                                autoComplete="tel"
                                value={billingDetails.phone}
                                onChange={(e) => {
                                    setBillingDetails({ ...billingDetails, phone: e.target.value });
                                }} class="form-control" />
                        </div>
                    </div>
                </fieldset>
                <fieldset className="FormGroup">
                    <CardField
                        onChange={(e) => {
                            setError(e.error);
                            setCardComplete(e.complete);
                        }}
                    />
                </fieldset>
                {error && <ErrorMessage>{error.message}</ErrorMessage>}
                <button class="custom-btn mt-3" processing={processing} error={error} disabled={!stripe}>
                    Pay $25
          </button>
            </form>
        );
    };
    
    const ELEMENTS_OPTIONS = {
        fonts: [
            {
                cssSrc: "https://fonts.googleapis.com/css?family=Roboto"
            }
        ]
    };
    
    // Make sure to call `loadStripe` outside of a component’s render to avoid
    // recreating the `Stripe` object on every render.
    const stripePromise = loadStripe("pk_test_51Ih9MaIx2Kgj710NQM9euIxGPnvUjKnQOyDwvfHu2BlwoXM84jRUnOEORjbSuHOCvg7wP4Uwz5bEcEKTlxMxSjKS00k0OaBAPM");
    return (
        <div className="AppWrapper">
            <Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
                <CheckoutForm />
            </Elements>
        </div>
    );
};

export default PayCard;
