import '../App.css'
import Card from "./card";
import {useState,useEffect } from 'react';
import ScrollArrow from './scrollbutton';
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation} from "react-router-dom";
import axios from 'axios';
import Footer from './footer'
import NavbarNew from './navbar';


export default function Posts() {
  const [post, setPost] = useState([{}]);

  function getPosts() {
    axios
      .get("https://darkestwhitebackend.lcnitd.co.in/blog/getallblogs")
      .then((response) => response.data)
      .then((data) => {
        setPost(data);
      });
  }
  useEffect(() => {
    getPosts();
  }, []);

   const cards = [...post].reverse().map((item) => {
     return <Card key={item._id} item={item} />;
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
