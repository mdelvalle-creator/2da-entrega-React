import { resolve } from 'q';
import React from 'react'
import ItemPreview from '../ItemPreview/ItemPreview';

const resultado = [
    {id:1, title:"Sweater Violeta", pictureUrl:"https://i.pinimg.com/564x/54/60/13/546013d6e9856c38baf8b8e071b18b4d.jpg", price:"750"}, 
    {id:2, title:"Pantalon Jean", pictureUrl:"https://i.pinimg.com/564x/e6/aa/5f/e6aa5f1f85f1aa938b02bf8b77e0aaa7.jpg", price:"950"},
    {id:3, title:"Abrigo campera Fluffy", pictureUrl:"https://i.pinimg.com/564x/75/22/4f/75224f75a81fbda4d09d6a3b50c53f8a.jpg", price:"1300"}
];

const pegadaAlServer = new Promise((resolve, reject) => {
    setTimeout(()=>{resolve(resultado)}, 2000);
})

const ItemList = () => {
    const [items, setItems] = React.useState([]);
    React.useEffect(()=>{
        if(items.length===0){
            pegadaAlServer.then(result =>{
                console.log(result);   
                setItems(result)})
        }
    });
    return (
        <div className="item-list-container">
            {items.length > 0 && items.map(item => <ItemPreview key={item.id} id={item.id} title={item.title} pictureUrl={item.pictureUrl} price={item.price} />)}
        </div>
    )
}

export default ItemList
