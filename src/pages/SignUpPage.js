import React, { useState } from "react";
//react-router-dom
import { Link } from "react-router-dom";
//assets
import sign from "../assets/sign.png";

const Checkbox = ({ children }) => {
  return (
    <div className=" flex items-center my-4">
      <input
        type="checkbox"
        id="remember1"
        name="remember1"
        className="text-gray-500"
      />
      <label for="remember" className="text-gray-600 ml-2 ">
        {children}
      </label>
    </div>
  );
};

const SignUpPage = () => {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  return (
    <section className="container mx-auto py-24">
      <div className="flex flex-col lg:flex-row shadow-md my-10">
        {/* form */}
        <div className="lg:p-24 md:p-36 sm:p-20 p-8 w-full lg:w-1/2">
          <h1 className="font-semibold text-2xl border-b pb-8">
            Create free account
          </h1>
          <form action="#">
            {/* Username Input  */}
            <div className="my-2">
              <label for="username" className="block text-gray-600">
                電子郵件地址
              </label>
              <p className="my-1 text-gray-400 text-xs">
                ※電子郵件地址將作為登入帳號，敬請填寫正確資訊，以免喪失會員權益。
              </p>
              <input
                type="text"
                id="username"
                name="username"
                autoComplete="off"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Password Input  */}
            <div className="mb-4">
              <label for="password" className="block text-gray-600">
                密碼
              </label>
              <input
                type={showPassword1 ? "text" : "password"}
                id="password"
                name="password"
                autoComplete="off"
                placeholder="請輸入介於8~20位數之間密碼，需同時包含英文和數字，英文不分大小寫"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              />
              {/* checkbox */}
              <div className=" flex items-center my-2">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="text-gray-500"
                  value={showPassword1}
                  onChange={() => setShowPassword1((prev) => !prev)}
                />
                <label for="remember" className="text-gray-600 ml-2 text-xs">
                  顯示輸入密碼
                </label>
              </div>
            </div>
            {/*  Password Confirmation  */}
            <div className="my-4">
              <label for="password" className="block text-gray-600">
                確認密碼
              </label>
              <input
                type={showPassword2 ? "text" : "password"}
                id="passwordCheck1"
                name="passwordCheck1"
                autoComplete="off"
                placeholder="請輸入介於8~20位數之間密碼，需同時包含英文和數字，英文不分大小寫"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              />
              {/* checkbox */}
              <div className=" flex items-center my-2">
                <input
                  type="checkbox"
                  id="passwordCheck2"
                  name="passwordCheck2"
                  className="text-gray-500"
                  value={showPassword2}
                  onChange={() => setShowPassword2((prev) => !prev)}
                />
                <label for="remember" className="text-gray-600 ml-2 text-xs">
                  顯示輸入密碼
                </label>
              </div>
            </div>
            {/*  Checkbox area */}
            <Checkbox>
              {" "}
              我已閱讀並同意《隱私權保護政策》及《定型化契約條款》
            </Checkbox>
            <Checkbox> 我願意收到Letiv電子報</Checkbox>
            {/* Sign Up Button  */}
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-md py-2 px-4 w-full"
            >
              Sign up
            </button>
          </form>
          {/* log In Link  */}
          <Link to="/login">
            <button className="bg-white text-yellow-500 hover:text-yellow-600 font-semibold rounded-md py-2 px-4 w-full mt-6">
              已有會員帳號
            </button>
          </Link>
        </div>
        {/* image */}
        <div className="w-1/2 h-screen hidden lg:block">
          <img src={sign} alt="SignUp" className="object-cover w-full h-full" />
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
