import "../App.css";
import { FaGratipay } from "react-icons/fa";
import NavbarNew from "./navbar";

export default function Article(){
    return(
        <div>
          <NavbarNew />
          <blog-article>
          <blog-text>
            <p>
             Italian tomato and bread soup is actually born of a time where it was the worst possible crime to let a single bit of bread go to waste, even if it’s a stale one. So traditionally, it’s made with very stale Tuscan bread, ideally left out for several days. Tuscan bread specifically is made without salt (which dates back to the 12th century when trade lines were cut off to Florence making salt super expensive!) and that meant the bread went stale rather quickly. Thus, this soup, and other delicious things like panzanella salad, was a way to turn stale bread into a dream of a dish.
             Italian tomato and bread soup is actually born of a time where it was the worst possible crime to let a single bit of bread go to waste, even if it’s a stale one. So traditionally, it’s made with very stale Tuscan bread, ideally left out for several days. Tuscan bread specifically is made without salt (which dates back to the 12th century when trade lines were cut off to Florence making salt super expensive!) and that meant the bread went stale rather quickly. Thus, this soup, and other delicious things like panzanella salad, was a way to turn stale bread into a dream of a dish.
            </p>
          </blog-text>
          <article>
            <img
             className="img-article"
             src={require("../Blog-single-img6-417x292.jpg")}
             alt={"Carlie Anglemire"} 
            />
            <h1> Roses and Moses</h1>
            <h4> Written and Edited by Mark Twain, A piece close to his heart.</h4>
            <span className="like-but">Like <span>< FaGratipay /></span></span>
          </article>
        </blog-article>

        </div>
       
       

    )
}
