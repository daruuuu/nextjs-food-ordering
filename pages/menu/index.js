import Layout from "@/components/Layout/Layout";
import ProductItem from "@/components/ProductItem/ProductItem";
import React from "react";
import data from "@/utils/data";

const Menu = () => {
  const { menu } = data;
  return (
    <Layout title="Menu">
      <h1 className="text-xl font-bold mb-4 text-center md:text-3xl">
        Our Menu
      </h1>
      <h2 className=" text-xl md:text-3xl font-bold mb-4 text-center">Udon</h2>
      <div className="flex flex-wrap gap-4 items-center justify-around mb-4">
        {menu
          .filter((item) => item.category === "Udon")
          .map((item) => (
            <ProductItem
              key={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))}
      </div>
      <hr />
      <h2 className=" text-xl md:text-3xl font-bold mb-4 text-center">Rice</h2>
      <div className="flex flex-wrap gap-4 items-center justify-around mb-4">
        {menu
          .filter((item) => item.category === "Rice")
          .map((item) => (
            <ProductItem
              key={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))}
      </div>
      <hr />
      <h2 className=" text-xl md:text-3xl font-bold mb-4 text-center">Drink</h2>
      <div className="flex flex-wrap gap-4 items-center justify-around mb-4">
        {menu
          .filter((item) => item.category === "Drink")
          .map((item) => (
            <ProductItem
              key={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))}
      </div>
    </Layout>
  );
};

export default Menu;
