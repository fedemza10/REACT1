import React from 'react'
import CartWidget from './CartWidget'

function Navbar() {
  return (
      <div>
    <nav class="navbar  navbar-expand-lg navbar-light bg-light ">
          <div class="container ">
            <a class="navbar-brand active" aria-current="page" href="./index.html">GOLDEN SHOP</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNav" >
              <ul class="navbar-nav m-auto  ">
                <li class="nav-item">
                  <a class="nav-link "  href="#"> ALIMENTOS PARA PERROS </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"> ALIMENTOS PARA GATOS </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"> ACCESORIOS</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"> GUARDERIA</a> 
                </li>
                
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                   CONTACTO
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                   <li><a class="dropdown-item" href="#">CONTACTANOS</a></li>
                   <li><a class="dropdown-item" href="#">TRABAJAR CON NOSTROS</a></li>
            
                    </ul>
                </li>
                <li class="nav-item">
                 <a class="navbar-brand" href="#">
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