import {useState, createContext} from "react";

// Creating a context instance
export const CartContext = createContext();
export const ToggleContext = createContext();
export const RestaurantContext = createContext();

export function RestaurantProvider({children}){
    const [query, setQuery] = useState("Beach Cafe")
    const [lat, setLat] = useState(34.7786357);
    const [lng, setLng] = useState(-122.3918135);
    const [budget, setBudget] = useState(200);
    const [rating, setRating] = useState(3);
    const [isOpen, setIsOpen] = useState(true);

    // cuisine=italian&lat=34.7786357&lng=-122.3918135

    return(
        <RestaurantContext.Provider value={[query, setQuery, lat, setLat, lng, setLng, budget, setBudget, rating, setRating, isOpen, setIsOpen]}>
            {children}
        </RestaurantContext.Provider>
    )
}

export function ToggleProvider({children}){
    const [visibility, setVisibility] = useState(false);
    const [focus, setFocus] = useState(false)
    return(
        <ToggleContext.Provider value={[visibility, setVisibility, focus, setFocus]}>
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
