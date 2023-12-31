import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-primary">
      <Container fluid>
      <Navbar.Brand as={Link} to="/">WorldPadle</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <NavLink   className={( {isActive})=>isActive ?"btn btn-dark" : "btn" } to="/"> 
              Home
            </NavLink>
           
            <NavLink  className={( {isActive})=>isActive ?"btn btn-dark" : "btn" } to="/category/paletas"> 
              Paletas
            </NavLink>
         
            <NavLink  className={( {isActive})=>isActive ?"btn btn-dark" : "btn" } to="/category/accesorios">
              Accesorios
            </NavLink>
          </Nav>
          <Form className="d-flex">
           
          </Form>
          
          <NavLink to="/cart">
            <Button variant="outline-light">
              <CartWidget /> 
            </Button>
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};