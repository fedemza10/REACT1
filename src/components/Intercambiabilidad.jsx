import { useState } from "react"
import { Link } from "react-router-dom"





const InputCount= ()=> {

    return (
        <Link to='/cart' >
            <button className="btn btn-outline-success ms-5 mt-3" 
                onClick={()=>console.log('ir a cart') } >
                FINALIZA TU COMPRA</button>
        </Link>
    )
}



const ButtonCount= ({handleInter})=> {
    return (
            <button className="btn btn-outline-primary ms-5 mt-3 " onClick={handleInter}>
            AGREGAR AL CARRITO</button>)

}

const Intercambiabilidad = () => {

    const [inputType, setInputType ] = useState('button')

    const handleInter=()=>{
          setInputType('input')
    }
    
    return (
        <>
            
            
            {
                inputType === 'button' ? 
                    <ButtonCount handleInter={handleInter}  />
                : 
                    <InputCount />
            }
            
        </>
    )
}

export default Intercambiabilidad
