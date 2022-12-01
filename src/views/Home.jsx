import ItemListContainer from '../components/ItemListContainer';
import React from 'react';

function Home({ productos }) {
    console.log (productos)
    
    return (
        <div className='container'>
        <ItemListContainer greeting="Clientes"/>
        </div>
    );
}

export default Home;
