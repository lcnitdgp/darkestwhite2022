import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  return (
    <header className="header">
      <h2 className="header-title">Darkest White</h2>
      <nav className="Navbar">
          
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Pages</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">SignUp/Login</a></li>
            <li><a href="#">Contact Us</a></li>
        </ul>
    </nav>
      
    </header>
  );
}

export default Navbar;
