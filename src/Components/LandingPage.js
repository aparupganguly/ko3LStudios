import React from "react";
import Spline from "@splinetool/react-spline";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "../Components/Navbar";

import ShowReelDemo from "../res/showreelDemo.png";

import "../Styles/Landing.css";

const LandingPage = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: ".ShowReelContainer",
      pin: true,
      end: "+=300",
    });

    var workTextAnim = gsap
      .timeline({
        scrollTrigger: {
          trigger: "showReel",
          scrub: 0.5,
        },
      })
      .to(".showReel", {
        scale: 1.5,
        ease: "easeInOut",
        duration: 0.5,
      });
  });

  return (
    <>
      <div className="LandingContainer">
        <Navbar />

        <div className="HeroContainer">
          <p className="herotitle">Your Personal 3D Commercial Studio</p>
          <Spline
            style={{
              scale: "0.7 ",
              height: "1000px",
              position: "absolute",
              top: "-260px",
              right: "-150px",
              width:"55%",
            }}
            scene="https://prod.spline.design/EXgiWlLYnrgxbyuw/scene.splinecode"
          />
        </div>

        {/* Main Div Ends Here ↓ */}
      </div>
      <div className="ShowReelContainer">
        <img className="showReel" src={ShowReelDemo} alt="" />
      </div>
    </>
  );
};

export default LandingPage;
