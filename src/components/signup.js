import "../App.css";
import {useState} from 'react';
import axios from 'axios';
import { Link,Navigate } from "react-router-dom";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
const token_key = "USER_TOKEN";

const user_id = "USER_ID";

const setToken = (token) => {
  window.localStorage.setItem(token_key, token);
};


const getToken = () => {
  let token = window.localStorage.getItem(token_key);
  if (!!token) return token;
  return false;
};
const setId = (id) => {
  window.localStorage.setItem(user_id, id);
};
function Signup()  {

  gapi.load("client:auth2", () => {
    gapi.client.init({
      clientId:
        "729111369321-ccjfl5jdeqpiekfl0mots534folvdmnu.apps.googleusercontent.com",
      plugin_name: "login`",
    });
  });
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [username, setUserName] = useState("");
   const [password, setPassword] = useState("");
   
   const [url, setUrl] = useState("");
   const [loginStatus, setLoginStatus] = useState(false);
   const responseGoogle = (response) => {
     console.log(response);
     setName(response.profileObj.name);
     setEmail(response.profileObj.email);
     setUrl(response.profileObj.imageUrl);
     setLoginStatus(true);
   };
   const logout = () => {
     console.log("logout");
     setLoginStatus(false);
   };
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
       const token = res.data.token;
       setToken(token);
       console.log("submit");
       window.location = "/userverify";
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
              style={{
                height: "auto",
                width: "100%",
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
              style={{
                height: "auto",
                width: "100%",
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
              style={{
                height: "auto",
                width: "100%",

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
              style={{
                height: "auto",
                width: "100%",

              }}
              value={password}
            />{" "}
          </div>
          {/* <span className="remember">
            {" "}
            <a href="#">Forgot Password?</a>{" "}
          </span> */}
          <div className="item submit">
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
        <h2 className="or">OR</h2>
        <div className="social-media">
          {!loginStatus && (<GoogleLogin
            clientId="729111369321-ccjfl5jdeqpiekfl0mots534folvdmnu.apps.googleusercontent.com"
            buttonText="Sign Up"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
          />)}
         
          {loginStatus && (
            <div>
              <GoogleLogout
                clientId="729111369321-ccjfl5jdeqpiekfl0mots534folvdmnu.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={logout}
              />
            </div>
          )}
        </div>
        <span className="ac">
          Have an Account? <Link to="/userlogin">Log In</Link>
        </span>
      </div>
    </div>
  );
}

export default Signup;
