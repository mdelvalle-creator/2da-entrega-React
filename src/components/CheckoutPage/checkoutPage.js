import React from 'react';
import { CartContext } from '../../context/CartContext/CartContext';
import { Link } from 'react-router-dom';
import { getCurrentFirestore } from '../../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore/lite';
import './checkoutPage.css';

const CheckoutPage = () => {
    const { clear, cartContent } = React.useContext(CartContext);
    const [orderId, setOrderId] = React.useState();
    const [name, setName] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [remail, setRemail] = React.useState('');
    const [validationMessages, setValidationMessages] = React.useState([]);

    const handleInput = (e) => {
        switch (e.target.name) {
            case 'name':
                setName(e.target.value);
                break;
            case 'phone':
                setPhone(e.target.value);
                break;
            case 'mail':
                setEmail(e.target.value);
                break;
            case 'remail':
                setRemail(e.target.value);
                break;
            default: return null;
        }
    };

    const validateData = () => {
        const messages = [];
        if (name.length <= 8) {
            messages.push('El nombre ingresado debe poseer al menos 8 caracteres.')
        };
        if (phone.length <= 8) {
            messages.push('El teléfono ingresado debe tener al menos 8 numeros.')
        };
        if (email.length <= 8) {
            messages.push('El email ingresado debe tener al menos 6 caracteres.')
        }
        if (email !== remail) {
            messages.push('Los emails ingresados no coinciden.')
        }
        return messages;
    }

    const createOrder = async (e) => {
        const messages = validateData();
        if (messages.length === 0) {
            const data = {
                buyer: {
                    name,
                    phone,
                    email,
                },
                items: cartContent,
                date: serverTimestamp(),
                total: cartContent.map(item=>item.price*item.quantity).reduce((a,b)=>a+b)
            }
            const db = getCurrentFirestore();
            await addDoc(collection(db, "orders"), data)
                .then(({ id }) => {
                    setOrderId(id);
                })
                .catch((error) => { console.log('Error while saving order', error) });
            clear()
        } else {
            setValidationMessages(messages);
        }
    }

    return (
        <div className="checkout-container">
            {!orderId ? (
                <div className="checkout-client-form">
                    <span className="prompt">Ingresa tus datos para generar la orden de compra</span>
                    <form name='client-data'>
                        <label className="data-label" for="name">Nombre</label>
                        <input className="data-input" type="text" id="name" name="name" maxLength={100} value={name} onChange={handleInput} /><br />
                        <label className="data-label" for="phone">Teléfono</label>
                        <input className="data-input" type="number" id="phone" name="phone" maxLength={15} value={phone} onChange={handleInput} /><br />
                        <label className="data-label" for="mail">Email</label>
                        <input className="data-input" type="email" id="mail" name="mail" maxLength={32} value={email} onChange={handleInput} /><br />
                        <label className="data-label" for="remail">Reingrese Email</label>
                        <input className="data-input" type="email" id="remail" name="remail" maxLength={32} value={remail} onChange={handleInput} /><br />
                    </form>
                    <button className="order-action" type="button" onClick={createOrder}>Crear orden</button>
                    <div className="error-messages">
                        {validationMessages.map(message => (<p>{message}</p>))}
                    </div>
                </div>) : (
                <div className="checkout-order-successful">
                    <div className="order-message">La orden se creó exitosamente</div>
                    <div className="order-sub-message">{`Orden ${orderId} creada!`}</div>
                    <Link className="order-action" to={`/order/${orderId}`}>Ver mi orden</Link>
                </div>)}
        </div>
    )
}

export default CheckoutPage