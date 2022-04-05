import { Link } from "react-router-dom"
import { useCartContext } from "./Context/CartContext"




function Cart() {

  const { cartList, vaciarCarrito, deleteToCart, totalCart } = useCartContext()

  const totalCarrito = totalCart()
  const carritoVacio = (cartList.length < 1) ? true : false;
 
  

  return (
       
    <>
      
     
        <center>
          

          
          {cartList.map(prod => 
                          <div key= {prod.id}> 
                            
                              <div  
                                  className='col-md-4' >

                                       <div className="card w-100 mt-5" >                      

                                              <div className="card-header">
                                                   {prod.name} 
                                              </div>

                                              <div className="card-body">
                                                  <img src={prod.image} 
                                                       alt='' className='w-50' 
                                                      />                                                                                              
                                                </div>
                        
                                              <div className="card-footer">     
                                                   Cantidad seleccionada: {prod.cantidad} 
                                               </div>
                                              <div className="card-footer">     
                                                   Precio unitario $  {prod.price}
                                              </div>
                                            <button className= '  btn btn-outline-danger   mt-5' 
                                                    onClick={() => deleteToCart (prod)}>
                                                    ELIMINAR PRODUCTO 
                                              </button>
                                                     

                                 </div>

                           </div>

                           </div>
                        )
          } 


                          
                     
                    { carritoVacio ? <div>
                        
                        <h4>
                              EL CARRITO ESTA VACIO
                            </h4>
                          <Link to= '/'>
                                 <button className= '  btn btn-outline-success   mt-5 mb-5' 
                                         onClick={vaciarCarrito}>
                                          SEGUIR COMPRANDO
                                        </button>
                            </Link> 
                            
                           

                         </div>
                       

                      :  
                            <div>
                              <div>
                             El total de su compra es $ { totalCarrito }
                           </div>
                            
                              <Link to= '/form'>
                                   <button className= '  btn btn-outline-success  mt-5 mb-5' 
                                           >
                                           FINALIZA TU COMPRA
                                          </button>
                              </Link> 
                              <Link to= '/'>
                                   <button className= '  btn btn-outline-warning ms-5 mt-5 mb-5' 
                                           onClick={vaciarCarrito}>
                                           VACIAR CARRITO?
                                          </button>
                              </Link> 
                            
                         

                       </div>
                    }
                         

                         
      

        
      
 
      </center>   
        
    </>
 
  )
}

export default Cart
