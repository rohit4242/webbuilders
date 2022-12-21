import React from "react";
import data from "./Services-Api";
import Card from "./Card";
// import { useEffect } from "react";

const Services = () => {
  // useEffect((e) => {
  //   var path = document.getElementById('iconPath');
  //   var length = path.getTotalLength();

  //   path.style.strokeDasharray = length;
  //   path.style.strokeDashoffset = length;

  //   const draWhenScroll = () =>{
  //     const draw = length * calcScrollPercent();
  //     path.style.strokeDashoffset = length - draw;
  //   }

  //   const calcScrollPercent = () => {
  //     let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  //     return document.documentElement.scrollTop / height;
  //   }

  //   window.addEventListener('scroll', draWhenScroll);
   
  // });
  return (
    <>
      <section
        className="relative top-0 left-0 body-font"
        id="services"
      >
        <div className="font-Poppins text-teal-500 py-8">
          <h1 className="text-center font-Poppins text-teal-500 text-3xl font-thin">
            Services
          </h1>
        </div>
        <div className="container px-5 py-10 mx-auto">
          {/* grid grid-cols-3 gap-9 */}
          <div className="flex flex-wrap gap-5 justify-center">
            {data.map((val, index) => {
              return (
                <Card
                  key={index}
                  image={val.image}
                  title={val.title}
                  desc={val.desc}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
