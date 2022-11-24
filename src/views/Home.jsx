import NavBar from '../components/NavBar';
import ItemListContainer from '../components/ItemListContainer';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home({productos}) {
    console.log (productos)
    const navigate= useNavigate()
    
return ( 
    <> 
    
    <div className='container'>
    <ItemListContainer greeting="Clientes"/>
    {productos.map(item => ( <div key={item.id}>
        <p onClick={()=>navigate(`/contacto/${item.id}`) }>{item.title} {item.price} {item.description} </p>
        <img src={item.img} alt="Pelota" />
        </div>))}
    </div>

    </>


);
}

export default Home;
