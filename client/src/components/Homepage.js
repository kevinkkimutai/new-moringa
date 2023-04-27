import React, { Component } from "react";

import TypeWriterEffect from "react-typewriter-effect";
import logo from "./logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Homepage.css";

class HomePage extends Component {
  render() {
    return (
      <div className="homepage-container mx-auto h-100">
        <div className="typewriter-container">
          <div className="typewriter">
          <TypeWriterEffect
  textStyle={{
    fontFamily: "Red Hat Display",
    color: "navy",
    fontWeight: 700,
    fontSize: "3.5em",
  }}
  startDelay={2000}
  cursorColor="#3F3D56"
  multiText={[
    "Hey there,Welcome to moringa pair...",
    " Connect with a study partner and stay organized ",
    "and productive to achieve your goals.",
    "Welcome to Moringa_Pair.",
  ]}
  multiTextDelay={1000}
  typeSpeed={30}
  eraseSpeed={30}
  eraseDelay={2000}
  eraseSeq={[false, true, true, true]}
  repeat={true}
  repeatDelay={2000}
  repeatDelayOnErasing={2000}
  repeatTimes={-1}
  onRepeat={() => console.log('Text repeated!')}
/>


          </div>
        </div>
        <div className="logo-container">
          <img src={logo} alt="moringa" className="img-fluid" />
        </div>
      </div>
    );
  }
}

export default HomePage;
