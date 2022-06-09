import '../App.css'
import Card from "./card";
import data from "./data,";
import ScrollArrow from './scrollbutton';
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";
import Footer from './footer'
import NavbarNew from './navbar';
import Sidebar from './sidebar'

export default function Movies() {
  const cards = data.map((item) => {
   if(item.type=='movies')
   {
      return <Card key={item.id} item={item} />;
   }
  });        
   const sampleLocation = useLocation();
   console.log(sampleLocation.pathname);  

  return (
    <div>
      <NavbarNew />
      <div className="movies">{cards}</div>
      <Footer />
      <ScrollArrow />
    </div>
  );
}
