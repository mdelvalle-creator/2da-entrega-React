import React from 'react'
import ItemPreview from '../ItemPreview/ItemPreview';
import './ItemList.css'
const ItemList = ({items}) => {
    
    return (
        <div className="itemList-container">
            {items.length > 0 && items.map(item => <ItemPreview key={item.id} id={item.id} title={item.title} pictureUrl={item.pictureUrl} price={item.price} />)}
        </div>
    )
}

export default ItemList
