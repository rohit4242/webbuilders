import React from "react";
import styled from "styled-components";
import * as THREE from "three";
import GLOBE from "vanta/dist/vanta.globe.min.js";

class App extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }

  componentDidMount() {
    this.vantaEffect = GLOBE({
      el: this.vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 300,
      minWidth: 300,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor:0x040d21,
      color: 0x3ff3ff,
      color2:0x14b8a6,
    });
  }
  componentWillUnmount() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  }
  render() {
    return <div className="absolute w-full h-[63vh] md:h-[62vh]" ref={this.vantaRef}></div>;
  }
}

export default App;
