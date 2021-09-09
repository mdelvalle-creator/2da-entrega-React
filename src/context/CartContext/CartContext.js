import React, { createContext } from 'react';

export const CartContext = createContext();

export function CartProvider ({defaultValue = [], children }) {
    const [cartContent, setCartContent] = React.useState(defaultValue);

    function isInCart(itemId) {
        return itemId === undefined ? undefined : cartContent.find(item => item.id === itemId) !== undefined;
    }

    function removeItem(itemId) {
        setCartContent(cartContent.filter(item=>item.id!==itemId));
    }

    function addItem(item) {
        const newCartContent = [...cartContent];
        if(isInCart(item.id)){
            const arrayItem = newCartContent.find(cartItem=> item.id===cartItem.id);
            arrayItem.quantity = item.quantity;
        }else{
            const newItem = {...item};
            newCartContent.push(newItem);
        }
        setCartContent(newCartContent);
    }

    function clear() {
        setCartContent([]);
    }

    return <CartContext.Provider value={{cartContent, isInCart, removeItem, addItem, clear, cartSize: cartContent.length}}>
        {children}
    </CartContext.Provider>
}