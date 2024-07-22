import React, { useContext, useState } from "react";
//react-router-dom
import { Link } from "react-router-dom";
//context
import { CartContext } from "../contexts/CartContext";
//icons
import { FaArrowLeft } from "react-icons/fa";
//components
import CartItem from "../components/CartItem";
import AdArea from "../components/AdArea";

const CartPage = () => {
  //cart
  const { cart, itemAmount, total } = useContext(CartContext);
  const [shippingFee, setShippingFee] = useState(40);

  const handleChange = (e) => {
    setShippingFee(e.target.value);
  };
  const totalCost = total + parseInt(shippingFee);

  return (
    <div>
      <section className="container mx-auto py-24">
        <div className="flex flex-col lg:flex-row shadow-md my-10">
          {/* Shopping Cart */}
          <div className="w-full lg:w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">購物車</h1>
              <h2 className="font-semibold text-2xl">{itemAmount} 件商品</h2>
            </div>

            <div className="flex flex-col gap-y-2   overflow-y-auto overflow-x-hidden border-b">
              {cart.map((item) => {
                return <CartItem item={item} key={item.id} />;
              })}
            </div>

            <Link
              to="/"
              className="flex font-semibold text-indigo-600 text-sm mt-10"
            >
              <FaArrowLeft className="fill-current mr-2 text-indigo-600 w-4" />
              繼續購物
            </Link>
            <AdArea />
          </div>
          {/* Order Summary */}
          <div id="summary" className="w-full lg:w-1/4 px-8 py-10">
            <h1 className="font-semibold text-2xl border-b pb-8">訂單商品</h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">
                {itemAmount} 件商品
              </span>
              <span className="font-semibold text-sm">
                {parseFloat(total).toFixed(2)}
              </span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">
                選擇寄送方式
              </label>
              <select
                onChange={handleChange}
                className="block p-2 text-gray-600 w-full text-sm"
              >
                <option value={40}>一般寄送 - $40.00</option>
                <option value={60}>賣家宅配 - $60.00</option>
                <option value={80}>隔日到貨 - $80.00</option>
              </select>
            </div>
            <div className="py-5">
              <label
                for="promo"
                className="font-medium inline-block mb-3 text-sm uppercase"
              >
                新增優惠卷
              </label>
              <input
                type="text"
                id="promo"
                placeholder="Enter your code"
                className="p-2 text-sm w-full"
              />
            </div>
            <button className="bg-red-500 hover:bg-red-600 px-5 py-1 text-sm text-white uppercase">
              使用
            </button>
            <div className="border-t mt-8">
              <div className=" py-6 text-sm uppercase">
                <div className="flex justify-between">
                  <span>商品總金額</span>
                  <span>{parseFloat(total).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>運費總金額</span>
                  <span>{parseFloat(shippingFee).toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>總付款金額</span>
                  <span>$ {parseFloat(totalCost).toFixed(2)}</span>
                </div>
              </div>
              <button className="bg-yellow-500 font-semibold hover:bg-yellow-600 py-3 text-sm text-white uppercase w-full">
                結帳
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
