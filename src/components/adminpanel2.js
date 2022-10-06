import "../App.css";
import { useState, useEffect } from "react";
import AdminCard from "./admincard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
//import data from './data,';
import axios from "axios";
import Article from "./article";
import { data } from "jquery";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { isContentEditable } from "@testing-library/user-event/dist/utils";
const user_id = "USER_ID";
const token_key = "USER_TOKEN";



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
 

    const messages = message.map((item) => {
      return (
        <div className = "comment-card" style = {{color: "black", backgroundColor: "rgb(223 221 212)", }}>
          <div className = "comment-row">
            <span className="commentor" style = {{fontFamily: "'Antic Slab', serif", }}>{item.name}</span>
            <span className="comment-date"> {item.email}</span>
          </div>
          <p className="comment-text">{item.message}</p>
        </div>
      );
    });

    return (
      <div className="cardhero" style={{ height: "auto" }}>
        <h1 className="cardhero-header">unpublished Posts</h1>
        <hr className="herohr" />
        <ResponsiveMasonry>
          <Masonry columnsCount={3}>
            {[...post].reverse().map((item) => (
              <AdminCard key={item._id} item={item} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
        <h1 className="cardhero-header">messages</h1>
        <hr className="herohr" />
        <div className="comment-section" style={{ background: "#eae9e4" }}>
          {messages}
        </div>
      </div>
    );
}

export default AdminPanel