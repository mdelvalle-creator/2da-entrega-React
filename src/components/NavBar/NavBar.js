import React from 'react';
import './NavBar.css';
import img from './strangeLogo.png';
import CartNavBar from '../Cart/CartNavBar';
import { NavLink, Link } from 'react-router-dom';
 
const NavBar = (props) => {
	return (
               
        <header className="App-header">
                <div className='NavBar'>
                        <Link to='/'><img src={img} alt='logo strange' width= '150px' /></Link>
                        <NavLink to='/categories/1' className='nav-bar-button' activeClassName='-active'>Ropa</NavLink>
                        <NavLink to='/categories/2' className='nav-bar-button' activeClassName='-active'>Accesorios</NavLink>
                        <NavLink to='/orders' className='nav-bar-button' activeClassName='-active'>Órdenes</NavLink>
                        <CartNavBar/>
                </div>
        </header>
	);
};


export default NavBar;