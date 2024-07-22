import React from "react";
//assets
import special1 from "../assets/special/special1.png";
import special2 from "../assets/special/special2.png";
import special3 from "../assets/special/special3.png";
import special4 from "../assets/special/special4.png";

const specials = [
  {
    img: special1,
    title: "西裝系列",
    description: "伴您輕鬆愉快地工作，一起開啟舒適的職場生活。",
  },
  {
    img: special2,
    title: "單寧系列",
    description: "單寧系列，完美搭配每個人的生活風格！",
  },
  {
    img: special3,
    title: "夏日特輯",
    description: "穿上自然，感受美好時光。這些都是我們的精彩瞬間。",
  },
  {
    img: special4,
    title: "PEACE FOR ALL",
    description: "現在是採取行動的時候了，一同表達對世界和平的渴望。",
  },
];

const SpecialCard = ({ title, img, description }) => {
  return (
    <div className="xl:w-1/4 md:w-1/2 p-4 w-full ">
      <div className="bg-gray-100 p-6 rounded-lg cursor-pointer">
        <img
          className="h-40 rounded w-full object-contain lg:object-cover object-center mb-6 opacity-100 hover:opacity-70"
          src={img}
          alt={title}
        />

        <h2 className="text-lg text-gray-900  font-semibold title-font mb-1">
          {title}
        </h2>
        <h3 className="tracking-widest text-xs font-medium title-font">
          {description}
        </h3>
      </div>
    </div>
  );
};

const Special = () => {
  return (
    <section className="text-gray-600 body-font container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-14">
        <h1 className="sm:text-3xl text-2xl  font-semibold title-font  text-gray-900">
          特輯一覽
        </h1>
      </div>

      <div className="flex flex-wrap -m-4">
        {specials.map((item) => {
          return (
            <SpecialCard
              key={item.title}
              title={item.title}
              img={item.img}
              description={item.description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Special;
