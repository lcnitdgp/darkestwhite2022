import React, { useState } from 'react'
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button
} from "react-bootstrap";

export default function Admin(){
    const [errorMessages, setErrorMessages] = useState({});
    const [isAdmin, setIsAdmin] = useState(false);
  
    const database = [
      {
        username: "lcnitd",
        password: "alohomora"
      },
    ];
  
    const errors = {
      uname: "Invalid username.",
      pass: "Invalid password."
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      var { uname, pass } = document.forms[0];
      const userData = database.find((user) => user.username === uname.value);
      if (userData) {
        if (userData.password !== pass.value) {
          setErrorMessages({ name: "pass", message: errors.pass });
        }
        else {
          setIsAdmin(true);
        }
      }
      else {
        setErrorMessages({ name: "uname", message: errors.uname });
      }
    };
    const renderErrorMessage = (name) =>
      name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
      );
  
    const renderForm = (
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Username </label>
            <input type="text" name="uname" required />
            { renderErrorMessage("uname") }
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" required />
            { renderErrorMessage("pass") }
          </div>
          <div className="button-container">
          <Button
            className="button-create"
            variant="outline-dark"
            style={{
              borderRadius: "0%",
              width: "40%",
              margin: "2rem",
              
            }}
          >
          {"Submit"}
          </Button>
          </div>
        </form>
      </div>
    );
  
    return (
      <div className="app">
        <div className="login-form">
          {isAdmin ? <div> </div> : <div className="title">Sign In</div>}
          {isAdmin ? <div> Admin successfully logged in. </div> : renderForm}
        </div>
      </div>
    );
}