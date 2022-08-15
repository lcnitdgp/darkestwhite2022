import "../App.css";
import { useState, useEffect } from "react";
import AdminCard from "./admincard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
//import data from './data,';
import axios from "axios";
import Article from "./article";
import { data } from "jquery";
import { isContentEditable } from "@testing-library/user-event/dist/utils";

function AdminPanel() {
  const [post, setPost] = useState([{}]);
  const [message,setMessage] = useState([{}]);

  function getPosts() {
    axios
      .get("https://darkestwhitebackend.lcnitd.co.in/blog/unpublished")
      .then((response) => response.data)
      .then((data) => {
        setPost(data);
      });
  }
  useEffect(() => {
    getPosts();
  }, []);

   function getMessages() {
     axios
       .get("https://darkestwhitebackend.lcnitd.co.in/message/getmsg")
       .then((response) => response.data)
       .then((data) => {
         setMessage(data);
        
       });
   }
   useEffect(() => {
     getMessages();
        console.log(message);
   }, []);
  const cards = post.map((item) => {
    
      
      return <AdminCard key={item._id} item={item} />
    
   
  });

    const messages = message.map((item) => {
      return (
        <div>
          <p>{item.name}</p>
          <p>{item.email}</p>
          <p>{item.message}</p>
        </div>
      );
    });

  return (
    <div className="cardhero"
     style={{ height: "max-content" }}
    >
      <h1 className="cardhero-header">unpublished Posts</h1>
      <hr className="herohr" />
      <Container className="card-grid">{cards}</Container>
      <h1 className="cardhero-header">messages</h1>
      {messages}
    </div>
  );
}

export default AdminPanel;
