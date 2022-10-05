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
        console.log(OTP);
        e.preventDefault();

        await axios
          .post(`https://darkestwhitebackend.lcnitd.co.in/user/verify`, {
            uniqueString: OTP,
          })
          .then((res) => {
            console.log(res)
             if(res.data.success == true){
              const token = res.data.token;
             const user_id = res.data.user._id;
              console.log(res.data);
             setToken(token);
             setId(user_id);
             toast.success("Verified.");
             window.location = "/";
             }
             
              
          })
          .catch((err) => {
            console.log(err);
            toast.error("Invalid OTP.");
          });
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
              <OTPInput className = "otp-inp" value = {OTP} onChange = {setOTP} autoFocus OTPLength={6} otpType="number" disabled={false}  />
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