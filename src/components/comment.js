import "../App.css";
import Commentcard from "./Commentcard";

export default function Comment(){
    return(
      <div className="comment-section">
        <h4 className="cheading">Comments</h4>
        <Commentcard />
        <Commentcard />
        <Commentcard />
        <Commentcard />
      </div>
      
    )
}