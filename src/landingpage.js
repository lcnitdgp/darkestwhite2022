import "./App.css";
import {React} from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarNew from "./components/navbar";
import ScrollArrow from "./components/scrollbutton";
import Hero from "./components/hero";
import CardHero from "./components/cardhero";
import Subscribe from "./components/subscribe";
import Footer from "./components/footer";

function Landing () {

 
  
    return (
      <div>
        <NavbarNew  />
        <Hero />
        <CardHero />
        <Subscribe  />
        <Footer />
        <ScrollArrow />
      </div>
    );
  
}

export default Landing;