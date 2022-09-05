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
   const [likes, setLikes] = useState(); 
  
  
    
   

    


  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(`https://darkestwhitebackend.lcnitd.co.in/blog/publishblog/${params.id}`, {
    
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
     .get(`https://darkestwhitebackend.lcnitd.co.in/blog/${params.id}`)
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
   
 axios
   .get(`https://darkestwhitebackend.lcnitd.co.in/blog/${params.id}`)
   .then((response) => response.data)
   .then((data) => {
   
     console.log(data.likedBy);
     if (data.likedBy.includes(uid)) setIsLiked(true);
     else setIsLiked(false);
   
     //console.log(isLiked);
    
    
   });
     
   if (!token) toast("You're not Logged In to perform this action"); 
     
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
        
         console.log("sent id");
         setLikes(res.data.likes);
         console.log(res.data.likes);
        
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

                {!likes>=0?post.likes+ " likes":
                isLiked==true
                  ? likes == 1
                    ? "1 Like "
                    : likes + " Likes "
                  : likes == 0
                  ? "1 Like "
                  : likes + " Likes "}


                {isLiked==false ? <FaHeart /> : <FaRegHeart />}
              
              </Button>
              <ToastContainer/>
            </span>
          </article>
        </blog-article>
      </div>
    );
}
