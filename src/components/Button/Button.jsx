import React, {useContext, useState} from 'react';
import "./Button.css";
import Minus from "../../images/icon-minus.svg";
import Plus from "../../images/icon-plus.svg";
import IconCart from '@mui/icons-material/ShoppingCart';
import {CartContext} from "../../Context";

const Button = () => {
    const [item, setItem] = useContext(CartContext)
    const [count, setCount] = useState(0)

    const removeItem = () =>{
        if(count===0){
            return
        }
        else{
            setCount((prevState)=>prevState - 1)
        }
    }
    const addItem = () =>{
        if(count===15){
            window.alert("Leave some sneakers for the rest of us!")
        }
        else{
            setCount(prevState=>prevState + 1)
        }
    }

    const handleClick = ()=>{
        setItem(count)
    }
  return (
    <div className="b_button">
          <div className="b_left">
            <button 
                onClick={removeItem}
                className="subtract">
                  <img src={Minus} alt="minus" />
              </button>

              <span className="count">{count}</span>

              <button 
              onClick={addItem}
              className="add">
                <img src={Plus} alt="add" />
              </button>
          </div>

          <div className="b_right" onClick={handleClick}>
             <span className="b_cart_icon"><IconCart/></span> 
              <h4>Add to Cart</h4>
          </div>
    </div>
  )
}

export default Button