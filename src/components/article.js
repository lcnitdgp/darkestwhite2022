import "../App.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import NavbarNew from "./navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import {useState, useEffect} from 'react';
import { data } from "jquery";
import {Button} from 'react-bootstrap';

const user_id = "USER_ID";

export default function Article(){

   const params = useParams();

   const [isLiked,setIsLiked] = useState(false);
  
    
     let uid = window.localStorage.getItem(user_id);

   
 
    


  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(`http://localhost:5000/blog/publishblog/${params.id}`, {
    
      })
      .then((res) => {
        console.log(res);
        console.log("submit param");
        //window.location.replace = "/";
      })

      .catch((err) => console.log(err));
  };
    
 


 const [post, setPost] = useState([{}]);
 

 function getPosts() {
   axios
     .get(`http://localhost:5000/blog/${params.id}`)
     .then((response) => response.data)
     .then((data) => {
       setPost(data);
       
       
     });

   
    
 }
 useEffect(() => {
   getPosts();
 }, []);
   const handleLike = async (e) => {
     e.preventDefault();
   

     setIsLiked((prevLiked) => !prevLiked);
     console.log(isLiked);
     console.log(post.likes);
     await axios
       .post(`http://localhost:5000/blog/like`, {
         id: params.id,
         user_id: uid,
       })
       .then((res) => {
        
         console.log("sent id");
         //window.location.reload();
       })

       .catch((err) => console.log(err));
   };
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
              Written and Edited by {post.author}, a piece close to their heart.
            </h4>
            <span className="like-but">
              <Button
                onClick={handleLike}
                style={{
                  padding: "0.5em 1em 0.5em 1em",
                  background: "red",
                  borderColor: "red",
                }}
              >
                {!isLiked
                  ? post.likes == 1
                    ? "1 Like"
                    : post.likes + " Likes "
                  : post.likes == 0
                  ? "1 Like"
                  : post.likes + " Likes "}


                {!isLiked ? <FaHeart /> : <FaRegHeart />}
              
              </Button>
            </span>
          </article>
        </blog-article>
      </div>
    );
}
