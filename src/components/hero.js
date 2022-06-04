import '../App.css';
import ReactTypingEffectDemo from './typing';


// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// function Hero() {
//   return (
//      <div className='hero'>
//          <img className="profile-photo" src={require("../main-home-rev-1.jpg")} alt={"Carlie Anglemire"}/>
//      </div>
//   );
// }

// export default Hero;


function Hero(){
    return(
        <div className="hero">
              <img className="profile-photo" src={require("../main-home-rev-1.jpg")} alt={"Carlie Anglemire"}/>
              <ReactTypingEffectDemo/>

        </div>
    )
}

export default Hero;