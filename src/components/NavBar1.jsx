import React from 'react'
import Container from 'react-bootstrap/Container'
import  Nav from "react-bootstrap/Nav"
import  Navbar from "react-bootstrap/Navbar"
import  NavDropdown from "react-bootstrap/NavDropdown"
import { NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'
import './NavBar.css'



function NavBar() {
  return (
      <div>
    
    <Navbar collapseOnSelect expand="lg" bg="success" variant="dark" className= 'menuL'>
  <Container  >
  <NavLink to="/" className= 'menuL'> GOLDEN SHOP </NavLink>
  <Navbar.Toggle aria-controls="responsive-navbar-nav " />
  <Navbar.Collapse id="responsive-navbar-nav " className='ms-5'>
    <Nav className="me-auto">
      <NavLink to="/category/Perros" className= ' ms-5 menuL'>ALIMENTO PARA PERROS</NavLink>
      <NavLink to="/category/Gatos"className= ' ms-5  menuL'>ALIMENTO PARA GATOS</NavLink>
      <NavDropdown title="CONTACTO" id="collasible-nav-dropdown" className= ' ms-5 '>
        
        <NavDropdown.Item href="#action/3.2">ESCRIBINOS</NavDropdown.Item>
        
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">TRABAJAR CON NOSOTROS</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
    <NavLink to='Cart' className={({ isActive })=> isActive ? 'active' : ''} >
                        <CartWidget />
                    </NavLink>

    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  
 </div>
  )
}

export default NavBar