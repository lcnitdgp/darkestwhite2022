import "../App.css";
import ScrollArrow from "./scrollbutton";
import Article from "./article";
import Comment from "./comment";
export default function Blogdisplay(){
    return(
        <blogpage>
            <Article />
           <Comment /> 
           <ScrollArrow />
        </blogpage>
    )
}