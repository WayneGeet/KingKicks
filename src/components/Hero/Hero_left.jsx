import React, {useState, useContext} from 'react';
import Pr1 from "../../images/image-product-1.jpg";
import Pr2 from "../../images/image-product-2.jpg";
import Pr3 from "../../images/image-product-3.jpg";
import Pr4 from "../../images/image-product-4.jpg";
import "./Hero_left.css"
import {ToggleContext} from "../../Context";

const HeroLeft = () => {

    const [visibility, setVisibility] = useContext(ToggleContext);
        
    const handleClick = (index) =>{
        const slider = imgs[index]
        setSrc(slider)
    }

    const imgs = [
        {id:1, imageUrl:Pr1},
        {id:2, imageUrl:Pr2},
        {id:3, imageUrl:Pr3},
        {id:4, imageUrl:Pr4},
    ]
    const [src, setSrc] = useState(imgs[0]);

    const showFocus = ()=>{
        setVisibility((prevState) => !prevState)
    }

  return (
    <div className="left">
        <div className="main_image" >
            <img src={src.imageUrl} onClick={showFocus} alt="" className="sneaker" />
        </div>

        <ul className="select">
            {imgs.map((image, i) => {
                return(
                <li key={image.id}
                className="selector"
                onClick={() => handleClick(i)}>
                    <img src={image.imageUrl}  alt="" />
                </li>
                )
            })}
        </ul>
    </div>
  )
}

export default HeroLeft