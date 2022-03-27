import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)




function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])

    const addToCart=(item)=>{
        const foundProduct = cartList.find((producto) => producto.id === item.id);
        
        if (foundProduct) {
          foundProduct.cantidad += item.cantidad;     
          setCartList( [ ...cartList] )
          console.log (item)}

        else {
            setCartList( [ ...cartList, item ] )
        }
  }
  
    
    const vaciarCarrito= () =>{
        setCartList([])
    }
    


    return (
        <CartContext.Provider value={{ 
            cartList,
            addToCart,            
            vaciarCarrito
        }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider

