import React from 'react';
import "./ItemCount.css";

const ItemCount = ({ initial, stock, onAdd }) => {
    const [contador, setContador] = React.useState(initial);

    const handleIncrement = () => {
        if (contador + 1 <= stock) {
            onAdd(contador + 1);
            setContador(contador + 1);
        }
    };

    const handleDecrement = () => {
        if (contador >= 1) {
            setContador(contador - 1);
        }
    };


    return (
        <div className="card">
            <h1>Cantidad</h1>
            <div className="actionContainer">
            <button onClick={handleDecrement} className="quantityButton">
                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                        </svg>
                    </a>
                </button>
                {contador}
                <button onClick={handleIncrement} className="quantityButton">
                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                        </svg>
                    </a>
                </button>
            </div>
        </div>
    );
};
export default ItemCount;

