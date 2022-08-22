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

function Subscribe() {
  
 
 const getToken = () => {
   let token = window.localStorage.getItem(token_key);
   if (!!token) return token;
   return false;
 };
  const uid = localStorage.getItem("USER_ID");

  console.log(uid);

 const isLogin = () => {
   if (!!getToken()) {
     return true;
   }
   return false;
 };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:5000/user/subscribe/${uid}`, {
        uid: uid,
      })
      .then((res) => {
        console.log(res);
        console.log("submit");
        //window.location = "/";
      })

      .catch((err) => console.log(err));
    {
      isLogin ? toast("subscribed") : (window.location = "/signup");
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
      <h1 className="sub-heading">Subscribe to our Newsletter</h1>
      <h4 className="sub-text">
        Sed ut perspiciatis unde omnis iste natus error sit volu accusa ntium
        doloremque laudantium, ut perspiciatis utota.
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
     {isLogin?"Subscribe":"Login to Subscribe"}
      </Button>
      <ToastContainer />
    </div>
  );
  
}

export default Subscribe;