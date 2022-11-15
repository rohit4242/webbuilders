import React, { useState } from "react";
import { useEffect } from "react";
import "./header.css";

const Header = () => {
  const [Mobile, setMobile] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  console.log(darkQuery, "darkQuery");
  const options = [
    {
      icon: "ri-sun-line",
      text: "light",
    },
    {
      icon: "ri-moon-line",
      text: "dark",
    },
    {
      icon: "ri-computer-line",
      text: "system",
    },
  ];
  function onWindowMatch(){
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && darkQuery.matches)) {
      element.classList.add('dark')
    } else {
      element.classList.remove('dark')
    }
  }
  onWindowMatch();
  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem('theme','dark');
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem('theme','light');
        break;
      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
  }, [theme]);

  darkQuery.addEventListener("change", (e) => {
    if(!("theme" in localStorage)){
      if(e.matches){
        element.classList.add("dark");
      }
      else{
        element.classList.remove("dark");
      }
    }
  });
  return (
    <>
      <header className="header" id="header">
        <nav className="nav">
          <a href="#home" className="nav__logo">
            Rohit
          </a>
          <div className={Mobile ? "nav__menu show-menu" : "nav__menu"}>
            <ul className="nav__list grid">
              <li className="nav__item">
                <a href="#Home" className="nav__link active-link">
                  <i className="ri-home-5-line"></i> Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#Services" className="nav__link">
                  <i className="ri-trophy-line"></i> Services
                </a>
              </li>
              <li className="nav__item">
                <a href="#About" className="nav__link">
                  <i className="ri-book-open-line"></i> About
                </a>
              </li>
              <li className="nav__item">
                <a href="#Projects" className="nav__link">
                  <i className="ri-briefcase-line"></i> Projects
                </a>
              </li>
              <li className="nav__item">
                <a href="#WhyUs" className="nav__link">
                  <i className="ri-image-line"></i> Why Us
                </a>
              </li>
              <li className="nav__item">
                <a href="#Testimonial" className="nav__link">
                  <i className="ri-chat-3-line"></i> Testimonial
                </a>
              </li>
              <li className="nav__item">
                <a href="#Blogs" className="nav__link">
                  <i className="ri-chat-3-line"></i> Blogs
                </a>
              </li>
              <li className="nav__item">
                <a href="#Contact" className="nav__link">
                  <i className="ri-chat-3-line"></i> Contact
                </a>
              </li>
            </ul>
            <div className="nav__close" onClick={() => setMobile(false)}>
              <i className="ri-close-line"></i>
            </div>
          </div>

          <div className="nav__buttons">
            {options?.map((opt) => (
              <button
                key={opt.text}
                onClick={() => setTheme(opt.text)}
                className={`cursor-pointer leading-9 text-xl rounded-full m-1 ${
                  theme === opt.text && "text-sky-600"
                }`}
              >
                <i className={opt.icon}></i>
              </button>
            ))}
            {/* <i className="ri-moon-line cursor-pointer leading-9 text-xl rounded-full m-1 text-sky-600" id="theme-button"></i>
            <i className="ri-sun-line change-theme" id="theme-button"></i>
            <i className="ri-computer-line change-theme" id="theme-button"></i> */}

            <div className="nav__toggle" onClick={() => setMobile(true)}>
              <i className="ri-menu-4-line"></i>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
