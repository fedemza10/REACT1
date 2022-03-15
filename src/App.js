/*import logo from './logo.svg';*/
import React from 'react';    
import './App.css';
import ItemListContainer from './Container/ItemListContainer'
import Navbar from './components/NavBar1';



function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer   saludar ={ "BIENVENIDOS A NUESTRO PETSHOP"}/>
      

      
      
      </>  
  );
}

export default App;
