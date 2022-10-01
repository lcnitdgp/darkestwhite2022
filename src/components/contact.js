import "../App.css";
import { FaInstagram, FaFacebook, FaGlobe } from "react-icons/fa";
import NavbarNew from "./navbar";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Footer from "./footer";
import ScrollArrow from "./scrollbutton";
import { useState } from "react";
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";

function Contact() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  }
  // const handleChange = (e) => {
  //   if (!isValidEmail(e.target.value)) {
  //     toast.error("Please input a valid email.");
  //     return;
  //   }
  //   else {
  //     setEmail(e.target.value);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(name && email && message){
      if (!isValidEmail(e.target.value)) {
        toast.error("Please input a valid email.");
        return;
      }
      await axios
      .post(`https://darkestwhitebackend.lcnitd.co.in/message`, {
        name: name,
        email: email,
        message:message,
      })
      .then((res) => {
        console.log(res);
        // console.log("submit");
        toast.success("Submitted, thank you!");
      })

      .catch((err) => console.log(err));
    }
    else{
      toast.error("Please fill out all fields.");
    }
  };

  let newDate = new Date();
  let date = newDate.getDate();
  let year = newDate.getFullYear();
  let monthNumber = new Date().getMonth();
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let monthName = monthNames[monthNumber];
  return (
    <div>
      <NavbarNew />
      <div className="contact-hero">
        <div>
          <h1 className="contact-header"> Meet Our Team</h1>
          <hr style={{ color: "white" }} className="contact-line" />
          <img
            className="team"
            src={require("../contact.JPG")}
            alt={"Carlie Anglemire"}
          />
          <hr style={{ color: "white" }} className="contact-line" />
          <p className="intro">
            Literary Circle is the club in NIT Durgapur, which gives the college
            an extra dimension of creative expression in the midst of technical
            unilateralism and gives the students of the college an opportunity
            to transcend the ordinary and mundane.
            <br />
            To know more about us, visit:
            <br />
            <br />
            <Row>
              <Col>
                <a
                  href="https://www.facebook.com/lcnitdgp"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  <FaFacebook />
                </a>
              </Col>
              <Col>
                <a
                  href="https://www.instagram.com/lcnitd/"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  <FaInstagram />
                </a>
              </Col>
              <Col>
                <a
                  href="https://lcnitd.co.in/"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  <FaGlobe />
                </a>
              </Col>
            </Row>
          </p>
          <hr style={{ color: "white" }} className="contact-line" />
        </div>
        <div>
        <form>
          <Container style={{ backgroundColor: "black" }}>
            <Row>
              <Col lg={6}>
                <h4 className="date" style={{ paddingLeft: "2rem" }}>
                  {date} {monthName} {year}
                </h4>
                <h1 className="message">Send us a message</h1>
                <form style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>
                  <textArea
                    className="textarea"
                    placeholder="Type Your Message Here.."
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    value={message}
                    required
                  ></textArea>
                  <Col className="form-area">
                    <input
                      type="email"
                      placeholder="Email"
                      style={{
                        outline: "none",
                        marginBottom: "2rem",
                        paddingLeft: "0.5rem",
                        width: "100%",
                      }}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      value={email}
                      required
                    ></input>
                    <input
                      type="text"
                      placeholder="Name"
                      style={{
                        outline: "none",
                        marginBottom: "2rem",
                        paddingLeft: "0.5rem",
                        width: "100%",
                      }}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      value={name}
                      required
                    ></input>
                  </Col>
                  <Button
                    variant="outline-light"
                    style={{
                      borderRadius: "0%",
                      width: "100%",
                      marginBottom: "2rem",
                      padding: "0.5em 1em 0.5em 1em",
                      background: "#dfdccf",
                      borderColor: "#dfdccf",
                      color: "black"
                    }}
                    onClick={handleSubmit}
                  >
                    SUBMIT
                  </Button>{" "}
                  <ToastContainer />
                </form>
              </Col>
              <Col lg={6}>
                <img
                  className="book"
                  src={require("../Contact-page2-png.png")}
                  alt={"book"}
                />
              </Col>
            </Row>
          </Container>
          </form>
        </div>
      
      </div>
      <Footer />
      <ScrollArrow />
    </div>
  );
}

export default Contact;
