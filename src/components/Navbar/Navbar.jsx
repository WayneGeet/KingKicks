import React, {useState, useContext} from 'react';
// import Logo from "../../images/logo.svg";
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import Avatar from "../../images/image-avatar.png";
import "./Navbar.css";
import Cart from "../Cart/Cart";
import {CartContext} from "../../Context";
import {Link} from "react-router-dom"


const Navbar = () => {  
    const [items] = useContext(CartContext);
    const [opacity, setOpacity] = useState(false);
    const handleClick = () =>{
        setOpacity((prevState)=> !prevState)
    }

  return (
    <div className="nav">
        <div className="container">
            <span className="logo">Sneakers</span>

            <div className="header">
                <ul className="main_nav">
                    <li className="item"><Link to="/">Collection</Link></li>
                    <li className="item"><Link to="/men">Men</Link></li>
                    <li className="item"><Link to="/women">Women</Link></li>
                    <li className="item"><Link to="/about">About</Link></li>
                    <li className="item"><Link to="/contact">Contact</Link></li>
                </ul>

                <ul className="n_right">
                    
                    <li className="cart_icon" onClick={handleClick} style={{cursor:"pointer"}}>
                        <span className="n_items">{items}</span>
                        <ShoppingCart/></li>
                    <li className="n_image"><span className= "profile"><img src={Avatar} alt="Profile" /></span></li>
                </ul>
            </div>
        </div>
        <Cart value={opacity}/>
    </div>
  )
}

export default Navbar