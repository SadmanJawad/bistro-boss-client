import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

//TODO: add stripe public key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
const Payment = () => {
    return (
        <div>
            <SectionTitle subHeading='please process' heading='Payment'></SectionTitle>
            <h2 className="text-3xl">Prochur tk kamabo!!!!!!!!!!!!!!!!!!!</h2>    
            <Elements stripe={stripePromise}>
                <CheckoutForm/>
                </Elements>        
        </div>
    );
};

export default Payment;