import { useEffect, useState } from "react";

function ItemCount () {
    
    const [count,setCount]  = useState(1)
    useEffect (()=> {
        return ()=>{

        }
    })
    
    const restarCount = ()=>{ 
                               if(count > 1 && count <7){
                                             setCount (count -1)
                                             }
                                             else {alert ('Debe ser mayor a 1.')
                                             console.log ('Debe ser mayor a 1.')
                                                  }
                                             }


    const sumarCount = ()=>  {
                              if (count < 5){
                                             setCount ( count +1)
                                            }
                                             else {alert ('Se alcanzó el stock máximo.')
                                             console.log ('Se alcanzó el stock máximo.')
                                            }

                                             }
                            
  
    return ( 
    <> 
     
         <h3 className="ms-5"> PRODUCTO </h3>
         
         <button 
           className="btn btn-outline-primary ms-5 "
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

          <button 
           className="btn btn-outline-primary btn-block ms-5"
           onClick={()=> alert (' agregado al carrito')} >
             Agregar al carrito
             </button> 

        
        
    </>
    )

}
export default ItemCount