import React, { useContext } from "react";

//components
import ProductCard from "./ProductCard";
import WarningCard from "./WarningCard";
//context
import { ProductContext } from "../contexts/ProductContext";

const NewProducts = () => {
  const { products } = useContext(ProductContext);
  //get last 7 items
  const lastSevenProducts = products.slice(-7);
  //console.log(lastSevenProducts);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-14">
          <h1 className="sm:text-3xl text-2xl font-semibold title-font  text-gray-900">
            新品推薦
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {lastSevenProducts.map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })}

          {/* 防詐騙專區 */}
          <WarningCard />
        </div>
      </div>
    </section>
  );
};

export default NewProducts;
