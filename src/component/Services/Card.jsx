import React from "react";
import { Parallax } from "react-scroll-parallax";

const Card = (props) => {
  return (
    <Parallax translateX={["-1500px", "1200px"]} speed={2} scale={[0.9, 2, 'easeInQuad']}>
      <div className="btn_shadow duration-500 transition-all max-w-[500px]">
        <div className="py-4 leading-7">
          <i class={props.image}></i>
          <h2>{props.title}</h2>
          <p>{props.desc}</p>
        </div>
        <div className="">
          <i class="ri-arrow-right-line text-3xl hover:text-white "></i>
        </div>
      </div>
    </Parallax>
  );
};

export default Card;
