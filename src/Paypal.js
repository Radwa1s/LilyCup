import React from "react";
import PaypalCheckoutButton from "./Component/PaypalCheckoutButton";

export default function Paypal() {
  const product = {
    description: "Lily cup",
    price: 10,
  };

  return (
    <div>
      <PaypalCheckoutButton product={product} />
    </div>
  );
}
