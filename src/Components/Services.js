import React from "react";
import serviceBox from "../res/sbox.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Services = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: ".left-parent",
      start:"+=500 top",
      end: "+=550 bottom",

    });
    ScrollTrigger.create({
      trigger: ".right-parent",
      start:"top top",
      end: "+=850 bottom",

    });

    var leftParent = gsap
      .timeline({
        scrollTrigger: {
          trigger: "left-parent",
          scrub: 0.5,
          scrub: true,
        },
      })
      .from(".left-parent", {
        xPercent: -60,
        ease: "none",
        duration: 0.5,
      });
    var leftParent = gsap
      .timeline({
        scrollTrigger: {
          trigger: "services-Box",
          scrub: 0.5,
          scrub: true,
        },
      })
      .from(".services-Box", {
        scale:-1.2,
        xPercent: 90,
        ease: "none",
        duration: 0.6, 
        rotation: 70 * 5,
      });
  });

  return (
    <div className="ServicesContainer">
      <div className="left-parent">
        <div className="services-box">
          <p className="ourServices-Text">
            Our <br /> Services
          </p>
        </div>

        <h2 className="weDoText">We Only Do 3 Things But We Do It Right</h2>
      </div>

      <div className="right-parent">
        <img className="services-Box" src={serviceBox} />
      </div>
    </div>
  );
};

export default Services;
