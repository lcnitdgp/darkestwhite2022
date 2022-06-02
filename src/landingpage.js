import "./App.css";

import NavbarNew from "./components/navbar";
import ScrollArrow from "./components/scrollbutton";
import Hero from "./components/hero";
import CardHero from "./components/cardhero";
import Subscribe from "./components/subscribe";
import Footer from "./components/footer";
import Article from "./components/article";

function Landing() {
 
  return (
    <div>
      <NavbarNew />
      <Hero />
      <CardHero />
      <Subscribe />
      <Footer />
      <ScrollArrow />
      <Article />
    </div>
  );
}

export default Landing;
