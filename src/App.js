import React from "react";
import LandingPage from "./Components/LandingPage";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

const App = () => {
  return (
    <ReactLenis root>
      <div>
        <LandingPage />
        <div
          style={{
            fontSize: "30px",
            fontFamily: "Noir",
            color: "black",
            marginTop: "200px",
          }}
        ></div>
      </div>
    </ReactLenis>
  );
};

export default App;
