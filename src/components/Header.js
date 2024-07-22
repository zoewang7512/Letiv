import React, { useContext, useEffect, useState } from "react";
//icons
import { TbClothesRack, TbMenu2 } from "react-icons/tb";
import { BsCart4, BsPerson } from "react-icons/bs";
//react-router-dom
import { Link } from "react-router-dom";
//sidebar context
import { SidebarContext } from "../contexts/SidebarContext";
//cart context
import { CartContext } from "../contexts/CartContext";

const Header = () => {
  //menu
  const [isMenu, setIsMenu] = useState(false);

  //sider
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  const navigations = [
    {
      name: "women",
      path: "/women",
    },
    {
      name: "men",
      path: "/men",
    },
    {
      name: "jewelery",
      path: "/jewelery",
    },
    {
      name: "electronics",
      path: "/electronics",
    },
  ];

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6 "
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        {/* logo */}
        <Link to="/">
          <div className="flex title-font font-medium items-center justify-center text-black mb-3">
            <div className="w-10 h-10 flex items-center justify-center bg-yellow-500   rounded cursor-pointer">
              <TbClothesRack className="w-6 h-6 text-white" />
            </div>
            <p className="ml-3 text-xl">
              Le<span className="text-yellow-500">t</span>iv
            </p>
          </div>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 hidden md:flex items-center text-base justify-center uppercase ">
          {navigations.map((nav) => {
            return (
              <Link to={nav.path} key={nav.name}>
                <div className="mr-5 hover:text-gray-900">{nav.name}</div>
              </Link>
            );
          })}
        </nav>
        {/* menu */}
        <div className="flex ml-auto">
          <div className="mr-2  block md:hidden relative">
            <TbMenu2
              className="text-2xl cursor-pointer hover:text-yellow-500"
              onClick={() => setIsMenu(!isMenu)}
            />
            {isMenu && (
              <div className=" absolute bg-white p-4 w-45 shadow-md -right-2 top-8">
                <ul>
                  {navigations.map((nav) => {
                    return (
                      <Link to={nav.path} key={nav.name}>
                        <li
                          onClick={() => setIsMenu(false)}
                          className="p-2 text-lg  rounded hover:bg-gray-200 uppercase"
                        >
                          {nav.name}
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>

          {/* user */}
          <div className="mr-2 hover:text-yellow-500">
            <Link to="/login">
              <BsPerson className="text-2xl" />
            </Link>
          </div>
        </div>
        {/* cart */}
        <div
          className="cursor-pointer flex relative "
          onClick={() => setIsOpen(!isOpen)}
        >
          <BsCart4 className="text-2xl" />
          <div className="bg-yellow-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full  flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
