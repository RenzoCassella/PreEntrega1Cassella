import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Contacto from './views/Contacto';
import Home from './views/Home';
import Productos from './views/Productos';
import Detalle from './views/Detalle';
import { productos } from './data/productos';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes> 
        <Route path="/" element={<Home/>} />
        <Route path="/indumentaria" element={<Productos categoria="Indumentaria" productos={productos.filter(p => p.categoria === 'Indumentaria')}/>} />
        <Route path="/pelotas" element={<Productos categoria="Pelotas" productos={productos.filter(p => p.categoria === 'Pelotas')}/>} />
        <Route path="/producto/:id" element={<Detalle />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/contacto/:id" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;
