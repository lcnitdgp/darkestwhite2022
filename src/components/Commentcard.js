import "../App.js"
export default function Commentcard(props) {

    console.log(props.item);
    return (
      <div className="comment-card">
        <span className="commentor">{props.item.author}</span>
        <span className="comment-date"> {props.item.createdAt}</span>
        <p className="comment-text">{props.item.comment}</p>
      </div>
    );
}