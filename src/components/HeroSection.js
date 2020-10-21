import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/FT4K.mp4' autoPlay loop muted /> */}
      <h1>Food Truck TrackR</h1>
      <p>Track the best food trucks in your area!</p>
      <div className='hero-btns'>
        <Button
          className='btn'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          FIND GRUB!
        </Button>
        <Button
          className='btn'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GOT A TRUCK?
        </Button>
      </div>
    </div>
  );
  }

export default HeroSection;
