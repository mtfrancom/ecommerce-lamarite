import {Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavBar = () => {
    return ( 
        
    <Navbar bg="danger" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Lamarite</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Ubicación</Nav.Link>
              <NavDropdown title="Menú" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Ensaladas</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Viandas</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Postres</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default NavBar;
