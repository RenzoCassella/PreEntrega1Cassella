import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return ( 
    <> 
    <NavBar title="Renzo" />
    <div className='container'>
    <ItemListContainer greeting="Clientes"/>
    </div>


    </>



  );
}

export default App;
