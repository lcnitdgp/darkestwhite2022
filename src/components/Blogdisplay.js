import "../App.css";
import ScrollArrow from "./scrollbutton";
import Article from "./article";
import Comment from "./comment";
import Footer from "./footer";

export default function Blogdisplay(){
    return(
        <blogpage>
            <Article />
            <Comment />
            <Footer />
            <ScrollArrow />
        </blogpage>
    )
}