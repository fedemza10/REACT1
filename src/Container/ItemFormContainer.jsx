import { useCartContext } from "../components/Context/CartContext"
import { addDoc, collection, getFirestore,  } from 'firebase/firestore'
import { useState } from "react"




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

    const handleChange = (event) => {
        setDataForm( {
          ...dataForm,
          [event.target.name]: event.target.value
      } )
    }


    return (
        <div >
          <center>  
            { purchase? <div>
           
           { <label className={'alert alert-success mt-5'} >La operación fue realizada con éxito. El ID de su compra es: {id}.  
                   </label>

            }
          
   
            </div> : (
        
            <form 
                className="form control w-50" 
                onSubmit={generateOrder}                 
            >
              <div>  
                  <label  className="form-label mt-2" > NOMBRE 
                     </label>
                <input 
                    className="form-control "
                    type='text' 
                    name='name'                     
                    placeholder='name' 
                    value={dataForm.name}
                    required
                    onChange={handleChange}
                   
                /><br />
                </div>
                <label className="form-label" > TELEFONO
                     </label>
                <input 
                    className="form-control"
                    type='number' 
                    name='phone'
                    placeholder='phone' 
                    value={dataForm.phone}
                    onChange={handleChange}
                    required
                /><br/>
                <label className="form-label mt-2" > EMAIL
                     </label>
                <input 
                    className="mt-3 form-control"
                    type='email' 
                    name='email'
                    placeholder='email' 
                    value={dataForm.email}
                    onChange={handleChange}
                    required
                /><br/>
                <label className="form-label mt-2"> REPETIR EMAIL
                     </label>
                <input
                    className=" mt-3 form-control" 
                    type='email' 
                    name='email1'
                    placeholder='repeat your email'                     
                    value={dataForm.email}
                    onChange={handleChange}
                    required
                /><br/>
                
                <button  className="btn btn-outline-success   mt-3"  > CONFIRMAR ORDEN DE COMPRA
                  </button>
            </form>)
           
                  
                            
                           

            }
          </center>
        </div>   
        )  
  
}
export default ItemFormContainer
