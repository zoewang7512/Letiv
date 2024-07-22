import React, { useContext } from "react";
//assets
import womenBanner from "../assets/womenBanner.png";
//context
import { ProductContext } from "../contexts/ProductContext";
//components
import ProductCard from "../components/ProductCard";
import Skeleton from "../components/Skeleton";

const WomenPage = () => {
  const { products, loading } = useContext(ProductContext);

  const filteredProducts = products.filter((item) => {
    return item.category === "women's clothing";
  });
  return (
    <div className="container px-5 py-10 md:py-24 mx-auto flex flex-col">
      {loading ? (
        <Skeleton />
      ) : (
        <>
          {/* image */}
          <div className="lg:w-full mx-auto marker:rounded-lg h-64 overflow-hidden">
            <img
              alt="woman"
              className="object-contain md:object-cover object-center h-full w-full"
              src={womenBanner}
            />
          </div>
          {/* grid */}
          <div className="py-10 flex flex-wrap -m-4 text-gray-600 body-font">
            {filteredProducts.map((product) => {
              return <ProductCard product={product} key={product.id} />;
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default WomenPage;
