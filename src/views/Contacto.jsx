import NavBar from '../components/NavBar';
import ItemListContainer from '../components/ItemListContainer';
import React from 'react';
import { useParams } from 'react-router-dom';

function Contacto() {
    const {
        id
    } =useParams()
    console.log (id)
return ( 
    <> 
    
    <div className='container'>
    <ItemListContainer greeting="Contactanos"/>
    </div>

    </>


);
}

export default Contacto;
