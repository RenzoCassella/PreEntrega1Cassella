import React from 'react';
import { useLocation } from 'react-router-dom';

function Producto() {
  const { state: { item } } = useLocation();
  console.log({ item });

  return (   
    <div className='container'>
      <h1>Detalle</h1>
      <div key={item.id}>
        <p>{item.title} {item.price} {item.description}</p>
        <img src={item.img} alt="Pelota" />
      </div>
    </div>
  );
}

export default Producto;