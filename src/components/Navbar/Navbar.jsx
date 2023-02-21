import React, {useState} from 'react';
// import Logo from "../../images/logo.svg";
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import Avatar from "../../images/image-avatar.png";
import "./Navbar.css";
import Cart from "../Cart/Cart";


const Navbar = () => {   
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
                    <li className="item">Collections</li>
                    <li className="item">Men</li>
                    <li className="item">Women</li>
                    <li className="item">About</li>
                    <li className="item">Contact</li>
                </ul>

                <ul className="n_right">
                    <li className="cart_icon" onClick={handleClick} style={{cursor:"pointer"}}><ShoppingCart/></li>
                    <li className="n_image"><span className= "profile"><img src={Avatar} alt="Profile" /></span></li>
                </ul>
            </div>
        </div>
        <Cart value={opacity}/>
    </div>
  )
}

export default Navbar