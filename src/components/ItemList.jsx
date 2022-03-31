import { memo } from "react"
 import Item from "./Item1"

const Itemlist = memo (
    ({prods}) => {

              return (
                       <>
                         {prods.map ((prod) => <Item prod={prod} key= {prod.id} />)  }
                       </>
                     )
    
                 }

) 

export default Itemlist