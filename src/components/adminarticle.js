import "../App.css";
import { FaGratipay } from "react-icons/fa";
import NavbarNew from "./navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { data } from "jquery";
import { Button } from "react-bootstrap";
const user_id = "USER_ID";
const token_key = "USER_TOKEN";
export default function AdminArticle() {
  const params = useParams();

  let uid = window.localStorage.getItem(user_id);

  const getToken = () => {
    let token = window.localStorage.getItem(token_key);
    if (!!token) return token;
    return false;
  };

  let token = getToken();

  const handleLike = async (e) => {
    e.preventDefault();
    console.log(params.id);

    await axios
      .post(`http://localhost:5000/blog/like`, {
        id: params.id,
        user_id: uid,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);

        console.log("sent id");
        window.location.reload();
      })

      .catch((err) => console.log(err));
  };

  console.log(params.id);
  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(`http://localhost:5000/${params.id}`, {})
      .then((res) => {
        console.log(res);
        console.log("submit param");
        //window.location.replace = "/";
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      .catch((err) => console.log(err));
  };

  const [post, setPost] = useState([{}]);

  function getPosts() {
    axios
      .get(`http://localhost:5000/${params.id}`)
      .then((response) => response.data)
      .then((data) => {
        setPost(data);
        console.log(data);
      });
  }
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <NavbarNew />
      <blog-article>
        <blog-text>
          <p>{post.content}</p>
        </blog-text>
        <article>
          <img
            className="img-article"
            src={`${post.image}`}
            alt={"Carlie Anglemire"}
          />
          <h1> {post.title}</h1>
          <h4>
            {" "}
            Written and Edited by{post.author}, A piece close to his heart.
          </h4>
          <span className="like-but">
            {post.likes} Like{" "}
            <Button onClick={handleLike}>
              <span>
                <FaGratipay />
              </span>
            </Button>
          </span>
        </article>
        <div>
          <Button onClick={handleSubmit}>Publish</Button>
        </div>
      </blog-article>
    </div>
  );
}
