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
        <h1 className="create-header">POST YOUR BLOG</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row className="create-fields">
            <input
              type="text"
              placeholder="Author's Name"
              {...register("Author's Name", { required: true, maxLength: 80 })}
            />
          </Row>
          <Row className="create-fields">
            <input
              type="text"
              placeholder="Title"
              {...register("Title", { required: true, maxLength: 100 })}
            />
          </Row>
          <Row className="create-fields">
            <input
              type="text"
              placeholder="Email"
              {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
            />
          </Row>

          <Row className="create-fields">
            <textarea
              rows="10"
              cols="50"
              placeholder="write your piece here"
              {...register("Blog", {})}
            />
          </Row>
          <Row className="create-fields">
            <input className="image-create"
              type="file"
              id="myFile"
              name="filename"
              placeholder="upload image"
            />
          </Row>

          <Row className="create-fields">
            <Button
              className="button-create"
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
