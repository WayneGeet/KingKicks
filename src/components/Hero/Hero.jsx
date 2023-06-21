import React, {useContext} from 'react';
import CartContext from "../../Context";
import "./Hero.css"
import HeroLeft from "./Hero_left"
import Button from "../Button/Button";

const Hero = () => {
    const [item, ...others] = useContext(CartContext);

  return (
    <div className="hero container">
        <HeroLeft/>
        <div className="right">
            <span className="company_name">SNEAKER COMPANY</span>
            <div className="h_title">Fall Limited Edition Sneakers</div>
            <article className="p-bounds">
              <p className="h_info">These low-profile sneakers are your perfect casual wear companion.
              Featuring a durabale rubber outer sole, they'll withstand everything the weather the weather can offer.
              </p>
            </article>
            
            <div className="prices">
              <div className="values">
                  <h3 className="price">${others[3]}.00</h3>
                  <h3 className="discount">{others[2]}%</h3>
              </div>
              <p className="initial_price">${others[1]}.00</p>
            </div>
             

            <Button/>            
        </div>
       

        
    </div>
  )
}

export default Hero