import "../App.css";
import { FaInstagram, FaFacebook, FaGlobe } from "react-icons/fa";
import NavbarNew from "./navbar";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./footer";
import ScrollArrow from "./scrollbutton";

function Contact(){
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
              Literary Circle is the club in NIT Durgapur, which gives the
              college an extra dimension of creative expression in the midst of
              technical unilateralism and gives the students of the college an
              opportunity to transcend the ordinary and mundane.
              <br />
              To know more about us, visit:
              <br />
              <br />
              <Row>
                <Col>
                  <FaFacebook />
                </Col>
                <Col>
                  <FaInstagram />
                </Col>
                <Col>
                  <FaGlobe />
                </Col>
              </Row>
            </p>
            <hr style={{ color: "white" }} className="contact-line" />
          </div>
          <div>
            <Container style={{ backgroundColor: "black" }}>
              <Row>
                <Col lg={6}>
                  <h4 className="date" style={{ paddingLeft: "2rem" }}>
                    20. June 2020
                  </h4>
                  <h1 className="message">Send us a message</h1>
                  <form style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>
                    <input type="textArea" className="textarea"></input>
                    <Col className="form-area">
                      <input
                        type="email"
                        placeholder="Email"
                        style={{ marginBottom: "2rem", width: "100%" }}
                      ></input>
                      <input
                        type="text"
                        placeholder="Name"
                        style={{ marginBottom: "2rem", width: "100%" }}
                      ></input>
                    </Col>
                    <Button
                      variant="outline-light"
                      style={{
                        borderRadius: "0%",
                        width: "60%",
                        marginBottom: "2rem",
                      }}
                    >
                      SUBMIT
                    </Button>{" "}
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
          </div>
        </div>
        <Footer />
        <ScrollArrow />
      </div>
    );
}

export default Contact;