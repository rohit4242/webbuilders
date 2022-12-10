import React, { useState, useRef } from "react";
// import BlogsMessage from "../EmailJs/BlogsMessage";
import emailjs from "@emailjs/browser";
import "./model.css";

const Card = (props) => {
  const [modal, setModal] = useState(false);
  var [MessageText, setMessageText] = useState("");

  const toggleModal = () => {
    setModal(!modal);
    console.log("ok");
  };

  const first_name = useRef(),
    last_name = useRef(),
    user_email = useRef(),
    user_message = useRef(),
    form = useRef();

  function sendEmail(e) {
    e.preventDefault();
    if (
      first_name.current.value === "" ||
      user_email.current.value === "" ||
      user_message.current.value === ""
    ) {
      setMessageText("Please Fill The All Fields");
      setTimeout(() => {
        setMessageText(" ");
      }, 5000);
      return 0;
    } else {
      emailjs
        .send(
          "service_a16u8n2",
          "template_3dbyz9h",
          {
            first_name: first_name.current.value,
            last_name: last_name.current.value,
            user_email: user_email.current.value,
            user_message: user_message.current.value,
            blog_title: props.title_one,
          },
          "iUdMuBNRGw3avQhjn"
        )
        .then(
          (result) => {
            first_name.current.value = "";
            last_name.current.value = "";
            user_email.current.value = "";
            user_message.current.value = "";

            setMessageText("email has been sent successfully");
            setTimeout(() => {
              setMessageText(" ");
            }, 5000);
            console.log(result.text);
          },
          (error) => {
            first_name.current.value = "";
            last_name.current.value = "";
            user_email.current.value = "";
            user_message.current.value = "";

            setMessageText("email has been not sent");
            setTimeout(() => {
              setMessageText(" ");
            }, 5000);
            console.log(error.text);
          }
        );
    }
  }

  return (
    <>
      <div className="p-4 md:w-2/5 mb-8 mx-4 hover:scale-105 duration-500">
        <div className="h-full w-full rounded-lg border-none bg-slate-400/20 dark:bg-slate-800/95 overflow-hidden ">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center cursor-pointer	"
            src={props.image}
            alt="blog"
            onClick={toggleModal}
          />
          <div className="p-6  dark:bg-inherit">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-800 dark:text-gray-400 mb-1">
              {props.date}
            </h2>
            <h1
              className="title-font text-lg font-medium text-gray-800 dark:text-gray-300 mb-3 cursor-pointer	"
              onClick={toggleModal}
            >
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
              <span className="text-gray-800 dark:text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
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
              <span className="text-gray-800 dark:text-gray-400 inline-flex items-center leading-none text-sm">
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
        <div className="modal modal-blog">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="modal-img left xl:ml-10">
              <img src={props.image} alt="" className=" rounded-2xl hover:scale-105 duration-500" />
            </div>
            <div className="modal-text right leading-8 dark:text-slate-100">
              <span>{props.date}</span>
              <h1>{props.title_one}</h1>
              <p>{props.desc_one}</p>

              <h1>{props.title_two}</h1>
              <p>{props.desc_two}</p>

              <h1>{props.title_three}</h1>
              <p>{props.desc_three}</p>

              <button className="close-modal btn_shadow" onClick={toggleModal}>
              <i class="ri-close-fill"></i>
              </button>

              {/*---------Leave Message----------  */}
              <div className="flex justify-center items-center">
                <form
                  className="w-full max-w-lg mt-14"
                  id="blogsMessages"
                  onSubmit={sendEmail}
                  ref={form}
                >
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-first-name"
                      >
                        First Name
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder="First Name"
                        name="first_name"
                        ref={first_name}
                      />
                      <p className="text-red-500 text-xs italic">
                        Please fill out this field.
                      </p>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-last-name"
                      >
                        Last Name
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name"
                        type="text"
                        placeholder="Last Name"
                        name="last_name"
                        ref={last_name}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                        type="email"
                      >
                        E-mail
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="email"
                        type="email"
                        placeholder="Enter Email"
                        name="user_email"
                        ref={user_email}
                      />
                      {/* <p className="text-gray-600 text-xs italic">
                        Some tips - as long as needed
                      </p> */}
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Message
                      </label>
                      <textarea
                        className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                        id="message"
                        name="user_message"
                        ref={user_message}
                      ></textarea>
                      <p className="text-teal-500 text-xs italic">
                        {MessageText}
                      </p>
                    </div>
                  </div>
                  <div className="md:flex md:items-center">
                    <div className="md:w-1/3">
                      <button
                        className="btn_shadow"
                        type="submit"
                      >
                        Send
                      </button>
                    </div>
                    <div className="md:w-2/3"></div>
                  </div>
                </form>
              </div>
              
              {/*---------Leave Message----------  */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
