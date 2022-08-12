import React from "react";
import {useState} from 'react';
import axios from 'axios';
import "../App.js";
import NavbarNew from "./navbar.js";
import ScrollArrow from "./scrollbutton.js";
import Footer from "./footer.js";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Form,
  FormControl,
  Button,
  Row,
  Col,
} from "react-bootstrap";

export default function Create() {
 const [author, setAuthor] = useState("");
 const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

 const [fileInputState, setFileInputState] = useState("");
 const [selectedFile, setSelectedFile] = useState(); 

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    
    setSelectedFile(file);
    setFileInputState(e.target.value);
  };

  
     
 const handleSubmit = async (e) => {
   e.preventDefault();
   if (!selectedFile) return;
   const reader = new FileReader();
   reader.readAsDataURL(selectedFile);
   reader.onloadend = async()=> {
   await axios
     .post(`http://localhost:5000/blog`, {
       author: author,
       title: title,
       content: content,
       image: reader.result,
     },{
      headers:{
        "Authorization":`Bearer ${localStorage.getItem("USER_TOKEN")}`
      }
     })
     .then((res) => {
       console.log(res);
       console.log("submit");
       alert("submitted");
              //window.location.replace = "/";
     })

     .catch((err) => {
      console.log("hello")
      console.log(err)});

   
   };
   reader.onerror = () => {
     console.error("AHHHHHHHH!!");
   };
      
 };
  
 


  return (
    <div>
      <NavbarNew />

      <Container className="create-hero">
        <h1 className="create-header">POST YOUR BLOG</h1>
        <form >
          <Row className="create-fields">
            <input
              type="text"
              placeholder="Author's name"
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
              value={author}
            />
          </Row>
          
          <Row className="create-fields">
            <input
              type="text"
              placeholder="Title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
            />
          </Row>

          <Row className="create-fields">
            <textarea
              rows="10"
              cols="50"
              placeholder="write your piece here"
              onChange={(e) => {
                setContent(e.target.value);
              }}
              value={content}
            />
          </Row>
          <Row className="create-fields">
            <input
              className="image-create"
              type="file"
              id="myFile"
              name="filename"
              placeholder="upload image"
              onChange={handleFileInputChange}
              value={fileInputState}
            />
          </Row>

          <Row className="create-fields">
            <Button
              className="button-create"
              variant="outline-dark"
              style={{
                borderRadius: "0%",
                width: "60%",
                marginBottom: "2rem",
              }}
              onClick={handleSubmit}
            >
              SUBMIT
            </Button>
          </Row>
        </form>
      </Container>
      <Footer />
      <ScrollArrow />
    </div>
  );
}
