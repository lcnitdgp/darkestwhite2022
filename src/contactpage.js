import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Contact from "../src/components/contact"
import { RingLoader } from "react-spinners";


export default function Contactpage() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div className="ring-style">
          <RingLoader loading={loading} size={150} />
        </div>
      ) : (
        <Contact />
      )}
    </div>
  );
}