import '../App.css';
import axios from 'axios';
import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Form,
  FormControl,
  Button,
  Row,
  Col,
} from "react-bootstrap";

const token_key = "USER_TOKEN";
const user_id = 'USER_ID'
 const getToken = () => {
   let token = window.localStorage.getItem(token_key);
   if (!!token) return token;
   return false;
 };

 let token = getToken();

function Subscribe() {
  
 

  const uid = localStorage.getItem("USER_ID");

  

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!uid)
    window.location= "/login";
    await axios
      .put(`https://darkestwhitebackend.lcnitd.co.in/user/subscribe/${uid}`, {
        uid: uid,
      })
      .then((res) => {
        console.log(res);
        console.log("submit");
        //window.location = "/";
      })

      .catch((err) => console.log(err));
    { 
      token ? toast.success("Subscribed.") : toast.error("Not subscribed.");
      console.log("submit");
    }
  };

 const logout = () => {
   window.localStorage.clear();
 };

 const[isHovering, setIsHovering] = useState(false);
 
 const handleMouseEnter = () => {
  setIsHovering(true);
  };

const handleMouseLeave = () => {
  setIsHovering(false);
};
    
  return (
    <div className="subscribe">
      <h1 className="sub-heading">Subscribe to our Blog</h1>
      <h4 className="sub-text">
       Receive updates whenever a new blog is posted, right in your inbox!
      </h4>
      <Button
        className="button-subscribe"
        variant="outline-dark"
        style={{
          borderRadius: "0%",
          width: "max-content",
          marginBottom: "2rem",
          marginTop: "1rem",
          backgroundColor: isHovering? "" : "#3a2d2d",
          color: isHovering? "#dfdccf" : "#fff", 
          fontFamily: "inherit",
        }}
       onClick={handleSubmit}
       onMouseEnter={handleMouseEnter}
       onMouseLeave={handleMouseLeave}
      >
     {token?"Subscribe":"Login to Subscribe"}
      </Button>
      <ToastContainer />
    </div>
  );
  
}

export default Subscribe;