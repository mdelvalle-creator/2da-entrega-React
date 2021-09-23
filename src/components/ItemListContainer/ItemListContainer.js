import React from 'react'
import { useParams } from 'react-router';
import ItemList from '../ItemList/ItemList'
import './itemListContainer.css'
import { getCurrentFirestore } from '../../firebase';
import { collection, getDocs, where, query } from 'firebase/firestore/lite';

const ItemListContainer = () => {
    const [items, setItems] = React.useState([]);
    const { categoryId } = useParams();

    React.useEffect(async ()=>{
        const db = getCurrentFirestore();
        let itemQuery = collection(db, 'ItemList');
        if(categoryId){
            itemQuery = query(collection(db, 'ItemList'), where('categoryId','==', categoryId));
        }
        await getDocs(itemQuery)
        .then((results)=>{
            if(results.size===0){
                console.log('No results from firestore');
            };
            setItems(results.docs.map(doc => {return {id: doc.id, ...doc.data()}}));
        })
        .catch((error)=>{console.log('Error while getting items', error)});
    }, [categoryId]);
    
    return (
        <div className="item-list-container">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer
