import React, { useState } from "react";

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
        <div className="btn_shadow p-4 md:w-2/5 mb-8 mx-4 hover:scale-105 ">
            <div className="w-full h-full rounded-md duration-100">
                <img src={props.image} alt='' onClick={toggleModal} />
            </div>
            <div className="flex justify-between my-4">
                <span onClick={toggleModal}>{props.category}</span>
                <label>
                    <i className="far fa-heart"></i> {props.totalLike}
                </label>
            </div>
            <div>
                <h2 onClick={toggleModal}>{props.title}</h2>
                <a href='#popup' onClick={toggleModal} className='arrow'>
                    <i className="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    </>
  );
};

export default Card;
