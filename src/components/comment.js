import "../App.css";
import Commentcard from "./Commentcard";
import {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

export default function Comment(){

  const params = useParams();
  console.log(params);
  const [post, setPost] = useState([{}]);

  function getPosts() {
    axios
      .get(`https://darkestwhitebackend.lcnitd.co.in/blog/${params.id}/comments`)
      .then((response) => response.data)
      .then((data) => {
        setPost(data);
        console.log(data);
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