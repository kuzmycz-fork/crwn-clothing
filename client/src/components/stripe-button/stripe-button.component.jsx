import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceInCents = price * 100;
    const stripeKey = 'pk_test_oCYUYclB0IZuGH0BRQVb37Qs00bd7fqVPe';

    const onToken = ( token ) => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceInCents,
                token
            }
        }).then((response) => {
            alert('Payment successful');
        }).catch((error) => {
            console.log('Payment error: ', JSON.parse(error));
            alert('There was an issue with your payment. Please ensure that you are using the provided number');
        });
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