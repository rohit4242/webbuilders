import React from "react";

const Card = (props) => {
  return (
    <div  className="btn_shadow duration-500 transition-all">
      <div className="py-4 leading-7">
        <i class={props.image}></i>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </div>
      <div className="">
      <i class="ri-arrow-right-line text-3xl hover:text-white "></i>
      </div>
    </div>
  );
};

export default Card;
