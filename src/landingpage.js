import "./App.css";

import NavbarNew from "./components/navbar";
import Hero from "./components/hero";
import CardHero from "./components/cardhero";
import Subscribe from "./components/subscribe";
import Footer from "./components/footer";

function Landing() {
 
  return (
    <div>
    <NavbarNew />
    <Hero/>
    <CardHero/>
    <Subscribe/>
    <Footer/>

     
    </div>
  );
}

export default Landing;
