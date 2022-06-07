import "../App.css";
import { Link } from "react-router-dom";

import Article from "./article";
import Comment from "./comment";
export default function Blogdisplay(){
    return(
        <blogpage>
            <Article />
           <Comment /> 
        </blogpage>
    )
}