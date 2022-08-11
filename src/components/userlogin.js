import '../App.css'
import { Link } from "react-router-dom";
import axios from 'axios';
import {useState} from 'react';
const token_key = "USER_TOKEN";


function Userlogin(){
      
      const [username, setUserName] = useState("");

      const [password, setPassword] = useState("");

      const handleSubmit = async (e) => {
        e.preventDefault();

        await axios
          .post(`http://localhost:5000/user/login`, {
            
            username: username,
            password: password,
          })
          .then((res) => {
            
           
            
             const { success, token, status } = JSON.parse(res);
             console.log(success);
             console.log(token);
             console.log(status);
             setToken(token);
             window.location = "/";
              console.log("submit");
          })

          .catch((err) => console.log(err));
         
         

       

          
      };

      const setToken = (token) => {
        window.localStorage.setItem(token_key, token);
      };

    
     const getToken = () => {
        let token = window.localStorage.getItem(token_key);
        if (!!token) return token;
        return false;
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
              <button type="submit" onClick={handleSubmit}>Submit</button>
            </div>
          </form>
          <h2 className="or">OR</h2>
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
            <Link to="/signup">Sign Up</Link>
          </span>
        </div>
      </div>
    );
}


export default Userlogin;