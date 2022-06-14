import React from 'react'
import "../App.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button, Offcanvas
} from "react-bootstrap";

// function Navbar() {
//   return (
//     <header className="header">
//       <h2 className="header-title">Darkest White</h2>
// <nav className="Navbar">
//   <ul className="menu">
//     <li>HOME

//     </li>

//     <li>THEMES
//       <ul className="sub-menu">
//         <li>Pandemic Pages</li>
//         <li>Art</li>
//         <li>Music</li>
//         <li>Literature</li>
//         <li>Movies</li>
//       </ul>
//     </li>

//     <li>SIGNUP/LOGIN
//       <ul className="sub-menu">
//         <li>SignUp</li>
//         <li>Login</li>
//       </ul>
//     </li>

//     <li>ABOUT US

//     </li>

//     <li>CONTACT US

//     </li>

//     <li className="toggle" id="slide">
//     <button type="button" id="hamburger-menu" class="open-nav-btn" aria-label="open navigation" aria-controls="link-list" aria-expanded="false">&#9776;</button>
//   <div id="slide-nav" class="slide-content">
//     <button type="button" id="close" class="close-btn" aria-label="close navigation">&times;</button>
//     <ul id="link-list">
//       <li><a href="...">Services</a></li>
//       <li><a href="...">Programs</a></li>
//       <li><a href="...">Blog</a></li>
//       <li><a href="...">About Us</a></li>
//       <li><a href="...">Contact</a></li>

//     </ul>
//   </div>
//     </li>
//   </ul>

// </nav>

//     </header>

//   );
// }

function NavbarNew(props) {


  

  
  
   const [show, setShow] = React.useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar">
      <Container>
        <Navbar.Brand className="navbar-title">
          <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
            Darkest White
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto navbar-content">
            <Nav.Link>
              <Link
                to="/"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                HOME
              </Link>
            </Nav.Link>

            <NavDropdown title="POSTS" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link
                  to="/posts/movies"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  Movies
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to="/posts/music"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  Music
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to="/posts/visualarts"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  Visual Arts
                </Link>
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item>
                <Link
                  to="/posts/books"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  Books
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              <Link
                to=""
                style={{ color: "inherit", textDecoration: "inherit" }}
                onClick={props.login}
              >
                {props.status ? "LOGOUT" : "LOGIN"}
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link
                to="/contact"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                CONTACT US
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/create"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                {props.status ? "CREATE POST" : ""}
              </Link>
            </Nav.Link>
            <Nav.Link>
              <div onClick={handleShow}>ABOUT US</div>

              <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>DARKEST WHITE</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  Lorem ipsum dolor sit amet, unum adhuc graece mea ad. Pri odio
                  quas insolens ne, et mea quem deserunt. Vix ex deserunt torqu
                  atos sea vide quo te summo nusqu.
                </Offcanvas.Body>
              </Offcanvas>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarNew;





 {
   /* <NavDropdown title="LOGIN" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                {" "}
                <Link
                  to="/userlogin"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  Login
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to="/signup"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  SignUp
                </Link>
              </NavDropdown.Item>
            </NavDropdown> */
 }