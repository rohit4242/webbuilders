import React from "react";
import Header from "./component/Head/Header";
import Home from "./component/Home/Home";
import Services from "./component/Services/Services";
import About from "./component/About/About";
import Projects from "./component/Projects/Projects";
// import WhyUs from "./component/WhyUs/WhyUs";
import Testimonial from "./component/Testimonial/Testimonial";
import Blogs from "./component/Blogs/Blogs";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
import "./App.css";
import ScrollToTop from "./component/ScrollToTop/ScrollToTop";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <>
      <ParallaxProvider>

        <ScrollToTop />

        <Header />
        <Home />
        <Services />
        <About />
        <Blogs />
        <Projects />
        <Testimonial />
        <Contact />
        <Footer />
      </ParallaxProvider>

      {/* 
      
      <WhyUs />
       */}

    </>
  );
}

export default App;
