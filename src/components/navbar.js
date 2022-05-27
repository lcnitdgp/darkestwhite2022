import "../App.css";
import $ from 'jquery';import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  return (
    <header className="header">
      <h2 className="header-title">Darkest White</h2>
<nav className="Navbar">
  <ul className="menu">
    <li>HOME
      
    </li>
    
    
    <li>THEMES
      <ul className="sub-menu">
        <li>Pandemic Pages</li>
        <li>Art</li>
        <li>Music</li>
        <li>Literature</li>
        <li>Movies</li>
      </ul>
    </li>
    
    
    <li>SIGNUP/LOGIN
      <ul className="sub-menu">
        <li>SignUp</li>
        <li>Login</li>
      </ul>
    </li>
    
    
    <li>ABOUT US
      
    </li>
    
    
    <li>CONTACT US
      
    </li>

    <li className="toggle" id="slide">
    <button type="button" id="hamburger-menu" class="open-nav-btn" aria-label="open navigation" aria-controls="link-list" aria-expanded="false">&#9776;</button>
  <div id="slide-nav" class="slide-content">
    <button type="button" id="close" class="close-btn" aria-label="close navigation">&times;</button>
    <ul id="link-list">
      <li><a href="...">Services</a></li>
      <li><a href="...">Programs</a></li>
      <li><a href="...">Blog</a></li>
      <li><a href="...">About Us</a></li>
      <li><a href="...">Contact</a></li>

      
    </ul>
  </div>
    </li>
  </ul>

</nav>
      
    </header>

    
  );
}

export default Navbar;
