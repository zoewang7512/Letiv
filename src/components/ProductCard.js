import React from "react";
//react-router-dom
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { id, image, category, title, price } = product;
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full text-center">
      <Link to={`/product/${id}`}>
        <div className="block relative h-48 rounded overflow-hidden  opacity-100 hover:opacity-70">
          <img
            alt="ecommerce"
            className="object-contain object-center w-full h-full block"
            src={image}
          />
        </div>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
            {category}
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium ">
            {title}
          </h2>
          <p className="mt-1">$ {price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
