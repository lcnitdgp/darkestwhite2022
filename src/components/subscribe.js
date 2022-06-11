import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Form,
  FormControl,
  Button,
  Row,
  Col,
} from "react-bootstrap";


function Subscribe() {
  return (
    <div className="subscribe">
      <h1 className="sub-heading">Subscribe to our Newsletter</h1>
      <h4 className="sub-text">
        Sed ut perspiciatis unde omnis iste natus error sit volu accusa ntium
        doloremque laudantium, ut perspiciatis utota.
      </h4>
      <Button
        className="button-create"
        variant="outline-dark"
        style={{
          borderRadius: "0%",
          width: "40%",
          marginBottom: "2rem",
           
        }}
      >
      SUBSCRIBE
      </Button>
    </div>
  );
}

export default Subscribe;