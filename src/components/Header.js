import React, { useState, useEffect } from "react";
import LogoWhite from "../assets/img/logo-white.svg";
import LogoDark from "../assets/img/logo-dark.svg";

const Header = () => {
  const [header, setHeader] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  });
  return (
    <header
      className={`${
        header ? "bg-white py-6 " : "bg-transparent py-8"
      } fixed z-50 w-full transition-all duration-500`}
    >
      <div className="container mx-auto items-center flex fle-col gap-y-6 lg:flex-row justify-between lg:gap-y-0">
        <a href="/">
          {header ? (
            <img className="w-[160px" src={LogoDark} />
          ) : (
            <img className="w-[160px" src={LogoWhite} />
          )}
        </a>
        <nav
          className={`${
            header ? "text-primary" : "text-white"
          } flex font-tertiary tracking-[3px] text-[15px] items-center uppercase  gap-x-4 lg:gap-x-8`}
        >
          <a href="/" className="hover:text-accent transition">
            Home
          </a>
          <a href="" className="hover:text-accent transition">
            Rooms
          </a>
          <a href="" className="hover:text-accent transition">
            Resturant
          </a>
          <a href="" className="hover:text-accent transition">
            SPA
          </a>
          <a href="" className="hover:text-accent transition">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
