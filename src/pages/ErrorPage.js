import React from "react";
//assets
import error from "../assets/error.svg";
//react-router-dom
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        {/* text */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">
            喔喔，你要的網頁不在這裡
            <br className="hidden lg:inline-block" />
            或您的網頁連結可能有問題
          </h1>
          <p className="mb-8 leading-relaxed">
            我們調整了部分資訊的顯示位置，您想瀏覽的頁面可能因此遺失，請嘗試重新輸入網址，或直接返回首頁。
          </p>
          <Link to="/">
            <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
              回到首頁
            </button>
          </Link>
        </div>
        {/* image */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center "
            alt="error"
            src={error}
          />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
