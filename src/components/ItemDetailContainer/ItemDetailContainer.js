import React from 'react'
import { useParams } from 'react-router';
import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail';
import mockResultadosApi from '../../mockResultadosApi';

const pegadaAlServer = (itemId) => new Promise((resolve, reject) => {
    setTimeout(()=>{resolve(itemId ? mockResultadosApi.find(item=>item.id==itemId) : null)}, 2000);
})

const ItemDetailContainer = () => {
    const [item, setItem] = React.useState(null);
    const { itemId } = useParams();

    React.useEffect(()=>{
        pegadaAlServer(itemId).then(result =>{
            console.log(item);
            setItem(result)})
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
