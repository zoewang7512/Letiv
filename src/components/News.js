import React from "react";
//icons
import { FaArrowRight } from "react-icons/fa";

const Infos = [
  {
    month: "Jul",
    day: "12",
    subtitle: "公益活動",
    title: "PEACE FOR ALL",
    description: "祈願世界和平慈善系列，三款新設計登場！",
    buttonText: "商品一覽",
  },
  {
    month: "Jul",
    day: "1",
    subtitle: "滿額贈",
    title: "品牌訂製皮革護照套",
    description: "單筆消費滿$ 2,000，即贈【品牌訂製皮革護照套】乙套",
    buttonText: "活動一覽",
  },
  {
    month: "Jun",
    day: "20",
    subtitle: "優惠活動",
    title: "信用卡優惠活動",
    description: "信用卡優惠活動 於網路商店或全台直營店刷指定卡片享優惠！",
    buttonText: "活動一覽",
  },
];

const NewsCard = ({ month, day, subtitle, title, description, buttonText }) => {
  return (
    <div className="py-8 px-4 lg:w-1/3 w-full cursor-pointer">
      <div className="h-full flex items-start">
        <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
          <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
            {month}
          </span>
          <span className="font-medium text-lg text-gray-800 title-font leading-none">
            {day}
          </span>
        </div>
        <div className="flex-grow pl-6 group hover:bg-yellow-500 rounded-md transition duration-500 w-full">
          <h2 className="tracking-widest text-xs title-font font-semibold text-yellow-500 group-hover:text-white my-1 ">
            {subtitle}
          </h2>
          <h1 className="title-font text-xl font-semibold text-gray-900 mb-3">
            {title}
          </h1>
          <p className="leading-relaxed mb-5">
            {description}
            <br />
            <span className="flex items-center">
              {buttonText} <FaArrowRight className="ml-1 group-hover:ml-2" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

const News = () => {
  return (
    <section className="text-gray-600 body-font container px-5 py-24 mx-auto">
      {/* title */}
      <div className="flex flex-col text-center w-full mb-14">
        <h1 className="sm:text-3xl text-2xl font-semibold title-font  text-gray-900">
          最新活動企劃
        </h1>
      </div>

      <div className="flex flex-wrap -mx-4 -my-8">
        {Infos.map((info) => {
          return (
            <NewsCard
              key={info.title}
              month={info.month}
              day={info.day}
              subtitle={info.subtitle}
              title={info.title}
              description={info.description}
              buttonText={info.buttonText}
            />
          );
        })}
      </div>
    </section>
  );
};

export default News;
