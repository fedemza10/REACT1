import { useEffect, useState } from "react";
import Intercambiabilidad from "./Intercambiabilidad";

function ItemCount ({initial, stock}) {
    
    const [count,setCount]  = useState(1)
    useEffect (()=> {
        return ()=>{

        }
    })
    
    const restarCount = ()=>{ 
                               if(count > initial){
                                             setCount (count -1)
                                             }
                                             else {alert ('Debe ser mayor a 1.')
                                             console.log ('Debe ser mayor a 1.')
                                                  }
                                             }


    const sumarCount = ()=>  {
                              if (count < stock){
                                             setCount ( count +1)
                                            }
                                             else {alert ('Se alcanzó el stock máximo.')
                                             console.log ('Se alcanzó el stock máximo.')
                                            }

                                             }
                                            
    
                            
  
    return ( 
    < > 
     
         
        <div className=" mt-5">
         <button 
           className="btn btn-outline-primary ms-5  "
           onClick={restarCount}>
               {'-'}
             </button>

         <label className=" ms-5">
             {count}
              </label>

         <button 
           className="btn btn-outline-primary ms-5"
           onClick={sumarCount}>
             {'+'}
             </button>
             
             
           </div>
            

           
              <Intercambiabilidad />
              

        
        
    </>
    )

}
export default ItemCount