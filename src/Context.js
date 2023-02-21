import {useState, createContext} from "react";

// Creating a context instance
export const CartContext = createContext();
export const ToggleContext = createContext()

export function ToggleProvider({children}){
    const [visibility, setVisibility] = useState(false)
    return(
        <ToggleContext.Provider value={[visibility, setVisibility]}>
            {children}
        </ToggleContext.Provider>
    )
}


export function CartProvider({children}){
    const[item, setItem] = useState(0)
    const initial_price = 250.00
    const discount = 50
    const price = 125

    return(
        <CartContext.Provider value={[item, setItem, initial_price, discount, price]}>
            {/* Children is basically all the components wrapped inside the context provider */}
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;
