import "../App.css";
import Commentcard from "./Commentcard";
import {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

export default function Comment(){

  const params = useParams();

  const [post, setPost] = useState([{}]);

  function getPosts() {
    axios
      .get(`http://localhost:5000/blog/${params.id}/comments`)
      .then((response) => response.data)
      .then((data) => {
        setPost(data);
      });
  }
  useEffect(() => {
    getPosts();
  }, []);

  const comments = post.map((item) => {
    return <Commentcard key={item._id} item={item} />;
  });   
    return(
      <div className="comment-section">
        <h4 className="cheading">Comments</h4>
        {comments}
      </div>
    )
}