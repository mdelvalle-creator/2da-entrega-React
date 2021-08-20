import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'
import './itemListContainer.css'

const ItemListContainer = ({title}) => {
    return (
        <div className="item-list-container">
            {title || ''}
            <ItemCount stock={5} initial={1} onAdd={()=>{}} />
            <ItemList />

        </div>
    )
}

export default ItemListContainer
