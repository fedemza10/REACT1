import { useEffect, useState } from "react";
import getFetch from "../getFetch/getFetch";
import CargandoWidget from "./CargandoWidget";

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

                 : prods.map((prod)=> 
                           
                              <div  key={prod.id}
                                    className='col-md-4' >

                                 <div className="card w-100 mt-5" >

                                         <div className="card-header">
                                            {`${prod.name} - ${prod.category}`}
                                                </div>

                                         <div className="card-body">
                                           <img src={prod.image} alt='' className='w-50' />
                                              {prod.price}                                                            
                                                 </div>
                                                 
                                          <div className="card-footer">              
                                             <button className="btn btn-outline-primary btn-block">
                                               detalle del producto
                                                </button>                                                               
                                                                            
                                                  </div>
                                    </div>
                             </div>
) 
    }
 
    </>
  );
  }


export default ItemListContainer;
