import React from "react";
import CustomButton from "../custom-button/custom-button.component";

const StripeCheckoutButton = ({ price }) => {
  const handlePayment = () => {
    alert(`Payment of $${price} processed successfully!`);
    // You can dispatch a clearCart action here if you want
  };

  return (
    <CustomButton onClick={handlePayment}>
      PAY NOW
    </CustomButton>
  );
};

export default StripeCheckoutButton;