/*import logo from './logo.svg';*/
import React from 'react';    
import './App.css';
import ItemListContainer from './Container/ItemListContainer'
import Navbar from './components/NavBar1';
import ItemDetailContainer from './Container/ItemDetailContainer';


function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer   saludar ={ "BIENVENIDOS A NUESTRO PETSHOP"}/>
      <ItemDetailContainer/>

      
      
      </>  
  );
}

export default App;
