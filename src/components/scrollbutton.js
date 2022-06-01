import { FaAngleDoubleUp } from "react-icons/fa";
import { useState } from "react";
import "../App.css";

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 500) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 500) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <FaAngleDoubleUp
      className="scrollTop"
      onClick={scrollTop}
      style={{
        
        display: showScroll ? "flex" : "none",
        color: "#bfa058"
      }}
    />
  );
};

export default ScrollArrow;
