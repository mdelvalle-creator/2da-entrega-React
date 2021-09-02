import React from 'react'
import { useParams } from 'react-router';
import ItemList from '../ItemList/ItemList'
import './itemListContainer.css'
import mockResultadosApi from '../../mockResultadosApi';

const pegadaAlServer = (categoryId) => new Promise((resolve, reject) => {
    setTimeout(()=>{resolve(categoryId ? mockResultadosApi.filter((item)=>item.categoryId==categoryId) : mockResultadosApi)}, 2000);
})

const ItemListContainer = () => {
    const [items, setItems] = React.useState([]);
    const { categoryId } = useParams();

    React.useEffect(()=>{
        pegadaAlServer(categoryId).then(result =>{
            setItems(result)})
    }, [categoryId]);
    
    return (
        <div className="item-list-container">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer
