import React from 'react';
import { Link } from 'react-router-dom';
function Productos({productos, categoria}) {    
  return (   
    <div className='container'>
      <h1>{categoria}</h1>
      {productos && productos.map(item => (
          <div key={item.id}>
            <div>
              <Link to={`/producto/${item.id}`} state={{item}}>
                <p>{item.title} {item.price} {item.description}</p>
              </Link>
              <img src={item.img} alt="Pelota" />
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default Productos;