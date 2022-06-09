import React from "react";
import { useForm } from "react-hook-form";
import "../App.js";
import NavbarNew from "./navbar.js";
import ScrollArrow from "./scrollbutton.js";
import Footer from "./footer.js";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  
  Form,
  FormControl,
  Button,
  Row,
  Col,
 
} from "react-bootstrap";

export default function Create() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div>
      <NavbarNew />
      <Container className="create-hero">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row className="create-fields">
            <input
              type="text"
              placeholder="First name"
              {...register("First name", { required: true, maxLength: 80 })}
            />
          </Row>
          <Row>
            <input
              type="text"
              placeholder="Last name"
              {...register("Last name", { required: true, maxLength: 100 })}
            />
          </Row>
          <Row>
            <input
              type="text"
              placeholder="Email"
              {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
            />
          </Row>

          <Row>
            <textarea
              placeholder="write your piece here"
              {...register("Blog", {})}
            />
          </Row>

          <Row>
            <Button
              variant="outline-dark"
              style={{
                borderRadius: "0%",
                width: "60%",
                marginBottom: "2rem",
              }}
            >
              SUBMIT
            </Button>
          </Row>
        </form>
      </Container>
      <Footer />
      <ScrollArrow />
    </div>
  );
}
