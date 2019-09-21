import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
    [ selectCart ],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    selectCartItems,
    (cartItems) => cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity,
        0
    )
);

export const selectTest = createSelector(
    [(v) => v],
    (value) => {
        console.log("processing", value);
        return value * 12;
    }
);
