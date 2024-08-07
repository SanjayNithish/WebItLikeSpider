import home2 from "./home2.json";
import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import "./Hero.css";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section className="hero_section">
      <div className="container">
        <div className="hero_wrapper">
          <div className="hero_content">
            <div>
              <h2>Innovate, Integrate, Inspire</h2>
              <h2>Your Journey through </h2>
            </div>
            <div className="description">
              <div className="left">
                <h3>
                  <span className="date">Start Date</span>
                  <span>26 Jan</span>
                </h3>
                <h3>
                  <span className="date">End Date</span>
                  <span>14 Feb</span>
                </h3>
                <div className="contactno">
                  <i className="ri-phone-line"></i>
                  <p>1234567891</p>
                </div>
              </div>
              <div className="right">
                <h3>
                  <span className="date">Reg Start Date</span>
                  <span>5 Jan</span>
                </h3>
                <h3>
                  <span className="date">Reg End Date</span>
                  <span>20 Jan</span>
                </h3>
              </div>
            </div>
            <div className="hero_btn">
              <Link to="register" smooth={true} offset={-150}>
                {" "}
                <button className="primary_btn">Register Now</button>
              </Link>
            </div>
          </div>

          <div className="hero_img">
            <Lottie loop={true} animationData={home2} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
