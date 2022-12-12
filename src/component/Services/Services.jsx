import React from "react";
import data from "./Services-Api";
import Card from "./Card";
const Services = () => {
  return (
    <>
      <section class="text-gray-600 body-font max-w-screen-xl mx-auto overflow-hidden" id="services">
        <div className="font-Poppins text-teal-500 py-8">
          <h1 className="text-center font-Poppins text-teal-500 text-3xl font-thin">Services</h1>
        </div>
        <div class="container px-5 py-10 mx-auto">
          <div class="grid grid-cols-3 gap-9">
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
