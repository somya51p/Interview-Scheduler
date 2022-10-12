import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import logo from "./logo.jpg";
import "./Header.scss";

const Header = () => {
  return (
    <Navbar expand="lg" className="nav">
      <Navbar.Brand href="/">
        <img className="nav__logo nav__logo-animate" src={logo} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav__links">
          <Nav.Link href="/upcoming" className="nav__links-text">
            Upcoming Interviews
          </Nav.Link>
          <Nav.Link href="/schedule" className="nav__links-text">
            Schedule Interview
          </Nav.Link>
         
        </Nav>
        <button type="button" className="nav__btn">
          Sign In
        </button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
