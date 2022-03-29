
import { useCartContext } from "./Context/CartContext"
import Imagen from './Images/Carrito.png'


const CartWidget =()=> {
    const {cartList, totalItems} = useCartContext() 

    

     const widget= (cartList.length > 0) ? true : false;
     const total = totalItems()

     
   
    return (
        <>
          { widget?
        
               <div> 
                 
                 <img className="mt-3" src={Imagen} alt='ImagenCarrito' width="50" height="24"/>
                 <p className="menuL ms-4 " width= "25" height= "12"> {total }
                   </p>          
               </div> 
                :
                <></>      
       }
        </>
    );
    
}
export default CartWidget