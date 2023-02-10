/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/Layout/Layout";
import { useState } from "react";
import data from "@/utils/data";
import ProductItem from "@/components/ProductItem/ProductItem";
import ProductCategory from "@/components/ProductCategory/ProductCategory";
import Link from "next/link";
import ModalMenu from "@/components/Modal/ModalMenu";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(
  () => import("@/components/Modal/ModalMenu"),
  { ssr: false }
);
export default function Home() {
  const { menu } = data;
  const [category, setCategory] = useState("");
  const [visible, setVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  const handleCategory = (e) => {
    setCategory(e.target.alt);
  };
  const handleModal = (product) => {
    setSelectedProduct(product);
    setVisible(true);
  };

  return (
    <Layout title="Home Page">
      <DynamicComponentWithNoSSR
        visible={visible}
        onClose={() => setVisible(false)}
        image={selectedProduct.image}
        name={selectedProduct.name}
        description={selectedProduct.description}
        price={selectedProduct.price}
      />
      <div className="flex-col flex items-center justify-around md:flex-row ">
        <div className="flex-auto w-32 text-center">
          <h1 className="text-xl mb-4 md:text-6xl font-bold ">
            Its not just Udon, <br /> its Experience
          </h1>
          <p className="mb-4 text-sm md:text-xl">
            You don&apos;t have to be Japanese to enjoy our food. <br /> We have
            something for everyone.
          </p>
          <Link href="/menu">
            <button className="primary-button">View Menu</button>
          </Link>
        </div>
        <img src="/images/banner1.png" alt="ramen" className="flex-auto w-32" />
      </div>
      <div>
        <h1 className="text-xl font-bold mb-4 text-center md:text-3xl">
          Our Category Menu
        </h1>
        <div className="flex flex-wrap gap-y-4 items-center justify-around mb-4">
          <ProductCategory onClick={handleCategory} />
        </div>
        {category && (
          <h2 className="text-3xl font-bold mb-4 text-center">{category}</h2>
        )}
        {category && (
          <div className="flex flex-wrap gap-4 items-center justify-around mb-4">
            {menu
              .filter((item) => item.category === category)
              .map((item) => (
                <>
                  <ProductItem
                    key={item.slug}
                    name={item.name}
                    image={item.image}
                    price={item.price}
                    onClick={() => handleModal(item)}
                  />
                </>
              ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
