'use client';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavFunc() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <div>
        <Navbar.Brand href="/" className='text-danger'>WM</Navbar.Brand>
        </div>
        <div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/css_tutorial">CSS</Nav.Link>
            <Nav.Link href="/bootstrap_tutorial">Bootstrap</Nav.Link>
            <Nav.Link href="/backend_tutorial">Backend</Nav.Link>
            <Nav.Link href="/js_tutorial">Javascript</Nav.Link>
            <Nav.Link href="/react_tutorial">React</Nav.Link>
            <Nav.Link href="/api_tutorial">API</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </div>
        
        
      </Container>
    </Navbar>
  );
}

export default NavFunc;