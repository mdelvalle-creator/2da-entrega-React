import React from 'react';
import "./itemPreview.css";
import { Link } from 'react-router-dom';

const ItemPreview = ({id,title,pictureUrl,price}) => {
    return (
        <div className="item-preview-container">
            <Link to={`/items/${id}`}>
                <img className="preview-image" src={pictureUrl} alt="Imagen del item"/>
            </Link>
            <div className="detail-text-container">
                <Link to={`/items/${id}`}>
                    <h2 className="nombreProducto"> {title} </h2>
                </Link>
                <h3> {`$${price}`} </h3>
            </div>
        </div>  
    )
}

export default ItemPreview
