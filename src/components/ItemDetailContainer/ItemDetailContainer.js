import React from 'react'
import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail';
const resultado = {id:1, title:"Sweater Violeta", pictureUrl:"https://i.pinimg.com/564x/54/60/13/546013d6e9856c38baf8b8e071b18b4d.jpg", price:"750"};

const pegadaAlServer = new Promise((resolve, reject) => {
    setTimeout(()=>{resolve(resultado)}, 2000);
})

const ItemDetailContainer = () => {
    const [item, setItem] = React.useState(null);
    React.useEffect(()=>{
        if(!item){
            pegadaAlServer.then(result =>{
                console.log(result);   
                setItem(result)})
        }
    });
    return (
        <div className="item-detail-container">
            {item && (
                <ItemDetail id={item.id} title={item.title} pictureUrl={item.pictureUrl} price={item.price} />
            )}
        </div>
    )
}

export default ItemDetailContainer
