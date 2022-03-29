
import { useCartContext } from "./Context/CartContext"
import Imagen from './Images/Carrito.png'


const CartWidget =()=> {
    const {cartList} = useCartContext() 

    

     const widget= (cartList.length > 0) ? true : false;

     
   
    return (
        <>
          { widget?
        
               <div> <img src={Imagen} alt='ImagenCarrito' width="50" height="24"/>
                           
              </div> 
                :
                <></>      
       }
        </>
    );
    
}
export default CartWidget