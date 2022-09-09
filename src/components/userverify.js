import '../App.css'
import { Link } from "react-router-dom";
import axios from 'axios';
import {useState} from 'react';
import OTPInput, { ResendOTP } from "otp-input-react";

import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const token_key = "USER_TOKEN";

const user_id = "USER_ID";

function VerifyUser(){
       
      const [OTP, setOTP] = useState("");
      const handleSubmit = async (e) => {
        e.preventDefault();

        await axios
          .get(`http://localhost:5000/user/verify`, {
            uniqueString: OTP,
          })
          .then((res) => {
            
             
             const token = res.data.token;
             const user_id = res.data.user[0]._id;
              console.log(res.data);
             setToken(token);
             setId(user_id);
             toast("verified");
             window.location = "/";
              
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
      const setId = (id) => {
        window.localStorage.setItem(user_id, id);
      };
    return (
      <div className="container-login">
        <ToastContainer/>
        <div className="container-wrapper-login">
          <form>
          <h3 className="login-text">
            <i className="bi bi-person-circle ac-logo" />
            Enter Otp
          </h3>
            <div>
              <OTPInput style = {{}} value = {OTP} onChange = {setOTP} autoFocus OTPLength={8} otpType="number" disabled={false}  />
            </div>
            <div className="item submit">
              <button type="submit" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </form>
          </div>
      </div>
    );
}


export default VerifyUser;