import '../App.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Hero() {
  return (
     <div>
         <img className="profile-photo" src={require("../main-home-rev-1.jpg")} alt={"Carlie Anglemire"}/>
     </div>
  );
}

export default Hero;