import '../App.css';
import axios from 'axios';

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
      isLogin ? alert("subscribed") : (window.location = "/signup");
    }
  };

 const logout = () => {
   window.localStorage.clear();
 };

    
  return (
    <div className="subscribe">
      <h1 className="sub-heading">Subscribe to our Newsletter</h1>
      <h4 className="sub-text">
        Sed ut perspiciatis unde omnis iste natus error sit volu accusa ntium
        doloremque laudantium, ut perspiciatis utota.
      </h4>
      <Button
        className="button-create"
        variant="outline-dark"
        style={{
          borderRadius: "0%",
          width: "40%",
          marginBottom: "2rem",
           
        }}
       onClick={handleSubmit}
      >
     {isLogin?"Subscribe":"Login to Subscribe"}
      </Button>
    </div>
  );
  
}

export default Subscribe;