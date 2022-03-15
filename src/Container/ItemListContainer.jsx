import { useEffect, useState } from "react";
import getFetch from "../Helpers/getFetch";
import CargandoWidget from '../components/CargandoWidget';
import Itemlist from "../components/ItemList";
import ItemCount from "../components/ItemCount";


function ItemListContainer({ saludar }) {

  const [loading, setLoading] = useState (true)
  const [ prods, setProds] = useState ([])
 
 
  useEffect (()=>{ 
    
    getFetch
    
    .then (response =>setProds(response))
    .catch (error => console.log(error))  
    .finally (()=> setLoading (false))

  },[]) 
  console.log (prods)
  
  return (
    <>
      <h2>{saludar}</h2>

      { loading ?  <CargandoWidget/> 

                 : 
                 <>                
                   <Itemlist prods = {prods} />
                   <ItemCount />

                   </>
                           
                              
    }
 
    </>
  );
  }


export default ItemListContainer;
