import React from "react";
import data from "./data";
const About = () => {
  const about = data;
  return (
    <section className="text-gray-600 body-font max-w-screen-xl mx-auto overflow-hidden" id="about">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:h-auto shadow-2xl p-4 bg-gradient-to-tr from-[#e2e8ec] to-[#ffffff] rounded-xl">
            <img
              alt="About Me"
              className=" object-cover object-center rounded-md"
              src={about.image}
            />
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-8 lg:mt-0">
            <h2 className="text-sm title-font text-teal-500 tracking-widest pb-4 px-2">
              {about.title}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
              {about.heding}
            </h1>

            <p className="leading-relaxed ">{about.description_one}</p>
            <p className="leading-relaxed">{about.description_two}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
