import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './itemListContainer.css'

const ItemListContainer = ({title}) => {
    return (
        <div className="item-list-container">
            {title || ''}
            <ItemCount stock={5} initial={1} onAdd={()=>{}} />
        </div>
    )
}

export default ItemListContainer
