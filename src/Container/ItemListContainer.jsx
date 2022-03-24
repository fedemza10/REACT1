import { useEffect, useState } from "react";
import getFetch from "../Helpers/getFetch";
import CargandoWidget from '../components/CargandoWidget';
import Itemlist from "../components/ItemList";

import { useParams } from "react-router-dom";




function ItemListContainer({ saludar }) {

  const [loading, setLoading] = useState (true)
  const [ prods, setProds] = useState ([])
  const {category} = useParams()

  console.log (loading)
 
 
  useEffect (()=>{ 
    if (category) {
      getFetch
    
    .then (response =>setProds(response.filter (prod=>prod.category === category)))
    .catch (error => console.log(error))  
    .finally (()=> setLoading (false))
      
    } else {
      getFetch
    
    .then (response =>setProds(response))
    .catch (error => console.log(error))  
    .finally (()=> setLoading (false))
      
    }
    
    
  },[category]) 
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
