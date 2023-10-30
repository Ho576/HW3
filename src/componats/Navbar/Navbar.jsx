import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './Navbar.css'

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">HW-3</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link className='navItem nItem' to='/'>Home</Link>
            <Link className='navItem nItem' to='/products'>Products</Link>
            <NavDropdown className='navItem ' title="Restaurant" id="basic-nav-dropdown">
            <Link className='navItem downItem' to='/pizza'>Pizza</Link>
            <Link className='navItem downItem' to='/salad'>salad</Link>
            <Link className='navItem downItem' to='/onion'>Onion</Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;