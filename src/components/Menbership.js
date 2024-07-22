import React from "react";
//icons
import { MdOutlineDiscount, MdOutlineCardGiftcard } from "react-icons/md";
import { CgSize, CgShoppingBag } from "react-icons/cg";
import { HiOutlineUserGroup } from "react-icons/hi";
import { RiScissorsCutLine } from "react-icons/ri";

const menbers = [
  {
    Icon: MdOutlineDiscount,
    title: "會員獨享優惠",
    text: "會員限定價格強勢回歸！ 至官網註冊成為會員，即可以限定優惠價格購買指定商品！",
  },
  {
    Icon: CgSize,
    title: "豐富尺碼選擇",
    text: "XS-4XL 最豐富的尺碼選擇",
  },
  {
    Icon: MdOutlineCardGiftcard,
    title: "月月抽免費商品體驗",
    text: "會員專屬不定時提供免費商品試穿體驗，回饋您的使用心得，幫助我們讓產品更加美好！",
  },
];

const menbers2 = [
  {
    Icon: CgShoppingBag,
    title: "ORDER & PICK",
    text: "線上購物，實體店鋪最快 1 小時取貨！ 立即體驗更輕鬆便利的購物方式。",
  },
  {
    Icon: RiScissorsCutLine,
    title: "免費褲長修改服務",
    text: "針對特定的褲子，如長褲和牛仔褲，可進行長度修改。無法到店購物的您，也能輕鬆修改褲長。",
  },
  {
    Icon: HiOutlineUserGroup,
    title: "大宗採購 / 團購服務",
    text: "從 XS-4XL 最齊全的尺碼選擇，填寫商品訂購單即有專人服務。提供給在各行各業認真工作的您們。",
  },
];

const MenbershipTitle = ({ children }) => {
  return (
    <div className="flex flex-col text-center w-full  mt-8 mb-4">
      <h1 className="sm:text-3xl text-2xl font-semibold title-font  text-gray-900">
        {children}
      </h1>
    </div>
  );
};

const MenbershipCard = ({ Icon, title, text }) => {
  return (
    <div className="p-4 md:w-1/3  w-full">
      <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
            <Icon className="w-5 h-5" />
          </div>
          <h2 className="text-gray-900 text-lg title-font font-medium">
            {title}
          </h2>
        </div>
        <div className="flex-grow">
          <p className="leading-relaxed text-base">{text}</p>
        </div>
      </div>
    </div>
  );
};

const Menbership = () => {
  return (
    <section className="text-gray-600 body-font container px-5 py-24 mx-auto">
      {/* title */}
      <MenbershipTitle>會員專屬禮遇</MenbershipTitle>
      {/* pic & text */}
      <div className="flex flex-wrap -m-4">
        {menbers.map((menber) => {
          return (
            <MenbershipCard
              key={menber.title}
              Icon={menber.Icon}
              title={menber.title}
              text={menber.text}
            />
          );
        })}
      </div>

      {/* title */}
      <MenbershipTitle>線上線下便利服務</MenbershipTitle>
      {/* pic & text */}
      <div className="flex flex-wrap -m-4">
        {menbers2.map((menber) => {
          return (
            <MenbershipCard
              key={menber.title}
              Icon={menber.Icon}
              title={menber.title}
              text={menber.text}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Menbership;
