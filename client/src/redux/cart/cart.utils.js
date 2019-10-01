export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find( 
        (cartItem) => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === cartItemToAdd.id 
            ? { ...cartItem, quantity: (cartItem.quantity + 1) } 
            : cartItem
            )
    }

    return [ ...cartItems, {...cartItemToAdd, quantity: 1} ];
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
    const existingCartItem = cartItems.find( 
        (cartItem) => cartItem.id === itemToRemove.id
    );

    if (existingCartItem) {
        const targetId = existingCartItem.id;

        if (existingCartItem.quantity < 2) {
            return cartItems.filter(
                ( item ) => item.id !== targetId
            );
        } else {
            return cartItems.map(
                ( item ) => item.id === targetId 
                ? {...item, quantity: (item.quantity - 1)} 
                : item
                );
        }
    } else {
        return cartItems;
    }
};