import React from "react";
//icons
import { FaFacebook, FaLine, FaInstagram } from "react-icons/fa";
import { TbClothesRack } from "react-icons/tb";
//react-router-dom
import { Link } from "react-router-dom";

const companyNav = ["隱私權政策", "免責聲明", "關於我們"];
const customerNav = ["NEWS", "客服中心", "售後服務", "購物常見問題"];

const Footer = () => {
  return (
    <footer className="text-gray-600 ">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          {/* COMPANY */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest mb-3">
              COMPANY
            </h2>
            <nav className="list-none mb-5 text-sm cursor-pointer">
              {companyNav.map((company) => {
                return (
                  <li
                    key={company}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    {company}
                  </li>
                );
              })}
            </nav>
          </div>
          {/* CUSTOMER SERVICE */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest mb-3">
              CUSTOMER SERVICE
            </h2>
            <nav className="list-none mb-5 text-sm cursor-pointer">
              {customerNav.map((customer) => {
                return (
                  <li
                    key={customer}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    {customer}
                  </li>
                );
              })}
            </nav>
          </div>
          {/* GET OUR NEWSLETTER! */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest  mb-3">
              GET OUR NEWSLETTER!
            </h2>
            <p className="text-gray-600 text-sm mb-2 ">
              馬上訂閱我們的電子報
              <br />
              優先得到最新活動。
            </p>
            <button className="text-[14px] w-full mx-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded mb-5 ">
              Subscribe to our newsletter
            </button>
          </div>
          {/* FOLLOW US! */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest  mb-3">
              FOLLOW US!
            </h2>
            <div className="flex justify-center md:justify-start items-center mx-auto gap-4 mb-3">
              <div className="flex items-center justify-center text-yellow-500   rounded-full cursor-pointer">
                <FaFacebook className="w-6 h-6" />
              </div>
              <div className=" flex items-center justify-center text-yellow-500   rounded-full cursor-pointer">
                <FaInstagram className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-center text-yellow-500   rounded-full cursor-pointer">
                <FaLine className="w-6 h-6" />
              </div>
            </div>

            <p className="text-gray-600 text-sm mb-2 ">Tel. 0800-555-050</p>
            <p className="text-gray-600 text-[14px] mb-2 ">
              Mail. SERVICE@LETIVFASHION.COM
            </p>
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="bg-black">
        <div className="container px-5 py-6 mx-auto flex items-center  justify-center">
          {/* logo */}
          <Link to="/">
            <div className="flex title-font font-medium items-center  justify-center text-white ">
              <div className="w-10 h-10 flex items-center justify-center bg-yellow-500   rounded cursor-pointer">
                <TbClothesRack className="w-6 h-6 text-white" />
              </div>
              <p className="ml-3 text-xl">
                Le<span className="text-yellow-500">t</span>iv
              </p>
            </div>
          </Link>
          <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
            ©©2024 Letiv Inc. All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
