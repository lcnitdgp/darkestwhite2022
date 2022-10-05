import "../App.css";
import { useState } from 'react';
import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from 'react-bootstrap';
import axios from 'axios';



function AdminCard(props) {

  // const params = useParams(); 
  // console.log(params);
  // console.log(props);
  // const uid = localStorage.getItem("USER_ID");
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   await axios
  //     .post(`https://darkestwhitebackend.lcnitd.co.in/blog/publishblog/${props.item._id}`, {
    
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     })

  //     .catch((err) => console.log(err));
  // };
  
  // const[isHovering, setIsHovering] = useState(false);
  
  // const handleMouseEnter = () => {
  //   setIsHovering(true);
  // };
  
  // const handleMouseLeave = () => {
  //   setIsHovering(false);
  // };

  return (
    <div className="container-card">
      <Link
        to={{ pathname: `/darkestwhite_blogadmin/${props.item._id}` }}
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <img
          className="img-card"
          src={`${props.item.image}`}
          alt={"Darkest White"}
        />
      </Link>
      <div className="card-content">
        <h5 className="date">{props.item.createdAt}</h5>
        <h2 className="blog-title">{props.item.title}</h2>
        <hr className="blog-line"></hr>

        <div className="childcontent">
          <div>
            <h6 className="blog-type">{props.item.type_of_post}</h6>
          </div>
          {/* <Button
            className="button-subscribe"
            variant="outline-dark"
            style={{
              borderRadius: "0%",
              width: "max-content",
              marginBottom: "2rem",
              marginTop: "1rem",
              backgroundColor: isHovering? "" : "#3a2d2d",
              color: isHovering? "#dfdccf" : "#fff", 
              fontFamily: "inherit",
            }}
            onClick={handleSubmit}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {"Publish"}
          </Button> */}
            {/* <div>
              <img
                className="blog-icon"
                src={require(`../${props.item.icon}`)}
                alt={"icon"}
              />
            </div> */}
          {/* <div>
            {" "}
            <h6 className="blog-comment">{props.item.comment + " comments"}</h6>
          </div> */}
          
        </div>
      </div>
    </div>
  );
}

export default AdminCard;
