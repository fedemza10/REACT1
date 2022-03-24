import ItemCount from "./ItemCount"




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
             
              <ItemCount initial={1} stock={5}/>

          </center>
        </>
    )
}
export default ItemDetail