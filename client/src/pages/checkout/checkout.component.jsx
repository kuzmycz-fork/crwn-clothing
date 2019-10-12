import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import { CheckoutTotal, CheckoutTotalWarning, HeaderBlockContainer, CheckoutHeaderContainer, CheckoutPageContainer } from './checkout.styles';

const CheckoutPage = ( { cartItems, total } ) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <HeaderBlockContainer>
                <span>Product</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Description</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Quantity</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Price</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Remove</span>
            </HeaderBlockContainer>
        </CheckoutHeaderContainer>
        {
            cartItems.map(( item ) => (
               <CheckoutItem key={item.id} cartItem={item}/> 
            ))
        }
        <CheckoutTotal><span> TOTAL: ${total}</span></CheckoutTotal>

        <CheckoutTotalWarning>
            *Please use the following test card for payment*
            <br />
            4242 4242 4242 4242 - Exp 01/22 CVS 123
        </CheckoutTotalWarning>

        <StripeCheckoutButton price={total} />
    </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);