import "./App.css";
import {React, Component} from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarNew from "./components/navbar";
import ScrollArrow from "./components/scrollbutton";
import Hero from "./components/hero";
import CardHero from "./components/cardhero";
import Subscribe from "./components/subscribe";
import Footer from "./components/footer";

class Landing extends Component {
  constructor(props){
       super(props)

    this.state ={
      auth:0,
    }
  }

  loginHandler = () =>{
   this.setState({auth: !this.state.auth});
  }
 
  render(){
    return (
      <div>
        <NavbarNew login={this.loginHandler} status={this.state.auth} />
        <Hero />
        <CardHero />
        <Subscribe status={this.state.auth} />
        <Footer />
        <ScrollArrow />
      </div>
    );
  }
}

export default Landing;
