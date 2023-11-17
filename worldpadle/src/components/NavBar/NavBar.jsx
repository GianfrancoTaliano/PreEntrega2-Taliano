import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CartWidget } from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-primary">
      <Container fluid>
        <Navbar.Brand href="#">WorldPadle</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <NavLink to="/" className={( {isActive})=>isActive ?"btn btn-dark" : "btn" }> 
              Home
            </NavLink>
           
            <NavLink to="/paletas" className={( {isActive})=>isActive ?"btn btn-dark" : "btn" }> 
              Paletas
            </NavLink>
         
            <Link to="/accesorios">
              <Button variant="outline-light">Accesorios</Button>
            </Link>
          </Nav>
          <Form className="d-flex">
           
          </Form>
          
          <Link to="/carrito">
            <Button variant="outline-light">
              <CartWidget /> 
            </Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};