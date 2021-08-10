import React from 'react';
import './NavBar.css';

const NavBar = (props) => {
	return (
		<div className='NavBar'>
			<h1>Strange Store</h1>
			<h2>Tienda de ropa y accesorios</h2>
            <div className='clickeables'>
                <p>Categoria Ropa</p>
                <p>Categoria de accesorios</p>
            </div>
        </div>
	);
};

export default NavBar;