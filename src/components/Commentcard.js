import "../App.js"
export default function Commentcard(props) {
  console.log(props.item);

  const dateToTime = date => date.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric'
  });

    const a = props.item.createdAt;
    const localDate = new Date(a);
    const commenttime = dateToTime(localDate);
    return (
      <div className="comment-card">
        <div className="comment-row">
          <span className="commentor">{props.item.author? props.item.author : "Anonymous"}</span>
          <span className="comment-date"> {props.item.createdAt?.substr(0,10) + " " + commenttime}</span>
        </div>
        <p className="comment-text">{props.item.comment}</p>
      </div>
    );
}