import React from 'react';
import { CartContext } from '../../context/CartContext/CartContext';
import { Link } from 'react-router-dom';

import './cartPage.css';

const CartItem = ({title, quantity, price, removeItem}) => (
    <div className="cart-item">
        <span className="normalizedWidth">{title}</span>
        <span>{quantity}</span>
        <div>
            <span>{`$${price}`}</span>
            <button onClick={removeItem} className="quantity-button">
                <a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                    </svg>
                </a>
            </button>
        </div> 
    </div>
);

const EmptyCart = () => (
    <div className="empty-cart">
        <h2>El carrito esta vacío</h2>
        <Link className="cart-action-button" to="/">Volver al inicio</Link>
    </div>
)

const CartPage = () => {
    const {removeItem, cartContent} = React.useContext(CartContext);

    return (
        <div>
            {cartContent.length == 0? <EmptyCart /> : (
            <div className="cart-container">
                <div className="cart-list-header">
                    <span className="normalizedWidth">Articulo</span>
                    <span>Cantidad</span>
                    <span className="marginRight">Precio</span>
                </div>
                {cartContent.map(item=>(<CartItem key={item.id} title={item.title} price={item.price} quantity={item.quantity} removeItem={()=>removeItem(item.id)} />))}
                <div className="cart-list-footer">
                    <span className="marginRight">Total</span>
                    <span className="marginRight">{`$${cartContent.map(item=>item.price*item.quantity).reduce((a,b)=>a+b)}`}</span>
                </div>
                <Link className="cart-action-button" to="/checkout">Pagar</Link>
            </div>)}
        </div>
    )
}

export default CartPage
