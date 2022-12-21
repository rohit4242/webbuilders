import React from "react";

const Card = (props) => {

  return (
    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-teal-400 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-teal-400">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
      {props.title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {props.desc}
      </p>
    </div>
  );
};

export default Card;
