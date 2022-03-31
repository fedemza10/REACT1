import { useEffect, useState } from "react";
//import getFetch from "../Helpers/getFetch";
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router-dom";
import CargandoWidget from "../components/CargandoWidget";
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";





function ItemDetailContainer() {

  const [loading, setLoading] = useState (true)
  const [ prods, setProds] = useState ([])
  const { detailId} = useParams ()
 
 
  useEffect (()=>{ 
    
    const dataBase = getFirestore()
         
           
           const queryDoc = doc ( dataBase, 'items', 'detailId')
           getDoc (queryDoc)
           .then (response => setProds ({id: response.id, ...response.data()} ))
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
