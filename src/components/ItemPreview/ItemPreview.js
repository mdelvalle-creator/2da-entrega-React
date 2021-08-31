import React from 'react'
import "./itemPreview.css"

const ItemPreview = ({id,title,pictureUrl,price}) => {
    return (
        <div className="item-preview-container">
            <img src={pictureUrl} alt="Imagen del item"/>
            <div className="detail-text-container">
                <h2 className="nombreProducto"> {title} </h2>
                <h3> {`$${price}`} </h3>
            </div>
        </div>  
    )
}

export default ItemPreview
