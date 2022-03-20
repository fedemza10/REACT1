import { useEffect, useState } from "react";
import getFetch from "../Helpers/getFetch";
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router-dom";


function ItemDetailContainer() {

  const [loading, setLoading] = useState (true)
  const [ prods, setProds] = useState ([])
  const { detailId} = useParams ()
 
 
  useEffect (()=>{ 
    
    getFetch
    
    .then (response =>setProds(response.find(prod => prod.id === detailId)))
    .catch (error => console.log(error))  
    .finally (()=> setLoading (false))

  },[detailId]) 
  console.log (prods)
  
  return (
    <>
       <ItemDetail prod={prods}/>
    </>
  );
  }


export default ItemDetailContainer;
