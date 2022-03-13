import Item from "./Item1"

function Itemlist ({prods}) {

    return (
        <>
        {prods.map ((prod) => <Item prod={prod} key= {prod.id} />)  }
        </>
    )

}

export default Itemlist