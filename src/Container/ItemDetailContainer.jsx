import { useEffect, useState } from "react";
import getFetch from "../Helpers/getFetch";
import ItemDetail from "../components/ItemDetail";


function ItemDetailContainer() {

  const [loading, setLoading] = useState (true)
  const [ prods, setProds] = useState ([])
 
 
  useEffect (()=>{ 
    
    getFetch
    
    .then (response =>setProds(response.find(prod => prod.id === '1')))
    .catch (error => console.log(error))  
    .finally (()=> setLoading (false))

  },[]) 
  console.log (prods)
  
  return (
    <>
       <ItemDetail prod={prods}/>
    </>
  );
  }


export default ItemDetailContainer;
