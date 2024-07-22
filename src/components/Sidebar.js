import React, { useContext } from "react";
//link
import { Link } from "react-router-dom";
//icons
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
//components
import CartItem from "../components/CartItem";
//sidebar context
import { SidebarContext } from "../contexts/SidebarContext";
//cart context
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handeleClose } = useContext(SidebarContext);
  const { cart, clearCart, itemAmount, total } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[40vw] xl:max-w-[35vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          我的購物車 ({itemAmount})
        </div>
        <div
          onClick={handeleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      {/* < className="flex flex-col gap-y-2  h-[520px] lg:h-[640px]  overflow-y-auto overflow-x-hidden border-b"> */}
      <div className="flex flex-col gap-y-2  h-[380px] lg:h-[480px]   overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      {/* sidebar bottom */}
      <div className="flex flex-col gap-y-3 py-4 mt-4">
        <div className="flex w-full justify-between items-center">
          {/* total */}
          <div className="uppercase font-semibold">
            <span className="mr-2">總金額：</span>$
            {parseFloat(total).toFixed(2)}
          </div>
          {/* clear cart */}
          <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
          >
            <FiTrash2 />
          </div>
        </div>
        <Link
          to="/cart"
          className="bg-yellow-500 hover:bg-yellow-600 flex p-4 justify-center items-center text-primary w-full font-medium"
        >
          查看購物車頁面
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
