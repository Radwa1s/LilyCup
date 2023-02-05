import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";
export default function PaypalCheckoutButton(product) {
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const handleApprove = (orderID) => {
    setPaidFor(true);
  };
  if (paidFor) {
    alert("Thank you!");
  }

  if (error) {
    alert("error", error);
  }
  return (
    <div>
      <PayPalScriptProvider>
        <PayPalButtons
          onClick={(data, actions) => {
            const hasAlreadyPaid = false;
            if (hasAlreadyPaid) {
              setError("You have already paid for this product");
              return actions.reject();
            } else {
              return actions.resolve();
            }
          }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: product.description,
                  amount: {
                    value: product.price,
                  },
                },
              ],
            });
          }}
          onApprove={async (data, action) => {
            const order = await action.order.capture();
            console.log("order", order);
            handleApprove(data.orderID);
          }}
          onCancel={() => {}}
          onError={(err) => {
            setError(err);
            console.log("error", err);
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
}
