import "../App.css";
import ScrollArrow from "./scrollbutton";

import Footer from "./footer";

import AdminArticle from "./adminarticle";

export default function Blogdisplay() {
  return (
    <blogpage>
      <AdminArticle />
      
      <Footer />
      <ScrollArrow />
    </blogpage>
  );
}
