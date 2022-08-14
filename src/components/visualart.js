import "../App.css";
import Card from "./card";
import data from "./data,";
import ScrollArrow from "./scrollbutton";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./footer";
import NavbarNew from "./navbar";
import Sidebar from "./sidebar";

export default function Visual() {
  const cards = data.map((item) => {
    if (item.type === "visual art") {
      return <Card key={item.id} item={item} />;
    }
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
