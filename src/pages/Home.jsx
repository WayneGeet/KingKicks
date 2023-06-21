import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import {CartProvider, ToggleProvider} from "../Context";
import Focus from "../components/Focus/Focus";
import Cart from "../components/Cart/Cart"

const Home = () => {
  return (
    <div className="Home">
      <CartProvider>
        <ToggleProvider>
          <Navbar/>
          <Focus/>
          <Hero/>
          {/* <Cart/> */}
        </ToggleProvider>
      </CartProvider>
    </div>
  )
}

export default Home