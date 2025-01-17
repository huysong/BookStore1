import React from "react";
import { useNavigate } from "react-router-dom";
import CheckoutForm from "../cart/CheckoutForm";

interface CheckoutPageProps {
  cartItems?: Array<{
    id: string;
    title: string;
    price: number;
    quantity: number;
  }>;
}

const CheckoutPage = ({ cartItems = [] }: CheckoutPageProps) => {
  const navigate = useNavigate();
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const handleCheckout = async (data: any) => {
    // Here you would typically:
    // 1. Validate the payment with a payment processor
    // 2. Create an order in your database
    // 3. Clear the cart
    // 4. Show a success message
    console.log("Processing order:", { data, cartItems });

    // For now, just redirect to a success page
    navigate("/checkout/success");
  };

  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <CheckoutForm total={total} onSubmit={handleCheckout} />
    </div>
  );
};

export default CheckoutPage;
