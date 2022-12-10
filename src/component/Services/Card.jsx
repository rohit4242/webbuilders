import React from "react";

const Card = (props) => {
  return (
    <>
       <div class="p-4 lg:w-1/2 md:w-full hover:scale-105 duration-500">
        <div class="flex border-2 rounded-lg border-none backdrop-blur-md bg-slate-800/20  dark:bg-slate-200/10 border-opacity-50 p-8 sm:flex-row flex-col ">
          <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-8 h-8" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div class="flex-grow ">
            <h2 class="text-gray-800 dark:text-gray-300 text-lg title-font font-medium mb-3">{props.title}</h2>
            <p class="leading-relaxed text-base text-gray-500 dark:text-gray-400">{props.desc}</p>
            <a class="mt-3 text-indigo-400 inline-flex items-center" href="/">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
    </div>
    </>
  );
};

export default Card;
