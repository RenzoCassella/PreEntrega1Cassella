import CartWidget from "./CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import * as React from 'react';

const NavBar = ()  => {
return (
    <Navbar bg="danger" expand="lg">
    <Container>
        <Navbar.Brand href="/">Somos River</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Tienda</Nav.Link>
            <NavDropdown title="Quienes somos?" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Redes</NavDropdown.Item>
            <NavDropdown.Item href="/contacto"> 
                Contacto
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Login</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
                Medios de pago
            </NavDropdown.Item>
            </NavDropdown>
            <CartWidget/>
        </Nav>
        
        </Navbar.Collapse>
    </Container>
    </Navbar>
    

);
}

export default NavBar;