import { useEffect, useState } from "react";
import getFetch from "../Helpers/getFetch";
import CargandoWidget from '../components/CargandoWidget';
import Itemlist from "../components/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";





function ItemListContainer({ saludar }) {

  const [loading, setLoading] = useState (true)
  const [ prods, setProds] = useState ([])
  const {category} = useParams()

  console.log (loading)
 
 
  useEffect (()=>{ 
   
    const database = getFirestore()
    const queryCollection =  collection(database, 'items' )
    if (category) {

      const queryFilter = query (queryCollection, where('category', '==',"perros"))

         getDocs(queryFilter)
        .then(response => setProds(response.docs.filter(product => ({ id: product.id, ...product.data() }))))
        .catch(err => console.log(err))
        .finally(() => setLoading(() => false))   

        } else {   
          
          getDocs(queryCollection)
         .then (response =>setProds(response))
         .catch (error => console.log(error))  
         .finally (()=> setLoading (false))
                }
          

   
    // if (category) {
   //   getFetch
    
   // .then (response =>setProds(response.filter (prod=>prod.category === category)))
   // .catch (error => console.log(error))  
   // .finally (()=> setLoading (false))
      
   // } else {
   //   getFetch
    
   // .then (response =>setProds(response))
   // .catch (error => console.log(error))  
    //.finally (()=> setLoading (false))
      
    }  
    
  ,[category]) 
  console.log (prods)
 
  
  return (
       
    
              <>
                <center>

                
                  <h2>{saludar}
                     </h2>

                     { loading ?  <CargandoWidget/> 
                               : 
                                <>                                         
                                   <Itemlist prods = {prods} />
                                                                   

                                  </>
                       }  
                    
                    </center>
                  </>                     

           
                           
 
    
  );
  }


export default ItemListContainer;
