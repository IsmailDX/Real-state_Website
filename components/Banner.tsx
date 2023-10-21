import React from "react";
import HouseImg from "../public/house-banner.png";
import Search from "../components/Search";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24">
      <div className="flex flex-col lg:flex-row">
        <div
          className="lg:ml-8 xl:ml-[135px] flex flex-col 
        items-center lg:items-start text-center lg:text-left justify-center px-4 lg:px-0"
        >
          <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-6">
            <span className="text-violet-700">Rent</span> Your Dream House With
            Us!
          </h1>
          <p className="max-w-[480px] mb-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
            repellat voluptatibus saepe repudiandae voluptas odit possimus!
            Illum rem deleniti eligendi?
          </p>
        </div>
        <div className="hidden lg:flex justify-end items-end">
          <Image src={HouseImg} alt="houseBanner" />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
