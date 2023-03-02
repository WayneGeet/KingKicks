import React from "react";
import './App.css';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { RestaurantProvider } from "./Context";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <RestaurantProvider>
          <Routes>
            {/* <Nav/> */}
            <Route path="/" element={<Home/>} />
            <Route path="contact" element={<Contact/>}/>
            <Route path="about" element={<About/>}/>
          </Routes>
        </RestaurantProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
