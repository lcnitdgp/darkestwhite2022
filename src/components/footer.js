import "../App.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaInstagram, FaFacebook, FaGlobe } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container-footer">
        <h2 className="footer-title">DARKEST WHITE</h2>
        <h4 className="footer-lc">Brought to you by Literary Circle</h4>
        {/* <h4 className="footer-socials">IG. BE. FB.</h4> */}
        <div className = "footer-socials">
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
        </div>
        <h6 className="copyright">made with love by Lc ©</h6>
      </div>

      {/* <h4 className='footer-tagline'>made with love by lc</h4>
              <h4 className='footer-copyright'>copyright</h4> */}
    </footer>
  );
}

export default Footer;
