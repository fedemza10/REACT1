import React from 'react'
import CartWidget from './CartWidget'

function Navbar() {
  return (
      <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Golden Shop</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Alimento para Perros</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Alimento para Gatos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Accesorios</a>
        </li>
        <li>
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