/* eslint-disable @next/next/no-img-element */
import React from "react";
import ModalMenu from "../Modal/ModalMenu";

const ProductItem = (props) => {
  return (
    <>
      <div
        className=" w-3/6 md:w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        onClick={props.onClick}
      >
        <a href="#">
          <img
            className="p-8 rounded-t-lg max-h-40 md:max-h-60"
            src={props.image}
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className=" text-lg md:text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {props.name}
            </h5>
          </a>

          <div className="flex items-center justify-between">
            <span className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white">
              {props.price}k
            </span>
            <a href="#" className="primary-button">
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
