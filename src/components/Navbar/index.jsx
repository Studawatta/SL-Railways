import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  return (
    <>
      <div className=" fixed  top-0 z-50 flex h-14 w-full items-center justify-between  bg-[#f2f2f2] px-4 text-[12px] text-slate-500 shadow-[0_1px_2px_0px_rgba(0,0,0,0.3)] md:px-20 ">
        {/* NAV LEFT  */}
        <span>Sri Lanka Railways</span>
        {/* NAV RIGHT */}
        <div>
          <div className=" hidden gap-4 sm:flex">
            <AnchorLink
              href="#home"
              className={`${
                currentPage === "home" ? "text-black" : ""
              } cursor-pointer`}
              onClick={() => setCurrentPage("home")}
            >
              Home
            </AnchorLink>
            <AnchorLink
              href="#gallery"
              className={`${
                currentPage === "gallery" ? "text-black" : ""
              } cursor-pointer`}
              onClick={() => setCurrentPage("gallery")}
            >
              Gallery
            </AnchorLink>
            <AnchorLink
              href="#history"
              className={`${
                currentPage === "history" ? "text-black" : ""
              } cursor-pointer`}
              onClick={() => setCurrentPage("history")}
            >
              History
            </AnchorLink>
            <AnchorLink
              href="#our_services"
              className={`${
                currentPage === "services" ? "text-black" : ""
              } cursor-pointer`}
              onClick={() => setCurrentPage("services")}
            >
              Our services
            </AnchorLink>
            <AnchorLink
              href="#contact"
              className={`${
                currentPage === "contact" ? "text-black" : ""
              } cursor-pointer`}
              onClick={() => setCurrentPage("contact")}
            >
              Contact
            </AnchorLink>
          </div>
          {/* NAV_RIGHT_MOBILE_VIEW */}
          <div className=" sm:hidden">
            <AiOutlineMenu
              className=" cursor-pointer text-2xl"
              onClick={() => setIsMenuToggled(true)}
            />
          </div>
        </div>
      </div>
      {/* MOBILE_DROPDOWN_MENU */}
      {isMenuToggled && (
        <div className=" fixed  bottom-0 right-0 z-50 h-full w-[300px]  bg-white">
          <div className="  flex h-[30%] items-end justify-end text-4xl text-slate-500">
            <span
              className=" mb-20 mr-10 cursor-pointer"
              onClick={() => setIsMenuToggled(false)}
              c
            >
              X
            </span>
          </div>
          <div className="flex h-[70%] justify-center ">
            <div className="flex w-fit flex-col gap-10 text-xl text-slate-500">
              <AnchorLink
                href="#home"
                className={`${
                  currentPage === "home" ? "text-black" : ""
                } cursor-pointer`}
                onClick={() => setCurrentPage("home")}
              >
                Home
              </AnchorLink>
              <AnchorLink
                href="#gallery"
                className={`${
                  currentPage === "gallery" ? "text-black" : ""
                } cursor-pointer`}
                onClick={() => setCurrentPage("gallery")}
              >
                Gallery
              </AnchorLink>
              <AnchorLink
                href="#history"
                className={`${
                  currentPage === "history" ? "text-black" : ""
                } cursor-pointer`}
                onClick={() => setCurrentPage("history")}
              >
                History
              </AnchorLink>
              <AnchorLink
                href="#our_services"
                className={`${
                  currentPage === "services" ? "text-black" : ""
                } cursor-pointer`}
                onClick={() => setCurrentPage("services")}
              >
                Our services
              </AnchorLink>
              <AnchorLink
                href="#contact"
                className={`${
                  currentPage === "contact" ? "text-black" : ""
                } cursor-pointer`}
                onClick={() => setCurrentPage("contact")}
              >
                Contact
              </AnchorLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
