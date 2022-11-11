import React, { useState } from "react";

const Card = (props) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
    console.log("ok");
  };

  return (
    <>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center cursor-pointer	"
            src="https://dummyimage.com/720x400"
            alt="blog"
            onClick={toggleModal}
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              {props.date}
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-100 mb-3 cursor-pointer	"  onClick={toggleModal}>
              {props.title_one}
            </h1>
            <p className="leading-relaxed mb-3">{props.title_two}</p>
            <div className="flex items-center flex-wrap ">
              <a
                href="#Popup"
                className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer"
                onClick={toggleModal}
                data-modal-toggle="medium-modal"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
                6
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Popup box */}
      {modal && (
       <div
       class="modal fade fixed top-0 mx-8 mt-8 max-w-screen-lg h-[800px] xl:mx-32 2xl:mx-56 outline-none overflow-x-hidden overflow-y-auto z-50"
       role="dialog"
     >
       <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable relative w-auto pointer-events-none">
         <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
           <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
             <h5 class="text-xl font-medium leading-normal text-gray-800">
               {props.title_one}
             </h5>
             <button
               type="button"
               class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
               aria-label="Close"
             ></button>
           </div>
           <div class="modal-body relative p-4">
             <div>
                 <img src="https://dummyimage.com/720x400" alt="" />
             </div>
             <span>{props.date}</span>
             <h1 className="text-gray-900 py-4">{props.title_one}</h1>
             <p>{props.desc_one}</p>

             <h1 className="text-gray-900 py-4">{props.title_two}</h1>
             <p>{props.desc_two}</p>

             <h1 className="text-gray-900 py-4">{props.title_three}</h1>
             <p>{props.desc_three}</p>

             <p>Just like that. </p>
           </div>
           <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
             <button
               type="button"
               class="inline-block cursor-pointer px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
               onClick={toggleModal}
             >
               Close
             </button>
             <button
               type="button"
               class="inline-block cursor-pointer px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
               onClick={toggleModal}
             >
               Save changes
             </button>
           </div>
         </div>
       </div>
     </div>
      )}
    </>
  );
};

export default Card;
