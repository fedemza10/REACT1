import Intercambiabilidad from "./Intercambiabilidad"





function ItemDetail ({prod}) {
    return (
        <>
          <center>

          
            <div className='col-md-4' >

                  <div className="card w-125 mt-5" >
                      

                          <div className="card-header">
                              {`${prod.name} - ${prod.category}`}
                           </div>

                          <div className="card-body">
                             <img src={prod.image} alt='' className='w-80' />
                                                                                                 
                            </div>
                      
                          <div className="card-footer">                

                              <button className="btn btn-outline-primary btn-block">
                                       $   {prod.price}
                                     </button>   

                                  </div>

                                     
                                            
                                                 
                        
                   </div>

                   
              </div>
             
              <Intercambiabilidad/>

          </center>
        </>
    )
}
export default ItemDetail