import React, {useState, useContext} from 'react';
import Pr1 from "../../images/image-product-1.jpg";
import Pr2 from "../../images/image-product-2.jpg";
import Pr3 from "../../images/image-product-3.jpg";
import Pr4 from "../../images/image-product-4.jpg"
import CloseIcon from '@mui/icons-material/Close';
import NextIcon from "../../images/icon-next.svg"
import "./Focus.css";
import {ToggleContext} from "../../Context"

const Focus = () => {
    const [count, setCount] = useState(0)
    const [visibility, setVisibility] = useContext(ToggleContext)
    
    
    const card_imgs = [
        {id:1, value:Pr1},
        {id:2, value:Pr2},
        {id:3, value:Pr3},
        {id:4, value:Pr4}
    ]

    const [source, setSource] = useState(card_imgs[0].value);
    
    const handleClick = (index) =>{
        const main_img = card_imgs[index].value
        setSource(main_img)  
        setCount(index)     
    }

    const handleForward = () =>{
        if(count>=card_imgs.length-1) return
        else{
            const main_img = card_imgs[count+1].value
            setCount(()=>count+1)
            setSource(()=>main_img)
        }
    }

    const handleBackward = () =>{
        if(count<=0){
            setSource(()=>card_imgs[0].value)
        }
        else{
            setCount(() => count-1)
            setSource(() => card_imgs[count-1].value)
        }
    }

    const handleClose = () =>{
        setVisibility((prevState) => !prevState)
    }

    
  return (
    <div className={visibility ? "focus": "f_hidden"}>
        <div className="f_close-icon" onClick={handleClose}><CloseIcon/></div>
        <div className="f-icons">
            <div className="arrow">
                <img src={NextIcon} alt="" className="forward next" onClick={handleForward}/>
            </div>
            <div className="arrow">
                <img src={NextIcon} style={{transform:"rotate(180deg)"}} alt="" className="backwards next" onClick={handleBackward}/>
            </div>
            
        </div>
        <div className="f_content">
            <div className="centerImg">
                <img src={source} alt="" />
            </div>

            <ul className="radio">
                {card_imgs.map((src, i) =>{
                    return(
                    <li 
                    onClick={()=>handleClick(i)}
                    key={i}
                    className="of_images">
                        <img src={src.value} alt="" />
                    </li>
                    )
                })}
            </ul>
        </div>
    </div>
  )
}

export default Focus