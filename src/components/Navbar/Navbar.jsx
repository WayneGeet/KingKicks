import React, {useState, useContext} from 'react';
import Logo from "../../images/logo.svg";
import Avatar from "../../images/image-avatar.png";
import Close_icon from "../../images/icon-close.svg"
import "./Navbar.css";
import Cart_icon from "../../images/icon-cart.svg";
import menu from "../../images/icon-menu.svg";
import Cart from "../Cart/Cart";
import {CartContext} from "../../Context"


const Navbar = () => {  
    const [toggle, setToggle] = useState(false);
    const [nav, setNav] = useState(false)
    const handleCart = ()=>{
      setToggle(initial => !initial)
    }

    const [...cartItems] = useContext(CartContext);
    console.log(cartItems[0])


  return (
    <div className="nav">
      <div className="left_nav">
        <div onClick={()=>setNav(true)} className="menu"><img src={menu} alt="hambuger menu" /></div>
        <div className="logo"><img src={Logo} alt="" /></div>
      </div>
        
        <ul className={`${nav ? "main_nav": "nav_fixed "}`}>
            <button onClick={()=>setNav(false)} type="button" className="close_btn"><img src={Close_icon} alt="" /></button>
            <li className="item">Collection</li>
            <li className="item">Men</li>
            <li className="item">Women</li>
            <li className="item">About</li>
            <li className="item">Contact</li>
        </ul>

        <ul className="n_right">
          <div className="cart_item">
            <img className="cart_icon_n" onClick={handleCart} src={Cart_icon} alt="cart icon" />
            <div className="num_of_items">{cartItems[0]}</div>
          </div>
            
            <img className="avatar_n" src={Avatar} alt="Profile" />
        </ul>
        <div className="cart_positioner">
          <Cart cartToggler={toggle}></Cart>
        </div>
        
        
    </div>
  )
}

export default Navbar