import "../App.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container, Row, Col, Button } from "react-bootstrap";

const user_id = "USER_ID";
const token_key = "USER_TOKEN";


function CommentForm() {
  const [comment, setComment] = useState("");
  const params = useParams();

  let uid = window.localStorage.getItem(user_id);
  const getToken = () => {
    let token = window.localStorage.getItem(token_key);
    if (!!token) return token;
    return false;
  };

  let token = getToken();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(token);
  if(!token)
    toast.error("You need to LogIn to perform this action.")
  if(token){
    console.log('check1')
    await axios
      .post(
        `https://darkestwhitebackend.lcnitd.co.in/blog/${params.id}/comments`,
        { user_id: uid, comment: comment },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        console.log("submit comment");
        window.location = `/blog/${params.id}`;
      })

      .catch((err) => console.log(err));
    }
  };

  return (
    <div className="comment-section" style={{marginTop: "0",}}>
      <form className="form-login">
        <div className="item-login">
          <textarea
            className="input"
            placeholder="Leave a comment.."
            onChange={(e) => {
              setComment(e.target.value);
            }}
            value={comment}
            style={{
              fontSize: "2.3vh",
              resize: "none",
            }}
          />
        </div>

        <div className="item submit">
        <Button
          variant="outline-light"
          style={{
              borderRadius: "0%",
              width: "10%",
              minWidth: "min-content",
              marginBottom: "2rem",
              borderRadius: "0.3rem",
              padding: "0.5em 1em 0.5em 1em",
              background: "#dfdccf",
              borderColor: "#dfdccf",
              color: "black"
          }}
          onClick={handleSubmit}
        >
        SUBMIT
        </Button>
          {/* <button type="submit" onClick={handleSubmit}>
            Submit
          </button> */}
        </div>
      </form>
    </div>
  );
}

export default CommentForm;
