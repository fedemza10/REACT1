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
   const deleteToCart =(producto)=>{
       const remove = cartList.filter ((item) => item.id !== producto.id);
       setCartList(remove) 
   }
  
   const totalCart =() =>{
       return cartList.reduce ((acc,value) => acc.price + value.price,0)
   }    
    const vaciarCarrito= () =>{
        setCartList([])
    }
    


    return (
        <CartContext.Provider value={{ 
            cartList,
            addToCart,            
            vaciarCarrito,
            deleteToCart,
            totalCart
        }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider

