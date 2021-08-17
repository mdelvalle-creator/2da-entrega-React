import React from 'react';
import './NavBar.css';
import img from './strangeLogo.png';
import CartNavBar from '../Cart/CartNavBar';
 
const NavBar = (props) => {
	return (
               
        <header className="App-header">
                <div className='NavBar'>
                        <img src={img} alt='logo strange' width= '150px' />
                        <a className='nav-bar-button'>Categoria Ropa</a>
                        <a className='nav-bar-button'>Categoria de accesorios</a>
                        <CartNavBar/>
                </div>
        </header>
	);
};


export default NavBar;