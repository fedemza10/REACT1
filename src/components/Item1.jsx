import { Link } from "react-router-dom"



 function Item ({prod} )  {
     return (
        <>
           <Link to={`/detail/${prod.id}`}>
            <div  
               className='col-md-4' >

                  <div className="card w-100 mt-5" >
                      

                          <div className="card-header">
                              {`${prod.name} - ${prod.category}`}
                           </div>

                          <div className="card-body">
                             <img src={prod.image} alt='' className='w-50' />
                                                                                              
                            </div>
                      
                          <div className="card-footer">     
                          
                          <button className="btn btn-outline-primary btn-block">
                                 Detalle del producto
                                 </button>                            

                                  
                          </div>
                                                                                            
                                                 
                        
                   </div>
                    
              </div>

            </Link>   
            
        </>
) 

     
 }

 export default Item 