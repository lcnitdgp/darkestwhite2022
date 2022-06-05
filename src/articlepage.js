import Article from "./components/article";
import Comment from "./components/comment";
import ScrollArrow from "./components/scrollbutton";

function Articlepage() {
  return (
    <div>
       <Article />
      <Comment />  
      <ScrollArrow />
    </div>
  );
}

export default Articlepage;