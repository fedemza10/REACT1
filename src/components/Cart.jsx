import { useCartContext } from "./Context/CartContext"




function Cart() {

  const { cartList, vaciarCarrito } = useCartContext()


  return (
    <div>
      { cartList.map(prod => <li key={prod.id}>
                                nombre: {prod.name} precio: {prod.price} 
                                cantidad: {prod.cantidad}
                              </li>) }
      <button onClick={vaciarCarrito}>Vaciar Carrito</button>
    </div>
  )
}

export default Cart