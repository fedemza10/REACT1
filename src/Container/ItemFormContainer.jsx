import { useCartContext } from "../components/Context/CartContext"
import { addDoc, collection, getFirestore,  } from 'firebase/firestore'
import { useState } from "react"
import { Link } from "react-router-dom"



function ItemFormContainer () {
    const [dataForm, setDataForm] = useState({email: '', name: '', phone: ''})
    const [id, setId] = useState('')
    const [purchase, setPurchase] = useState(false);
    const { cartList, vaciarCarrito, totalCart } = useCartContext()
    const totalCarrito = totalCart()
    


    const generateOrder = async (event) => { 
        event.preventDefault();  

               
            let order = {}      
        
            order.buyer = dataForm
            order.total = totalCarrito
        
            order.items = cartList.map(item => {
                const id = item.id
                const nombre = item.name
                const precio = item.price * item.cantidad
                
                return {id, nombre, precio}   
            })

            
            const database = getFirestore()
            const queryCollectionItems = collection(database, 'orders')
            await addDoc(queryCollectionItems, order) 
            .then(({ id }) => setId(id))
            .catch(err => console.log(err))
            .finally(() => vaciarCarrito)

            setPurchase (true)

            
            
          
    }

    const handleChange = (e) => {
        setDataForm( {
          ...dataForm,
          [e.target.name]: e.target.value
      } )
    }


    return (
        <div>
            
            { purchase? <div>
           
           { <label className={'alert alert-success'} >El id de la compra es: {id} 
                   </label>

            }
   
     </div> : (

            <form 
                className='mt-5'
                onSubmit={generateOrder}                 
            >
                <input 
                    type='text' 
                    name='name' 
                    placeholder='name' 
                    value={dataForm.name}
                    onChange={handleChange}
                /><br />
                <input 
                    type='number' 
                    name='phone'
                    placeholder='tel' 
                    required
                    value={dataForm.phone}
                    onChange={handleChange}
                /><br/>
                <input 
                    type='email' 
                    name='email'
                    required
                    placeholder='email' 
                    value={dataForm.email}
                    onChange={handleChange}
                /><br/>
                <input 
                    type='email' 
                    name='email1'
                    placeholder='repita email' 
                    required
                    value={dataForm.email}
                    onChange={handleChange}
                /><br/>
                
                <button  className="btn btn-outline-primary"  onClick={generateOrder}  >Terminar Compra</button>
            </form>)
           
                  
                            
                           

            }
        </div>   
        )  
  
}
export default ItemFormContainer
