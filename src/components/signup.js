import "../App.css";
import { Link } from "react-router-dom";


function Signup() {
  return (
    <div className="container-login">
      <div className="container-wrapper-login">
        <h3 className="login-text">
          <i className="bi bi-person-circle ac-logo" />
          Sign Up
        </h3>
        <form method="post" className="form-login">
          <div className="item-login">
            <input className="input" type="text" placeholder="Name" />
          </div>
          <div className="item-login">
            <input className="input" type="email" placeholder="Email" />
          </div>
          <div className="item-login">
            <input className="input" type="text" placeholder="Username" />
          </div>
          <div className="item-login">
            <input className="input" type="password" placeholder="Password" />{" "}
          </div>
          <span className="remember">
            {" "}
            <a href="#">Forgot Password?</a>{" "}
          </span>
          <div className="item submit">
            <button type="submit">Submit</button>
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
          Don't have an Account? <Link to="/userlogin">Sign Up</Link>
        </span>
      </div>
    </div>
  );
}

export default Signup;
