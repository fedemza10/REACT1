import { useCartContext } from "./Context/CartContext"




function Cart() {

  const { cartList, vaciarCarrito } = useCartContext()


  return (
    <div >
      { cartList.map(prod => <li key={prod.id}>
                                nombre: {prod.name} precio: {prod.price} 
                                cantidad: {prod.cantidad}
                              </li>) }
      
             
           
             <button className= '  btn btn-outline-danger ms-5  mt-5' 
                     onClick={vaciarCarrito}>
                     VACIAR CARRITO
             </button>
        
    </div>
  )
}

export default Cart
