import React from "react";
import Card from "./Card";
import TestimonialApi from './testimonialApi';
const Testimonial = () => {
  return (
    <>
      <section className="font-Poppins mb-32">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <h2 className="text-center text-teal-500 text-4xl font-bold tracking-tight sm:text-5xl">
            Read trusted reviews from our customers
          </h2>

          <div className="swiper-container mt-12 !overflow-hidden">
            <div className="swiper-wrapper">
              {TestimonialApi.map((value,index) =>{
                return <Card key={index} name={value.title} desc={value.desc}/>
              })}

            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
