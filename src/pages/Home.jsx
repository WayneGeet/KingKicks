import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import {CartProvider, ToggleProvider} from "../Context";
import Focus from "../components/Focus/Focus";

const Home = () => {
  return (
    <div className="Home">
      <CartProvider>
        <ToggleProvider>
          <Focus/>
          <Navbar/>
          <Hero/>
        </ToggleProvider>
      </CartProvider>
    </div>
  )
}

export default Home