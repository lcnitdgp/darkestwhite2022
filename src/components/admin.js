import "../App.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, toast } from 'react-toastify';
const token_key = "USER_TOKEN";
const user_id = "USER_ID";

function Admin() {
  const [username, setUserName] = useState("");

  const [password, setPassword] = useState("");

  const getToken = () => {
    let token = window.localStorage.getItem(token_key);
    if (token) return token;
    return false;
  };

  let token = getToken();
  

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(! (username && password)){
      toast.error("Please fill out all fields.")
      return;
    }
    await axios
      .post(`https://darkestwhitebackend.lcnitd.co.in/user/login`, {
        username: username,
        password: password,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      
      )
      .then((res) => {
        //const { success, token, status } = JSON.stringify(res);
        //  console.log(success);

        console.log(res);
        const token = res.data.token;
        console.log(res.data.user[0].isAdmin);
        setToken(token);
       
        const user_id = res.data.user[0]._id;

        setId(user_id);
         if (res.data.user[0].isAdmin)
           window.location = "/darkestwhite_admin_panel";
           console.log("submit");
      })

      .catch((err) => {
        console.log(err);
        toast.error("Invalid Credentials.")
      });
  };

  const setToken = (token) => {
    window.localStorage.setItem(token_key, token);
  };
  const setId = (id) => {
    window.localStorage.setItem(user_id, id);
  };

  
  return (
    <div className="container-login">
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
              value={username}
              style={{
                height: "auto",
              }}
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
              style={{
                height: "auto",
              }}
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
            <ToastContainer/>
          </div>
        </form>
        {/* <h2 className="or">OR</h2>
        <div className="social-media">
          <a href="#">
            <div className="icons8-google social-mediaImg" />
          </a>
          <a href="#">
            <div className="icons8-facebook-circled social-mediaImg" />
          </a>
          <a href="#">
            <div className="icons8-twitter social-mediaImg" />
          </a>
        </div>
        <span className="ac">
          Don't have an Account?
          <Link to="/signup"> Sign Up</Link>
        </span> */}
      </div>
    </div>
  );
}

export default Admin;
