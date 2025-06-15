import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';


export default function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img src={logo} alt="Amihan Airlines Logo" style={{ height: '40px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About Us</Nav.Link>
            <Nav.Link as={NavLink} to="/book">Book</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Contacts</Nav.Link>
            <Nav.Link as={NavLink} to="/pages">Pages</Nav.Link>
          </Nav>
          <Button variant="warning" as={NavLink} to="/login">Login</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
