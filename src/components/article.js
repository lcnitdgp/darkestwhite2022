import "../App.css";
import { FaGratipay } from "react-icons/fa";
import NavbarNew from "./navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import {useState, useEffect} from 'react';
import { data } from "jquery";

export default function Article(){
  

 const params = useParams();
 console.log(params.id);

 const [post, setPost] = useState([{}]);

 function getPosts() {
   axios
     .get(`http://localhost:5000/blog/${params.id}`)
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
              Like{" "}
              <span>
                <FaGratipay />
              </span>
            </span>
          </article>
        </blog-article>
      </div>
    );
}
