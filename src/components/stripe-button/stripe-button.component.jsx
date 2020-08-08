import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51H5sCRDT1gnESakeeyfZPTJFhHeV4fvX4ZtJMzQ0lIWA6jVVMWgwoiiyseYGX5EzEc7E0zoPNCqwkfj5MIPKcl9J007YjH3Yil';

  const onToken = (token) => {
    // console.log(token);
    alert('Payment Successful');
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Antai Clothing Ltd"
      billingAddress
      shippingAddriss
      image="https://sendeyo.com/up/d/f3eb2117da"
      // locale="en"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
