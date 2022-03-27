import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)




function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])

    const addToCart=(item)=>{
        const foundProduct = cartList.find((producto) => producto.id === item.id);
        if (foundProduct) {
          item.cant += 1;}
        
        
        setCartList( [ ...cartList, item ] )
        console.log (item)
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

