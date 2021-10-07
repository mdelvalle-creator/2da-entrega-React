import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { CartItem } from '../CartPage/cartPage';
import { getCurrentFirestore } from '../../firebase';
import { doc, getDoc, Timestamp } from 'firebase/firestore/lite';
import '../CartPage/cartPage.css';
import './orderPage.css';

const EmptyOrder = () => (
    <div className="empty-cart">
        <h2>La orden no existe.</h2>
        <Link className="cart-action-button" to="/">Volver al inicio</Link>
    </div>
)

const OrderPrompt = () => {
    const [orderId, setOrderId] = React.useState();
    const handleInput = (e) => {
        setOrderId(e.target.value);
    };
    return (
    <div className="order-prompt">
        <h2>Ingresa el identificador de tu orden</h2>
        <form name='order-data'>
            <label className="data-label" for="orderId">Orden</label>
            <input className="data-input" type="text" id="orderId" name="orderId" maxLength={100} value={orderId} onChange={handleInput} /><br />
        </form>
        <Link className="cart-action-button" to={`/orders/${orderId}`}>Buscar Orden</Link>
    </div>)
}

const OrderPage = () => {
    const [order, setOrder] = React.useState();
    const { orderId } = useParams();

    React.useEffect(async ()=>{
        if(orderId){
            const db = getCurrentFirestore();
            let orderQuery = doc(db, 'orders', orderId);
            await getDoc(orderQuery)
            .then((result)=>{
                console.log(result);
                setOrder({id: result.id, ...result.data()});
            })
            .catch((error)=>{console.log('Error while getting item', error)});
        }
    }, [orderId]);

    return (
        <div>
            {!orderId && (<OrderPrompt /> )}
            {!order && orderId && (<EmptyOrder />)}
            {order && orderId && (
            <div className="cart-container">
                <div className="order-header">
                    <span>{`Orden: ${orderId}`}</span>
                </div>
                <div className="cart-list-header">
                    <span className="normalizedWidth">Artículo</span>
                    <span>Cantidad</span>
                    <span className="marginRight">Precio</span>
                </div>
                {order && order.items.map(item=>(<CartItem key={item.id} title={item.title} price={item.price} quantity={item.quantity} removeItem={()=>{}} />))}
                <div className="cart-list-footer">
                    <span className="marginRight">Total</span>
                    <span className="marginRight">{`$${order && order.items.map(item=>item.price*item.quantity).reduce((a,b)=>a+b)}`}</span>
                </div>
            </div>)}
        </div>
    )
}

export default OrderPage
