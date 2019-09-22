import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceInCents = price * 100;
    const stripeKey = 'pk_test_oCYUYclB0IZuGH0BRQVb37Qs00bd7fqVPe';

    const onToken = ( token ) => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceInCents}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={stripeKey}
        />
    );
};

export default StripeCheckoutButton;