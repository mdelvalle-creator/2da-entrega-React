import React from 'react'
import { useParams } from 'react-router';
import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail';
import { getCurrentFirestore } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore/lite';

const ItemDetailContainer = () => {
    const [item, setItem] = React.useState(null);
    const { itemId } = useParams();

    React.useEffect(async ()=>{
        const db = getCurrentFirestore();
        let itemQuery = doc(db, 'ItemList', itemId);
        await getDoc(itemQuery)
        .then((result)=>{
            if(result.exists()){
                console.log('No results from firestore');
            };
            setItem({id: result.id, ...result.data()});
        })
        .catch((error)=>{console.log('Error while getting item', error)});
    }, [itemId]);

    return (
        <div className="item-detail-container">
            {item && (
                <ItemDetail id={item.id} title={item.title} pictureUrl={item.pictureUrl} price={item.price} max={item.max} />
            )}
        </div>
    )
}

export default ItemDetailContainer
