import "../App.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";

const token_key = "USER_TOKEN";

const user_id = "USER_ID";
const clientId = process.env.REACT_APP_CLIENT_ID;

function Userlogin() {
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [googleId, setGoogleId] = useState("");

  const [loginStatus, setLoginStatus] = useState(false);

  const onSuccess = async (res) => {
    //const user_id = res.googleId;
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
        console.log(res.data.user[0]._id);
        setId(res.data.user[0]._id);
        toast.success("Logged in successfully.");
        window.location = "/";
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

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username && password) {
      await axios
        .post(`https://darkestwhitebackend.lcnitd.co.in/user/login`, {
          username: username,
          password: password,
        })
        .then((res) => {
          const token = res.data.token;
          const user_id = res.data.user[0]._id;
          console.log(res.data);
          setToken(token);
          setId(user_id);
          toast.success("Logged in.");
          window.location = "/";
        })
        .catch((err) => {
          toast.error("The username and password do not match.");
          console.log(err);
        });
    } else {
      toast.error("Please fill out all the fields.");
    }
  };

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
  return (
    <div
      className="container-login"
      style={{
        backgroundImage: `url("https://wallpaperaccess.com/full/1431811.jpg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container-wrapper-login">
        <h3 className="login-text">
          <i className="bi bi-person-circle ac-logo" />
          Login
        </h3>
        <form className="form-login">
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
                // maxWidth: "20vw",
              }}
              value={username}
            />
          </div>
          <div className="item-login">
            <input
              className="input"
              type="password"
              placeholder="Password"
              style={{
                height: "auto",
                width: "100%",
                fontFamily: "'Antic Slab', serif",
                // maxWidth: "20vw",
              }}
              onChange={(e) => {
                setPassword(e.target.value);
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
            <ToastContainer />
          </div>
        </form>
        <h2 className="or">OR</h2>
        <div className="social-media">
          {/* {!loginStatus && (
              <GoogleLogin
                clientId="729111369321-ccjfl5jdeqpiekfl0mots534folvdmnu.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={handleSuccess}
                onFailure={handleFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
                uxMode="redirect"
                redirectUri="http://localhost:3000"
              />
            )}           
             {loginStatus && (
              <div>
                <GoogleLogout
                  clientId="729111369321-ccjfl5jdeqpiekfl0mots534folvdmnu.apps.googleusercontent.com"
                  buttonText="Logout"
                  onLogoutSuccess={logout}
                />
              </div>
            )} */}
          {!loginStatus && (
            <GoogleLogin
              clientId={clientId}
              buttonText="Login"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={"single_host_origin"}
              isSignedIn={false}
              autoLoad={false}
            />
          )}
          {loginStatus && (
            <div>
              <GoogleLogout
                clientId={clientId}
                buttonText="Log Out"
                onLogoutSuccess={logOut}
              />
            </div>
          )}
        </div>
        <span className="ac">
          New Here? {}
          <Link to="/signup">Sign Up</Link>
        </span>
      </div>
    </div>
  );
}

export default Userlogin;
