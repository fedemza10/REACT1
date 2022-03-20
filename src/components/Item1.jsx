import { Link } from "react-router-dom"

 function Item ({prod} )  {
     return (
        <>
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
                          <Link to={`/detail/${prod.id}`}>
                          <button className="btn btn-outline-primary btn-block">
                                 detalle del producto
                                 </button>                            

                          </Link>         
                          </div>
                                                                                            
                                                 
                        
                   </div>
            </div>
        </>
) 

     
 }

 export default Item 