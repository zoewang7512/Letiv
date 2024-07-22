import React from "react";
//icons
import { HiCheck, HiArrowRight } from "react-icons/hi";
const ranks = [
  {
    subtitle: "START",
    title: "Free",
    titleSpam: "",
    description: "",
    conditions: [
      "滿1000元即可享有免運費",
      "滿1,000元即贈送1%紅利金",
      "生日當月可獲得NT$100禮金",
    ],
    special: false,
  },
  {
    subtitle: "VIP",
    title: "$4,000",
    titleSpam: "單筆消費",
    description:
      "單筆消費滿4,000元或一年內累計消費滿8,000元，VIP資格將為期一年",
    conditions: [
      "滿800元即可享有免運費",
      "滿1,000元即贈送2%紅利金",
      "正品全面享有95折優惠",
      "每月首次購物單筆消費滿1,800元以上，可獲得NT$50元紅利金",
      "生日當月可獲得NT$200禮金",
    ],
    special: true,
  },
  {
    subtitle: "SVIP",
    title: "$8,000",
    titleSpam: "單筆消費",
    description:
      "正式會員，單筆消費滿8,000元;VIP會員，一年內累計消費滿8,000元，即可升級為SVIP",
    conditions: [
      "滿600元即可享有免運費",
      "滿1,000元即贈送3%紅利金",
      "正品全面享有9折優惠",
      "每月首次購物單筆消費滿1,000元以上，可獲得NT$80元紅利金",
      "生日當月可獲得NT$300禮金",
    ],
    special: false,
  },
];

const RankCard = ({
  subtitle,
  title,
  titleSpam,
  description,
  conditions,
  special,
}) => {
  return (
    <div className="p-4 lg:w-1/3 md:w-1/2 w-full">
      <div
        className={`${
          special ? "border-yellow-500" : "border-gray-300"
        }      h-full p-6 rounded-lg border-2  flex flex-col relative overflow-hidden`}
      >
        {special && (
          <span className="bg-yellow-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
            POPULAR
          </span>
        )}
        <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
          {subtitle}
        </h2>
        <h1 className="text-5xl text-gray-900  flex items-center  pb-4 mb-4 border-b border-gray-200 leading-none">
          <span> {title}</span>
          <span className="text-sm ml-1 font-normal text-gray-500">
            {titleSpam}
          </span>
        </h1>
        <p className="text-xs text-gray-500 mb-3">{description}</p>
        {conditions.map((cond) => {
          return (
            <p className="flex items-center text-gray-600 mb-2" key={cond}>
              <span
                className={`${special ? "bg-yellow-500" : "bg-gray-400"}
              w-4 h-4 mr-2 inline-flex items-center justify-center  text-white rounded-full flex-shrink-0`}
              >
                <HiCheck className="w-3 h-3" />
              </span>
              {cond}
            </p>
          );
        })}
        <button
          className={`${
            special
              ? "bg-yellow-500 hover:bg-yellow-600"
              : "bg-gray-400 hover:bg-gray-500"
          }     flex items-center mt-auto text-white border-0 py-2 px-4 w-full focus:outline-none  rounded`}
        >
          {/* <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded"> */}
          選擇此方案
          <HiArrowRight className="w-4 h-4 ml-auto" />
        </button>
      </div>
    </div>
  );
};

const MembershipRank = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-8">
        <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-2 text-gray-900">
          品牌會員等級
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
          感謝一直以來支持的會員，我們將秉持最優質的服務帶給您最美好的穿衣哲學
          <br />
          凡VIP/SVIP會員達到累積門檻後系統將自動升等，將為期一年的優惠折扣。
        </p>
      </div>
      <div className="flex flex-wrap -m-4">
        {ranks.map((rank) => {
          return (
            <RankCard
              key={rank.subtitle}
              subtitle={rank.subtitle}
              title={rank.title}
              titleSpam={rank.titleSpam}
              description={rank.description}
              conditions={rank.conditions}
              special={rank.special}
            />
          );
        })}
      </div>
    </section>
  );
};

export default MembershipRank;
