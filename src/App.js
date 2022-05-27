import "./App.css";
import { useState,useEffect} from "react";
import Landing from "./landingpage";

import { RingLoader } from "react-spinners";



function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const style = { position: "fixed", top: "50%", right: "50%",
  

};

  return (
    <div className="App">
      {
        loading ?
        <div style={style}> 
         <RingLoader loading={loading} size={150} />
         </div>
        :
        <Landing/>
      }
    
    </div>
  );
}

export default App;
