import "../App.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  toast("You need to LogIn to perform this action.")
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
        //window.location.replace = "/";
      })

      .catch((err) => console.log(err));
  };

  return (
    <div className="comment-section">
      <form className="form-login">
        <div className="item-login">
          <textarea
            className="input"
            placeholder="Leave a comment.."
            onChange={(e) => {
              setComment(e.target.value);
            }}
            value={comment}
          />
        </div>

        <div className="item submit">
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
          <ToastContainer/>
        </div>
      </form>
    </div>
  );
}

export default CommentForm;
