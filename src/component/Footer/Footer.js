import React from "react";
const Footer = () => {
    return (
        <section className="font-Poppins max-w-screen-xl mx-auto">
            <div className="container mx-auto">
                <footer className="p-4 rounded-lg  md:px-6 md:py-8 text-slate-100">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                            <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-8" alt="Flowbite Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm sm:mb-0 ">
                            <li>
                                <a href="#about" className="mr-4 hover:underline md:mr-6  text-slate-500  dark:text-slate-200">About</a>
                            </li>
                            <li>
                                <a href="/" className="mr-4 hover:underline md:mr-6 text-slate-500  dark:text-slate-200">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="/" className="mr-4 hover:underline md:mr-6 text-slate-500  dark:text-slate-200 ">Licensing</a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:underline text-slate-500  dark:text-slate-200">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-500 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-100">© 2022 <a href="/" className="hover:underline text-slate-200">WebBuilders™</a>. All Rights Reserved.
                    </span>
                </footer>
            </div>
        </section>
    )
}

export default Footer;