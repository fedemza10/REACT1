import { useEffect, useState } from "react";
import getFetch from "../Helpers/getFetch";
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc, getDocs, getFirestore, limit, query, where } from 'firebase/firestore'





function ItemDetailContainer() {

  const [loading, setLoading] = useState (true)
  const [ prods, setProds] = useState ([])
  const { detailId} = useParams ()
 
 
  useEffect (()=>{ 
    
    const db = getFirestore()

     const queryDoc = doc (db, 'items', 'UHGGuI65ttlA43R99n8O') 
         getDoc(queryDoc)
        .then(resp => setProds( {id: resp.id, ...resp.data()} ))
        .catch (error => console.log(error))  
        .finally (()=> setLoading (false))


    
    //   getFetch
    
    
   // .then (response =>setProds(response.find(prod => prod.id === detailId)))
    //.catch (error => console.log(error))  
   // .finally (()=> setLoading (false))

  },[detailId]) 
  console.log (prods)
  
  return (
    <>
       <ItemDetail prod={prods}/>
       
    </>
  );
  }


export default ItemDetailContainer;
