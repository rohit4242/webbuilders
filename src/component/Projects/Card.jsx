import React, { useState } from "react";
import './model.css';
const Card = (props) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <>
      <div className=" rounded-2xl dark:bg-slate-800/95 bg-gradient-to-tl from-slate-200 dark:from-slate-900 dark:to-slate-600 to-white shadow-xl p-4 md:w-2/5 mb-8 mx-4 transition-all duration-500 hover:bg-slate-400/40  hover:dark:bg-slate-900/95">
        <div className=" transition-all duration-500">
          <div className="w-full h-full p-4">
            <img
              src={props.image}
              className="rounded-xl hover:scale-105 duration-500"
              alt=""
              onClick={toggleModal}
            />
          </div>
          <div className="flex justify-between items-center px-4 pb-4 text-teal-500">
            <span onClick={toggleModal}>{props.category}</span>
            <label className=" text-slate-400 ">
              <i className="far fa-heart"></i> {props.totalLike}
            </label>
          </div>
          <div className="pl-4 py-4 hover:text-teal-500 duration-500 transition-all hover:scale-105 inline-block text-2xl font-medium tracking-wide">
            <h2 onClick={toggleModal}>{props.title}</h2>
            <a href="#popup" onClick={toggleModal} className="arrow">
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Popup box */}
      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content flex justify-center items-center transition-all duration-500'>
            <div className='m-4'>
              <img src={props.image} alt='' className=" rounded-xl hover:scale-105 duration-500" />
            </div>
            <div className='modal-text'>
              <span className="text-teal-500  ">Featured - Design</span>
              <h1 className="text-xl leading-8 ">{props.title}</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.</p>
              <p>Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!</p>
              <div className='button f_flex mtop'>
                <button className='btn_shadow'>
                  LIKE THIS <i class='far fa-thumbs-up'></i>
                </button>
                <button className='btn_shadow'>
                  VIEW PROJECT<i class='fas fa-chevron-right'></i>
                </button>
              </div>
              <button className='close-modal btn_shadow' onClick={toggleModal}>
              <i class="ri-close-fill"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
