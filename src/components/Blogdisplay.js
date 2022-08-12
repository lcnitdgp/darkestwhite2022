import "../App.css";
import ScrollArrow from "./scrollbutton";
import Article from "./article";
import Footer from "./footer";

export default function Blogdisplay(){
    return(
        <blogpage>
            <Article />
           
            <Footer />
            <ScrollArrow />
        </blogpage>
    )
}