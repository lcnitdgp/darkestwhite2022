import "../App.css";
import ScrollArrow from "./scrollbutton";
import Article from "./article";
import Footer from "./footer";
import Comment from "./comment";
import CommentForm from "./commentform";

export default function Blogdisplay(){
    return (
      <blogpage>
        <Article />
        <Comment />
        <CommentForm />

        <Footer />
        <ScrollArrow />
      </blogpage>
    );
}