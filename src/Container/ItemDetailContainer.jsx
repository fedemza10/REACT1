import { useEffect, useState } from "react";
import getFetch from "../Helpers/getFetch";
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router-dom";
import CargandoWidget from "../components/CargandoWidget";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";





function ItemDetailContainer() {

  const [loading, setLoading] = useState (true)
  const [ prods, setProds] = useState ([])
  const { detailId} = useParams ()
 
 
  useEffect (()=>{ 
    
    const db = getFirestore()
         const queryCollection = collection (db, 'items')
           
           const queryFilter = query (queryCollection, where ('category','==','perros'))
           getDocs (queryFilter)
           .then (response => setProds (response.docs.map (prod =>({id: prod.id, ...prod.data()} ))))
           .catch (error => console.log (error))
           .finally (()=> setLoading (false))


    
 //     getFetch
    
    
  //  .then (response =>setProds(response.find(prod => prod.id === detailId)))
  // .catch (error => console.log(error))  
  //  .finally (()=> setLoading (false))

  },[detailId]) 
  console.log (prods)
  
  return (
    <>
     { loading ?  <CargandoWidget/> 
               : 
               <ItemDetail prod={prods}/>
      }   
    </>
  );
  }


export default ItemDetailContainer;
