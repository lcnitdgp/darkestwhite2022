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
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";



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

  
 
   
   
    
   const sampleLocation = useLocation();
   console.log(sampleLocation.pathname);  

  return (
    <div>
      <NavbarNew />
      <div className="movies">
        <ResponsiveMasonry>
          <Masonry columnsCount={3}>
            {[...post].reverse().map((item) => (
              <Card key={item._id} item={item} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
        ;
      </div>
      <Footer />
      <ScrollArrow />
    </div>
  );
}
