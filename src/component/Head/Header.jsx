import { React, useState, createElement } from "react";
import { content } from "../Content";
import { useEffect } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import './nav';
const Header = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme")
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
  ];
  function onWindowMatch() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }
  onWindowMatch();
  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
  }, [theme]);

  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  });

  return (
    <>
      <div className="w-full flex justify-center">
        <div
          className="sm:cursor-pointer fixed top-10 left-10 z-[999] rounded-lg  dark:bg-white/40 p-2 duration-500 transition-all"
          onClick={() => setShowMenu(!showMenu)}
          id="navbar_menu"
        >
          <HiMenuAlt2 size={34} />
        </div>
        <nav
          className={`fixed  z-[999] flex items-center dark:text-teal-400 text-[#040d21] gap-5 bg-slate-200/60 dark:bg-slate-200/20 px-6 py-3 backdrop-blur-md rounded-full text-dark_primary duration-300 ${
            showMenu ? "bottom-10" : "bottom-[-100%]"
          }`}
        >
          {nav.map((item, i) => (
            <a
              href={item.link}
              key={i}
              onClick={() => setActive(i)}
              className={`text-xl p-2.5 rounded-full dark:text-teal-400 sm:cursor-pointer 
     ${i === active && "dark:bg-[#040d21] bg-teal-500"} `}
            >
              {createElement(item.icon)}
            </a>
          ))}
          {options?.map((opt) => (
            <button
              key={opt.text}
              onClick={() => setTheme(opt.text)}
              className={`cursor-pointer px-3 py-1 text-xl rounded-full m-1 ${
                theme === opt.text && "bg-teal-400 text-[#040d21] dark:text-teal-400 dark:bg-[#040d21]"
              }`}
            >
              <i className={opt.icon}></i>
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
