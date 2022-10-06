import '../App.css';
import ReactTypingEffectDemo from './typing';


// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// function Hero() {
//   return (
//      <div className='hero'>
//          <img className="profile-photo" src={require("../main-home-rev-1.jpg")} alt={"Darkest White"}/>
//      </div>
//   );
// }

// export default Hero;


function Hero(){
    return(
        <div className="hero">
              <img className="profile-photo" src={require("../main-home-rev-1.jpg")} alt={"Darkest White"}/>
              <ReactTypingEffectDemo/>
             
              
              <p className='hero-tagline'>Share with us the story of your Puja- Unabridged, Unbound and Unparalleled.</p>

        </div>
    )
}

export default Hero;