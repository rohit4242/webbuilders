import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [Mobile, setMobile] = useState(false);
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
            <i className="ri-moon-line change-theme" id="theme-button"></i>

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
