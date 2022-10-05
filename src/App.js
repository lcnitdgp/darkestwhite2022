import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect} from "react";
import Landing from "./landingpage";

import { RingLoader } from "react-spinners";


export default function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
;

  return (
    <div className="App">
      {
        loading ?
        <div className="ring-style"> 
         <RingLoader loading={loading} size={150} />
         </div>
        :
        
        <Landing/>

        
      }
    </div>
  );
}


