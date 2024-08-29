import navButton from "@/Components/Button/navButton";
import Navigation from "@/Components/Navigation";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function Navbar() {
  const { t } = useTranslation();
  const [navOpen, setNavOpen] = useState(false);

  function changeState() {
    setNavOpen(!navOpen);
  }

  return (
    <nav className="flex items-center ph:gap-4 justify-between  my-10">
      <img src="/public/logo/logo.svg" className="ph:w-28" />

      <div
        className={`flex text-center fixed items-center justify-center   md:w-full ${navOpen ? "opacity-100 transition-all top-0 left-0 bg-yellow-950/85 backdrop-blur-md overflow-hidden h-screen w-screen z-10" : "md:opacity-0"}`}
      >
        <ul className={`flex gap-14 xl:gap-8 lg:gap-4 ${navOpen ? "flex-col gap-8 text-xl ph:text-lg [&>li]:py-2" : ""}`}>
          <li className="text-white flex justify-center items-center cursor-pointer playfair font-semibold">
            <Navigation text="home" />
          </li>
          <li className="text-white flex justify-center items-center cursor-pointer playfair font-semibold">
            <Navigation text="menu" />
          </li>
          <li className="text-white flex whitespace-nowrap	 justify-center items-center cursor-pointer playfair font-semibold">
            <Navigation text="about us" />
          </li>
          <li className="text-white flex whitespace-nowrap	 justify-center items-center cursor-pointer playfair font-semibold">
            <Navigation text="contact us" />
          </li>
        </ul>
      </div>

      <div className="flex gap-4 ph:w-full  md:gap-2 justify-end h-full items-center z-[2]">
        <button className="p-2 ph:text-sm text-md  playfair  bg-transparent whitespace-nowrap signin_button text-white duration-300 rounded-md	 ">
          {t("sign in")}
        </button>
        {navButton("sign up")}

        <button
          onClick={changeState}
          className={`hidden  z-20 items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:inline-flex hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-gray-200 ${navOpen ? "text-white" : "text-yellow-700"}`}
        >
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
