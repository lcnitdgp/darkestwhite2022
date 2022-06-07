import '../App.css';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


function Card(props){
    return (
      <div className="container-card"> 
        <Link to="/blog" style={ {color: "inherit", textDecoration: "inherit" }} >
        <img
          className="img-card"
          src={require(`../${props.item.Image}`)}
          alt={"Carlie Anglemire"}
        />
        </Link>
        <div className="card-content">
          <h5 className="date">{props.item.date}</h5>
          <h2 className="blog-title">{props.item.title}</h2>
          <hr className="blog-line"></hr>

          <div className="childcontent">
            <div>
              <h6 className="blog-type">{props.item.type}</h6>
            </div>
            <div>
              <img
                className="blog-icon"
                src={require(`../${props.item.icon}`)}
                alt={"icon"}
              />
            </div>
            <div>
              {" "}
              <h6 className="blog-comment">{props.item.Comment}</h6>
            </div>
          </div>
        </div>
        
      </div>
    );
}

export default Card;