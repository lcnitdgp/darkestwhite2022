import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container,
 Navbar,
 Nav,
 NavDropdown,
 Form,
 FormControl,
 Button,

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

function NavbarNew(){
return(
  <Navbar collapseOnSelect expand="lg" className="navbar">
  <Container className="container">
  <Navbar.Brand className="header-title" href="#home">Darkest White</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
     <Nav className="ms-auto nav-content">
      <Nav.Link href="#features">HOME</Nav.Link>
      <NavDropdown title="POSTS" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="THEMES" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#pricing">CONTACT US</Nav.Link>
      
      
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
)
}



export default NavbarNew;
