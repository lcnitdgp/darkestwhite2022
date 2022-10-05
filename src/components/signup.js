import "../App.css";
import {useState, useEffect} from 'react';
import axios from 'axios';
import { Link,Navigate } from "react-router-dom";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const token_key = "USER_TOKEN";

const user_id = "USER_ID";
const clientId = process.env.REACT_APP_CLIENT_ID;

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
  
  useEffect(() => {
    const initClient = () => {
          gapi.client.init({
          clientId: clientId,
          scope: ''
        });
     };
     gapi.load('client:auth2', initClient);
  });
  
  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  }

   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [username, setUserName] = useState("");
   const [password, setPassword] = useState("");
   
   const [url, setUrl] = useState("");
   const [googleId, setGoogleId] = useState("");

   const [loginStatus, setLoginStatus] = useState(false);
   const onSuccess = async (res) => {
    const user_id = res.googleId;
    const token = res.accessToken;
    await axios
      .post(`https://darkestwhitebackend.lcnitd.co.in/user/googlelogin`, {
        name: res.profileObj.name,
        email: res.profileObj.email,
        image: res.profileObj.imageUrl,
        googleId: res.profileObj.googleId,
        username: res.profileObj.name,
      })
      .then((res) => {
        setLoginStatus(true);
        setToken(token);
        setId(user_id);
        toast.success("Logged in successfully.");
        // window.location = "/";
      })
      .catch((err) => {
        toast.error("Error in logging you in..");
        console.log(err);
      });
  };

  const onFailure = (err) => {
    console.log("Authentication failed");
  };

  const logOut = () => {
      setLoginStatus(false);
      window.localStorage.clear();
      console.log("logged out");
  };
  
 const handleSubmit = async (e) => {
  e.preventDefault();
   if((username && name && email && password)){
    if(!isValidEmail(email)) {
      toast.error("Please input a valid email.");
      return;
    }
    if(password.length < 8){
      toast.error("The password must be at least 8 characters long.");
      return;
    }
   await axios
     .post(`https://darkestwhitebackend.lcnitd.co.in/user/signup`, {
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

     .catch((err) => {
        console.log(err)
        toast.error("A user with this email or username already exists.");
        return;
     });
    }
    else{
      toast.error("Please fill out all fields.");
      return;
    }
 };
  
  
  return (
    <div className="container-login" style={{ backgroundImage: `url("https://wallpaperaccess.com/full/1431811.jpg")`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
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
                fontFamily: "'Antic Slab', serif",
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
                fontFamily: "'Antic Slab', serif",
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
                fontFamily: "'Antic Slab', serif",
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
                fontFamily: "'Antic Slab', serif",
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
        {/* <h2 className="or">OR</h2>
        <div className="social-media">
        {!loginStatus && (
              <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
              />
            )}           
             {loginStatus && (
              <div>
                  <GoogleLogout clientId={clientId} buttonText="Log Out" onLogoutSuccess={logOut} />
              </div>
            )}
        </div> */}
        <span className="ac">
          Have an Account? <Link to="/login">Log In</Link>
        </span>
        <ToastContainer/>
      </div>
    </div>
  );
}

export default Signup;
