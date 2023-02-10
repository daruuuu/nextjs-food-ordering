import Layout from "@/components/Layout/Layout";
import ProductItem from "@/components/ProductItem/ProductItem";
import React, { useState } from "react";
import data from "@/utils/data";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(
  () => import("@/components/Modal/ModalMenu"),
  { ssr: false }
);

const Menu = () => {
  const { menu } = data;
  const [visible, setVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const handleModal = (product) => {
    setSelectedProduct(product);
    setVisible(true);
  };
  return (
    <Layout title="Menu">
      <DynamicComponentWithNoSSR
        visible={visible}
        onClose={() => setVisible(false)}
        image={selectedProduct.image}
        name={selectedProduct.name}
        description={selectedProduct.description}
        price={selectedProduct.price}
      />
      <h1 className="text-xl font-bold mb-4 text-left md:text-3xl">Our Menu</h1>
      <h2 className=" text-xl md:text-3xl font-bold mb-4 text-center">Udon</h2>
      <div className="flex flex-wrap gap-4 items-center justify-around mb-4">
        {menu
          .filter((item) => item.category === "Udon")
          .map((item) => (
            <ProductItem
              key={item.slug}
              name={item.name}
              image={item.image}
              price={item.price}
              onClick={() => handleModal(item)}
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
              key={item.slug}
              name={item.name}
              image={item.image}
              price={item.price}
              onClick={() => handleModal(item)}
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
              key={item.slug}
              name={item.name}
              image={item.image}
              price={item.price}
              onClick={() => handleModal(item)}
            />
          ))}
      </div>
    </Layout>
  );
};

export default Menu;
