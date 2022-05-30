import '../App.css';



function Card(){
    return (
      <div className="container-card">
        <img
          className="img-card"
          src={require("../Blog-single-img6-417x292.jpg")}
          alt={"Carlie Anglemire"}
        />

        <div className="card-content">
          <h5 className="date">On 12 Aug. 2020.</h5>
          <h2 className="blog-title">
            {" "}
            stream of thought in new age narratives
          </h2>
          <hr className="blog-line"></hr>
        
       
          <div className="childcontent">
              <div><h6 className="blog-type">POEM</h6></div>
            
           <div> <h6 className="blog-comment">1 COMMENT</h6></div>
          </div>
        </div>
      </div>
    );
}

export default Card;