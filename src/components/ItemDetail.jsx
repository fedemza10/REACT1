import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "./Context/CartContext";
import ItemCount from "./ItemCount"






function ItemDetail ({prod}) {
  const [purchased, setPurchased] = useState(false);
  const {addToCart,  cartList} = useCartContext()

  const onAdd = (cant) => {
    
    addToCart( { ...prod, cantidad: cant } )
    
    
    setPurchased(true);
    console.log (cant)
    console.log(cartList)
  };

 
    return (
        <>
          <center>

          
            <div className='col-md-4' >

                  <div className="card w-125 mt-5" >
                      

                          <div className="card-header">
                              {`${prod.name} - ${prod.category}`}
                          </div>

                          <div className="card-body">
                             <img src={prod.image} alt='' className='w-80' />
                                                                                                 
                          </div>
                      
                          <div className="card-footer">                

                              <button className="btn btn-outline-primary btn-block">
                                       $   {prod.price}
                                     </button>   

                          </div>

                                     
                                            
                                                 
                        
                   </div>

                   
              </div>

              { purchased ? ( 
                                  
                              <>    
                                 <Link to='/cart' >
                                       <button className="btn btn-outline-success  mt-3" 
                                               onClick={()=>console.log('ir al carrito de compras') } >
                                               FINALIZA TU COMPRA
                                        </button>
                                    </Link>

                                 <Link to='/'>
                                        <button className='btn btn-outline-warning ms-5 mt-3 '
                                                onClick={()=>console.log('regresar a menu principal') }>
                                                CONTINUAR COMPRANDO
                                        </button>
      
                               </Link>
                               </>
      )

                         : (  <ItemCount initial={1} stock={5} onAdd = {onAdd} />)
              }

          </center>
        </>
    )
}
export default ItemDetail