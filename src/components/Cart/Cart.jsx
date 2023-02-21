import React, {useContext} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import product1Thumbnail from "../../images/image-product-1-thumbnail.jpg";
import "./Cart.css";
import CartContext from "../../Context";

const Cart = ({value}) => {

    const [item, setItem, ...others] = useContext(CartContext);
    const handleDelete = () => {
        setItem(()=>0)
        console.log(item)
    }

    function CartChecker(){
        if(item===0){
            return(
                <p className="no_item">Your Cart is empty</p>
            )
        }

        else{
            return(
                <article className="c_message" >
                    <div className="content">
                        <div className="image">
                            <img className="thumbnail" src={product1Thumbnail} alt="" />
                        </div>
                        <article className="info">
                            <h4 className="message">Fall Limited Edition Sneakers</h4>
                        </article>

                        <div className="delete" onClick={handleDelete}><DeleteIcon/></div>
                    </div>
                    
                    <div className="price_calculator">
                        <h4 style={{maxWidth:"6rem"}}>${others[2]} x {item}</h4>
                        <span className="bold" style={{fontWeight:700}}> ${others[2] * item}</span>
                    </div>

                    <button  className="checkout btn" type="submit">Checkout</button>
                </article>
            )
        }
    }

  return (
    <div className= {value?"Cart":"c_hidden"} >
        <div className="top">
            <h2 className="cart_title">Cart</h2>
        </div>

        <article>
            <CartChecker/>
        </article>
    </div>
  )
}

export default Cart