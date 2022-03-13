import React from 'react'
import CartWidget from './CartWidget'

function Navbar() {
  return (
      <div>
    <nav className="navbar  navbar-expand-lg navbar-light bg-light ">
          <div className="container ">
            <a className="navbar-brand active" aria-current="page" href="./index.html">GOLDEN SHOP</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav" >
              <ul className="navbar-nav m-auto  ">
                <li className="nav-item">
                  <a className="nav-link "  href="#"> ALIMENTOS PARA PERROS </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"> ALIMENTOS PARA GATOS </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"> ACCESORIOS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"> GUARDERIA</a> 
                </li>
                
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                   CONTACTO
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                   <li><a className="dropdown-item" href="#">CONTACTANOS</a></li>
                   <li><a className="dropdown-item" href="#">TRABAJAR CON NOSTROS</a></li>
            
                    </ul>
                </li>
                <li className="nav-item">
                 <a className="navbar-brand" href="#">
                  <CartWidget/>
                 </a>
                </li>
        
          </ul>
      </div>
    </div>
  </nav>
 </div>
  )
}

export default Navbar