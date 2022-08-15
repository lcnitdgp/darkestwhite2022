import "../App.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const user_id = "USER_ID";
function CommentForm() {
  const [comment, setComment] = useState("");
   const params = useParams();

  let uid = window.localStorage.getItem(user_id);
  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(`https://darkestwhitebackend.lcnitd.co.in/blog/${params.id}/comments`, {
        
        user_id: uid,
        comment: comment,
      })
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
            <input
              className="input"
              type="text"
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
          </div>
        </form>
      
    </div>
  );
}

export default CommentForm;
