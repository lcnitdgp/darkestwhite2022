import "../App.js"
export default function Commentcard(props) {

    console.log(props.item);
    return (
      <div className="comment-card">
        <div className="comment-row">
          <span className="commentor">{props.item.author}</span>
          <span className="comment-date"> {props.item.createdAt?.substr(0,10) + " " + props.item.createdAt?.substr(11,5)} {props.item.createdAt?.substr(11,2) < 12 ? "AM" : "PM"}</span>
        </div>
        <p className="comment-text">{props.item.comment}</p>
      </div>
    );
}