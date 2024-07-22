import React from "react";
//assets
import womenCate from "../assets/category/womenCate.png";
import menCate from "../assets/category/menCate.png";
import jeweleryCate from "../assets/category/jeweleryCate.png";
import electronicsCate from "../assets/category/electronicsCate.png";
import { Link } from "react-router-dom";

const categories = [
  { img: womenCate, title: "women", path: "/women" },
  { img: menCate, title: "men", path: "/men" },
  { img: jeweleryCate, title: "jewelery", path: "/jewelery" },
  { img: electronicsCate, title: "electronics", path: "/electronics" },
];

const CategoryCard = ({ img, title, path }) => {
  return (
    <div className="xl:w-1/4 md:w-1/2 p-4 w-full sm:mb-0 mb-6">
      <Link to={path}>
        <div className="rounded-lg h-64 overflow-hidden bg-gray-100 opacity-100 hover:opacity-70">
          <img
            alt={title}
            className=" sm:object-contain md:object-cover object-center h-full w-full"
            src={img}
          />
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5 text-center uppercase">
          {title}
        </h2>
      </Link>
    </div>
  );
};

const CategoryBlock = () => {
  return (
    <section className="container px-5 py-24 mx-auto text-gray-600 body-font">
      <div className="flex flex-col text-center w-full mb-14">
        <h1 className="sm:text-3xl text-2xl  font-semibold title-font  text-gray-900">
          精選商品分類
        </h1>
      </div>

      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
        {categories.map((cate) => {
          return (
            <CategoryCard
              key={cate.title}
              img={cate.img}
              title={cate.title}
              path={cate.path}
            />
          );
        })}
      </div>
    </section>
  );
};

export default CategoryBlock;
