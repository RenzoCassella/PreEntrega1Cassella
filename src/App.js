import img1 from "./assets/Images/Pelota River.webp";
import img2 from "./assets/Images/Malla hombre.webp";
import img3 from "./assets/Images/Botinero.webp";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Contacto from './views/Contacto';
import Home from './views/Home';

const productos = [{
  title: "Pelota", 
  price: 500,
  description: "Pelota river oficial",
  id:1,
  img: img1

},
{
  title: "Malla", 
  price: 500,
  description: "Malla river oficial",
  id:3,
  img: img2
  
},
{
  title: "Botinero", 
  price: 500,
  description: "Botinero river oficial",
  id:2,
  img: img3

},

]



function App() {
  return (
    <>
    <NavBar/>
    
    <Router>
      <Routes> 
      <Route path="/" element={<Home productos = {productos}/>} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/contacto/:id" element={<Contacto />} />
        
      </Routes>
    </Router>
    </>

  


  );
}

export default App;
