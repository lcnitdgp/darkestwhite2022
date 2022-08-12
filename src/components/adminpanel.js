import "../App.css";
import { useState, useEffect } from "react";
import Card from "./card";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
//import data from './data,';
import axios from "axios";
import Article from "./article";

function AdminPanel() {
  const [post, setPost] = useState([{}]);

  function getPosts() {
    axios
      .get("http://localhost:5000/blog/unpublished")
      .then((response) => response.data)
      .then((data) => {
        setPost(data);
      });
  }
  useEffect(() => {
    getPosts();
  }, []);

  const cards = post.map((item) => {
    
      
      return <Card key={item._id} item={item} />
    
   
  });

  return (
    <div className="cardhero">
      <h1 className="cardhero-header">unpublished Posts</h1>
      <hr className="herohr" />
      <Container className="card-grid">{cards}</Container>
    </div>
  );
}

export default AdminPanel;
