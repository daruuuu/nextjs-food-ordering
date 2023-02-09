import Head from "next/head";
import Link from "next/link";
import React from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
const Layout = (props) => {
  return (
    <>
      <Head>
        <title>{props.title ? props.title + "- UdoNNo" : "UdoNNo"}</title>
        <meta name="description" content="Food ordering next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-16 items-center px-8 justify-between ">
            <Link href="/">
              <p className="text-lg font-bold">
                Udo
                <span className="text-red-500">NN</span>o
              </p>
            </Link>
            <div className="mx-auto hidden w-full justify-center md:flex">
              <Link href="/home">
                <p className="p-2 ">Home</p>
              </Link>
              <Link href="/menu">
                <p className="p-2 ">Menu</p>
              </Link>
              <Link href="/about">
                <p className="p-2 ">About Us</p>
              </Link>
              <Link href="/contact">
                <p className="p-2 ">Contact Us</p>
              </Link>
            </div>
            <div className="flex">
              <Link href="/cart">
                <p className="p-2 ">
                  <ShoppingBagIcon className="h-5 w-5 " />
                </p>
              </Link>
              <Link href="/login">
                <p className="p-2 primary-button ">Login</p>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container mx-auto mb-auto mt-4 px-8">
          {props.children}
        </main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          Udo
          <span className="text-red-500">NN</span>o
        </footer>
      </div>
    </>
  );
};

export default Layout;
