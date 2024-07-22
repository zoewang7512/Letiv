import React, { useContext, useState } from "react";
//useParams
import { useParams } from "react-router-dom";
//context
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";
//pages
import ErrorPage from "./ErrorPage";
//icons
import { FaHeart } from "react-icons/fa";

const ProductPage = () => {
  //heart onClick
  const [isHeart, setIsHeart] = useState(false);
  //get the product id
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  //get the single product based on id
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });
  //if  product is not found
  if (!product) {
    return <ErrorPage />;
  }

  const { price, title, description, image, category } = product;
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded"
            src={image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase ">
              {category}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 ">
              {title}
            </h1>

            <p className="leading-relaxed">{description}</p>

            <div className="flex mt-6">
              <span className="title-font font-medium text-2xl text-gray-900">
                $ {price}
              </span>
              <button
                onClick={() => addToCart(product, product.id)}
                className="flex ml-auto font-semibold text-white bg-yellow-500 hover:bg-yellow-600 border-0 py-2 px-6 focus:outline-none  rounded"
              >
                加入購物車
              </button>
              <button
                className={`${isHeart ? "text-yellow-500" : " text-gray-500"}
       rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center  ml-4`}
              >
                <FaHeart
                  className="w-5 h-5"
                  onClick={() => setIsHeart(!isHeart)}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductPage;
