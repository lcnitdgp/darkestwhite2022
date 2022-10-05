import "../App.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import NavbarNew from "./navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import {useState, useEffect} from 'react';
import { data } from "jquery";
import {Button} from 'react-bootstrap';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const user_id = "USER_ID";
const token_key = "USER_TOKEN";
let uid = window.localStorage.getItem(user_id);

const getToken = () => {
  let token = window.localStorage.getItem(token_key);
  if (!!token) return token;
  return false;
};

let token = getToken();

let x = 0;


export default function Article(){

  

   const params = useParams();

   
     
     
    

   const [isLiked,setIsLiked] = useState(false);
   const [likes, setLikes] = useState(0); 
  
  
    
   

    


  const handleSubmit = async (e) => {
    e.preventDefault();
           if(token)
           {
    await axios
      .post(`https://darkestwhitebackend.lcnitd.co.in/blog/publishblog/${params.id}`, {
    
      })
      .then((res) => {
        console.log(res);
        console.log("submit param");
        //window.location.replace = "/";
      })

      .catch((err) => console.log(err));
  }};
    
 


 const [post, setPost] = useState([{}]);
 

 function getPosts() {
   axios
     .get(`https://darkestwhitebackend.lcnitd.co.in/blog/${params.id}`)
     .then((response) => response.data)
     .then((data) => {
       setPost(data);
       setLikes(data.likes);
       (data.likedBy.includes(uid) && token)? setIsLiked(true) : setIsLiked(false);
     });    
 }
 useEffect(() => {
   getPosts();
 }, []);
   const handleLike = async (e) => {
     e.preventDefault();
   
 axios
   .get(`https://darkestwhitebackend.lcnitd.co.in/blog/${params.id}`)
   .then((response) => response.data)
   .then((data) => {
   
     console.log(data.likedBy);
     (data.likedBy.includes(uid) && token)? setIsLiked(true) : setIsLiked(false);
     setLikes(data.likedBy.length);
     console.log(isLiked);
   });
     
   if (!token) 
   toast.error("You need to LogIn to perform this action."); 

     if(token){
     await axios
       .post(`https://darkestwhitebackend.lcnitd.co.in/blog/like`, {
         id: params.id,
         user_id: uid,
       }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
       .then((res) => {
        console.log(res.data);
         console.log("sent id");
         (res.data.likedBy.includes(uid) && token)? setIsLiked(true) : setIsLiked(false);
         setLikes(res.data.likes);    
       })

       .catch((err) => console.log(err));
   }};
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
              alt={"Darkest White"}
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
                  background: "#dfdccf",
                  borderColor: "#dfdccf",
                  color: "black"
                }}
              >

                { likes == 1 ? likes + " Like ": likes + " Likes "}
                {isLiked==true ? <FaHeart /> : <FaRegHeart />}
              
              </Button>
              <ToastContainer/>
            </span>
          </article>
        </blog-article>
      </div>
    );
}
