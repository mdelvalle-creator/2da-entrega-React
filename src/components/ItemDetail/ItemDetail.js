import React from 'react';
import { Link } from 'react-router-dom';
import "./ItemDetail.css";
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext/CartContext';

const ItemDetail = ({id, title, pictureUrl, price, max}) => {

    const [buying, setBuying] = React.useState(false);
    const [quantity, setQuantity] = React.useState(0);
    const {addItem} = React.useContext(CartContext);

    const onAdd = (contador) => {
        setQuantity(contador);
        addItem({id,title,pictureUrl,price,max, quantity: contador})
    };

    return (
        <div className="itemDetail-container">
            <img src={pictureUrl} alt="Imagen del item"/>
            <div className="detail-text-container">
                <h2> {title} </h2>
                <h3> {`$${price}`} </h3>
                {!buying ? <a className="actionButton" onClick={()=>setBuying(true)}>Comprar</a> :<ItemCount initial={0} stock={max} onAdd={onAdd} />}
                {quantity==max && buying && <Link to="/cart" className="actionButton"> Terminar Compra </Link>}
            </div>
        </div>  
    )
}

export default ItemDetail
