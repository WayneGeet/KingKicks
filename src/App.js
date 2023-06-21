import React from "react";
import './App.css';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { RestaurantProvider } from "./Context";
import {ToggleProvider} from "./Context"


function App() {

  return (
    <div className="App">
      <ToggleProvider>
        {/* <Navbar/> */}
      </ToggleProvider>
      <Home/>
    </div>
  );
}

export default App;
