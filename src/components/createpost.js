import "../App.css";

import ScrollArrow from "./scrollbutton";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./footer";
import NavbarNew from "./navbar";


export default function Create() {
  

  return (
    <div>
      <NavbarNew />
      
      <Footer />
      <ScrollArrow />
    </div>
  );
}
