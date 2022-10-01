import '../App.css';
import { useState, useEffect } from 'react';
import Card from './card';
import "bootstrap/dist/css/bootstrap.min.css";
import {Container,Row,Col} from 'react-bootstrap';
//import data from './data,';
import axios from "axios";

function CardHero(){
  const [post, setPost] = useState([{}]);

  function getPosts() {
    axios
      .get("https://darkestwhitebackend.lcnitd.co.in/blog/getallblogs")
      .then((response) =>  response.data)
      .then((data) => {
        setPost(data);   
      });
  }
  useEffect(() => {
    getPosts();
  },[]);
  //console.log(post);
  const reversed = [...post].reverse();
  const cards = reversed.slice(0,6).map((item) => {
    return <Card key={item._id} item={item} />;
  });   

    return (
      <div className="cardhero" style={{ height: "auto", }}>
        <h1 className="cardhero-header">Our Recent posts</h1>
       
        <Container className='card-grid' >
           {cards}
        </Container>
      </div>
    );
}

export default CardHero;