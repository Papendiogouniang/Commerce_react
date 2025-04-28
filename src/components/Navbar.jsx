import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavigationBar() {
  return (
    <Navbar
      expand="lg"
      sticky="top"
      className="navbar-dark shadow-sm py-0"
      style={{ backgroundColor: '#343a40' }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-light">
          <span style={{ color: '#ff9900' }}>Jolof</span>-Commerce
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto"> {/* C'est ici que le menu est centré */}
            <Nav.Link as={Link} to="/" className="px-4 text-light">🏠 Home</Nav.Link>
            <Nav.Link as={Link} to="/boutique" className="px-4 text-light">🛍️ Boutique</Nav.Link>
            <Nav.Link as={Link} to="/apropos" className="px-4 text-light">ℹ️ A propos</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="px-4 text-light">📞 Contact</Nav.Link>
            <Nav.Link as={Link} to="/product" className="px-4 text-light">📦 Product</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/login" className="px-4 text-light">🔐 Login</Nav.Link>
            <Nav.Link as={Link} to="/cart" className="px-4 text-light">
              🛒 Panier
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
