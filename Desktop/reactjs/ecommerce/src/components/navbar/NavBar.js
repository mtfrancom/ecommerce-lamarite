import {Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import CartIcon from "../../icon/CartIcon";
import {Link, NavLink} from "react-router-dom";
import "./navbar.css";

const NavBar = () => {

    return ( 
        
    <Navbar bg="warning" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="text-decoration-none" >Lamarite</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
              <NavLink className="text-decoration-none" to="category/ubicacion"> Ubicación
            
              </NavLink>
              </Nav.Link>
              <NavDropdown title="Menú" id="basic-nav-dropdown">
                <NavDropdown.Item >
                  <NavLink className="text-decoration-none" to="category/alcohol"
                  >Alcohol
                  </NavLink>
                  </NavDropdown.Item>
                <NavDropdown.Item >
                  <NavLink className="text-decoration-none" to="category/viandas"
                  >Viandas
                  </NavLink>
                  </NavDropdown.Item>
                <NavDropdown.Item >
                  <NavLink className="text-decoration-none" to="category/ensaladas"
                  >Ensaladas
                  </NavLink>
                  </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <NavLink className={({isActive}) => isActive ? "activeClass":undefined} to="/"><CartIcon /></NavLink>
        </Container>
      </Navbar>
    );
};

export default NavBar;
