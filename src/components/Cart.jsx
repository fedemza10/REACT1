import { Link } from "react-router-dom"
import { useCartContext } from "./Context/CartContext"




function Cart() {

  const { cartList, vaciarCarrito, deleteToCart, totalCart } = useCartContext()

  const totalCarrito = totalCart()
 
  

  return (
       
    <>
      
     
        <center>
          {cartList.map(prod => 
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
                                                  Eliminar Producto 
                                          </button>
                                                     

                                 </div>

                           </div>
                        )
          }


                          <div>
                             El total de su compra es $ { totalCarrito }
                           </div>

                         <div>
                            <Link to= '/'>
                                   <button className= '  btn btn-outline-warning   mt-5' 
                                           onClick={vaciarCarrito}>
                                           VACIAR CARRITO Y SEGUIR COMPRANDO
                                          </button>
                              </Link> 
                           

                         </div>
                         

        
      

        
      
 
      </center>   
        
    </>
 
  )
}

export default Cart
