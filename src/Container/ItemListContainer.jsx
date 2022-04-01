import { useEffect, useState } from "react";
import CargandoWidget from '../components/CargandoWidget';
import Itemlist from "../components/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";






function ItemListContainer({ saludar }) {

  const [loading, setLoading] = useState (true)
  const [ prods, setProds] = useState ([])
  const {category} = useParams()

 
 
 
  useEffect (()=>{ 
   
    const database = getFirestore()
   
    const queryCollection =  category ? query( collection(database, 'items' ), where('category', '==',category)) 
                             : collection(database, 'items' )
    
    
          
          getDocs(queryCollection)
         .then ((response=> setProds (response.docs.map ( product=>({id: product.id, ...product.data()})))))
         .catch (error => console.log(error))  
         .finally (()=> setLoading (false))
                }
 
  ,[category]) 
  
 
  
  return (
       
    
              <>
                <center>

                
                  <h2>{saludar}
                     </h2>

                     { loading ?  <CargandoWidget/> 
                               : 
                                < div className=" mb-5">                                         
                                   <Itemlist prods = {prods}   />
                                                                   

                                  </div>
                       }  
                    
                    </center>
                  </>                     

           
                           
 
    
  );
  }


export default ItemListContainer;
