/*import logo from './logo.svg';*/
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import React from 'react';    
import './App.css';
import ItemListContainer from './Container/ItemListContainer'
import NavBar from './components/NavBar1';
import ItemDetailContainer from './Container/ItemDetailContainer';
import Cart from './components/Cart';
import 'bootstrap/dist/css/bootstrap.min.css'
import CartContextProvider from './components/Context/CartContext';
import ItemFormContainer from './Container/ItemFormContainer';




function App() {
  return (
     
     <BrowserRouter>
          <>
              <CartContextProvider>
              <NavBar/>  

              <Routes>     

                
              <Route path ='/'
                         element = {
                             <ItemListContainer 
                                 saludar ={ "BIENVENIDOS A NUESTRO PETSHOP"}
                               />  } 
                       >

                  </Route>  
                
                  <Route path ='/category/:category'
                         element = {
                             <ItemListContainer 
                                 saludar ={ "BIENVENIDOS A NUESTRO PETSHOP"}
                               />  } 
                       >

                  </Route>
              
              
                
                

                <Route path ='/detail/:detailId'
                          element = {
                             <ItemDetailContainer/>
                                    }
                   >

                  </Route>

                  <Route path ='/Cart'
                           element = {
                               <Cart/>
                                     }
                   >

                  </Route>

                  <Route path ='/form/'
                           element = {
                               <ItemFormContainer/>
                                     }
                   >

                  </Route>
                      
                
                <Route path = '/*' 
                         element = {<Navigate to = '/'
                                       />
                                    }
                   >
                     
                   </Route>

                 
                 
                 
                </Routes>

             
              
      

      
              </CartContextProvider>
          </>  
              
      </BrowserRouter>
  );
}

export default App;
