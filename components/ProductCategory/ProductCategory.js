/* eslint-disable @next/next/no-img-element */
import React from "react";

const category = [
  {
    name: "Udon",
    image: "/images/beef-curry-udon.jpg",
  },
  {
    name: "Rice",
    image: "/images/beef-curry-rice.jpg",
  },
  {
    name: "Drink",
    image: "/images/ocha.jpg",
  },
];
const ProductCategory = (props) => {
  return (
    <>
      {category.map((item) => (
        <div
          key={item.name}
          onClick={props.onClick}
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
        >
          <img
            className="rounded-t-lg max-h-60 object-cover object-center 
            max-w-xs
            "
            src={item.image}
            alt={item.name}
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.name}
            </h5>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCategory;
