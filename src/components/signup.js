import "../App.css";
import {useState} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


function Signup()  {

   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [username, setUserName] = useState("");

   const [password, setPassword] = useState("");

 const handleSubmit = async (e) => {
   e.preventDefault();

   
   await axios
     .post(`http://localhost:5000/user/signup`, {
       name: name,
       email: email,
       username: username,
       password: password,
     })
     .then((res) => {
       console.log(res);
       console.log("submit");
       window.location.replace = "/";
     })

     .catch((err) => console.log(err));
 };
  
  
  return (
    <div className="container-login">
      <div className="container-wrapper-login">
        <h3 className="login-text">
          <i className="bi bi-person-circle ac-logo" />
          Sign Up
        </h3>
        <form className="form-login">
          <div className="item-login">
            <input
              className="input"
              type="text"
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
          </div>
          <div className="item-login">
            <input
              className="input"
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </div>
          <div className="item-login">
            <input
              className="input"
              type="text"
              placeholder="Username"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              value={username}
            />
          </div>
          <div className="item-login">
            <input
              className="input"
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />{" "}
          </div>
          <span className="remember">
            {" "}
            <a href="#">Forgot Password?</a>{" "}
          </span>
          <div className="item submit">
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
        <h2 className="or">OR</h2>
        <div className="social-media">
          <a href="http://104.211.52.147/auth/google">
            <div className="icons8-google social-mediaImg" />
          </a>
        </div>
        <span className="ac">
          Have an Account? <Link to="/userlogin">Log In</Link>
        </span>
      </div>
    </div>
  );
}

export default Signup;
