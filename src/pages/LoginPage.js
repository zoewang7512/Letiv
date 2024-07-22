import React from "react";
//react-router-dom
import { Link } from "react-router-dom";
//assets
import login from "../assets/login.png";

const LoginPage = () => {
  return (
    <section className="container mx-auto py-24">
      <div className="flex flex-col lg:flex-row shadow-md my-10">
        {/* Shopping Cart */}
        <div className="w-1/2 h-screen hidden lg:block">
          <img src={login} alt="Login" className="object-cover w-full h-full" />
        </div>

        <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
          <h1 className="font-semibold text-2xl border-b pb-8">
            Welcome Back !
          </h1>

          <form action="#" method="POST">
            {/* Username Input  */}
            <div className="my-4">
              <label for="username" className="block text-gray-600">
                電子郵件地址
              </label>
              <input
                type="text"
                id="username"
                name="username"
                autoComplete="off"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              />
            </div>
            {/* <!-- Password Input --> */}
            <div className="mb-4">
              <label for="password" className="block text-gray-600">
                密碼
              </label>
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="off"
                placeholder="請輸入介於8~20位數之間密碼，需同時包含英文和數字，英文不分大小寫"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              />
            </div>
            {/* <!-- Remember Me Checkbox --> */}
            <div className="flex justify-between mb-4 items-center">
              <div className=" flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="text-gray-500"
                />
                <label for="remember" className="text-gray-600 ml-2">
                  記住我
                </label>
              </div>
              <p className=" text-gray-600 text-sm cursor-pointer hover:underline">
                忘記/修改密碼
              </p>
            </div>

            {/* Login Button  */}
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-md py-2 px-4 w-full"
            >
              Log In
            </button>
          </form>
          {/* Sign up  Link  */}
          <Link to="/signup">
            <button className="bg-white text-yellow-500 hover:text-yellow-600 font-semibold rounded-md py-2 px-4 w-full mt-6">
              加入專屬會員
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
