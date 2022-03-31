import { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router-dom";
import CargandoWidget from "../components/CargandoWidget";
import { doc, getDoc, getFirestore } from "firebase/firestore";

function ItemDetailContainer() {
  const [loading, setLoading] = useState(true);
  const [prod, setProd] = useState({});
  const { detailId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = doc(db, "items", detailId);
    getDoc(queryCollection)
      .then((response) => setProd({ id: response.id, ...response.data() }))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));

    
 //     getFetch
    
    
  //  .then (response =>setProds(response.find(prod => prod.id === detailId)))
  // .catch (error => console.log(error))  
  //  .finally (()=> setLoading (false))

  },[detailId]) 
  console.log (prod)
  
  return (
    <>
     { loading ?  <CargandoWidget/> 
               : 
               <ItemDetail prod={prod}/>
      }   
    </>
  );
  }


export default ItemDetailContainer;
