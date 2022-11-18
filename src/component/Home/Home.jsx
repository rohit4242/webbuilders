import React from "react";
import { Typewriter } from "react-simple-typewriter";
// import { Link } from "react-router-dom";
import "./Home.css";
import ScrollToTop from "react-scroll-to-top";

function Home() {
  return (
    <>
      <ScrollToTop smooth top="20" />

      <div
        className="section flex flex-col md:flex-row justify-center items-center mt-8 ml-2 mr-2 z-10"
        id="home"
      >
        <div className="text-center md:text-start sm:w-4/5 z-20">
          <h3 className="font-Poppins text-xl text-teal-600 pb-4">
            WELCOME TO DIGITAL AGE
          </h3>
          <h1 className="font-Poppins text-6xl font-thin pb-4 text-gray-800 dark:text-gray-300">
            Hi,
            <br /> <span className="text-6xl">We Are</span>
          </h1>
          <h2 className="text-teal-500 text-6xl font-Poppins h-[100px]">
            <span className="">
              <Typewriter
                words={[
                  " Developers.",
                  " Web Designers.",
                  " Graphic Designers.",
                  " Content Writers.",
                  " UI/UX Designers.",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
          <p className="font-Poppins pt-6 xl:w-10/12">
            With over 15+ Projects, We have expertise in ecommerce, portfolio,
            bussness site for small and large bussnesses. Which gives infinite
            flexibility and options. So, What Are You Waiting For? ...
          </p>

          <a
            href="#Contact"
            className="relative  items-center justify-start inline-block px-9 py-3 overflow-hidden font-bold rounded-full group w-48 mt-5 mb-5"
          >
            <span className="w-48 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-teal-500	 opacity-100 group-hover:-translate-x-1"></span>
            <span className="relative w-full text-left text-teal-500 transition-colors duration-200 ease-in-out group-hover:text-white">
              Contact Us
            </span>
            <span className="absolute inset-0 border-2 border-teal-500	 rounded-full"></span>
          </a>
          <div className="font-Poppins">
            <h4>FIND US ON</h4>
            <div className="button flex space-x-3 mt-5 text-3xl justify-center md:justify-start">
              <a href="https://github.com/rohit4242" className="text-teal-500">
                <i className="ri-github-fill"></i>
              </a>
              <a
                href="https://in.linkedin.com/in/ranchhod-aal-820439177"
                className="text-teal-500"
              >
                <i className="ri-linkedin-box-fill"></i>
              </a>
              <a href="https://dribbble.com/" className="text-teal-500">
                <i className="ri-dribbble-line"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="my-10">
          <div class="face">
            <div class="eyes">
              <div class="eye"></div>
              <div class="eye"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
