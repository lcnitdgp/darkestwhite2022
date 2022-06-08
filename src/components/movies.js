import '../App.css'
import Card from "./card";
import moviesData from "./moviesdata";
import ScrollArrow from './scrollbutton';
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './footer'
import NavbarNew from './navbar';
import Sidebar from './sidebar'

export default function Movies() {
  const cards = moviesData.map((item) => {
    return <Card key={item.id} item={item} />;
  });        
  return (
    <div>
      <NavbarNew />
      <div className="movies">{cards}</div>
      <Footer />
      <ScrollArrow />
    </div>
  );
}
