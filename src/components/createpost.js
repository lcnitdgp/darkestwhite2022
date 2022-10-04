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
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const token_key = "USER_TOKEN";

 const getToken = () => {
   let token = window.localStorage.getItem(token_key);
   if (token) return token;
   
   return false;

 };

 let token = getToken();


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
   if(!token)
    toast.error("You're not Logged In to perform this action.");   
  
   if (!selectedFile){
    toast.error("Please select an image for the blogpost.");
    return;
   }
   if(!(author && title && content)){
    toast.error("Please fill out all fields.");
   }
   const reader = new FileReader();
   reader.readAsDataURL(selectedFile);
   reader.onloadend = async()=> {
   await axios
     .post(`https://darkestwhitebackend.lcnitd.co.in/blog`, {
       author: author,
       title: title,
       content: content,
       image: reader.result,
     },{
      headers:{
         Authorization: `Bearer ${token}`,
      }
     })
     .then((res) => {
       console.log(res);
       console.log("submit");
       toast.success("Submitted.");
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
    <div className = "main-create-hero">
      <Container className="create-hero">
        <h1 className="create-header">POST YOUR BLOG</h1>
        <form >
          <Row className="create-fields">
            <input
              className="create-input"
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
              className="create-input"
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
              className="create-input"
              placeholder="Write Your Piece Here.."
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
              accept="image/*"
              onChange={handleFileInputChange}
              value={fileInputState}
              style={{
                color: "#dfdccf",
              }}
            />
          </Row>

          <Row className="create-fields">
            <Button
              className="button-create"
              variant="outline-light"
              style={{
                borderRadius: "0%",
                width: "60%",
                marginBottom: "2rem",
              }}
              onClick={handleSubmit}
            >
              SUBMIT
            </Button>
            <ToastContainer/>
          </Row>
        </form>
      </Container>
    </div>
      <Footer />
      <ScrollArrow />
    </div>
  );
}