import React from "react";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import Image, { StaticImageData } from "next/image";

// Define the type for the 'house' prop
type HouseProps = {
  house: {
    id: number;
    name: string;
    description: string;
    year: string;
    image: StaticImageData;
    type: string;
    country: string;
    address: string;
    bedrooms: string;
    bathrooms: string;
    surface: string;
    price: string;
  };
};

const House = ({ house }: HouseProps) => {
  const { image, type, country, address, bedrooms, bathrooms, surface, price } =
    house;
  return (
    <div
      className="bg-white shadow-lg p-5 rounded-lg rounded-tl-[90px] 
      w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl 
      transition"
    >
      <Image src={image} alt="Houses" className="mb-8" />
      <div className="mb-4 flex gap-x-2 text-sm">
        <div className="bg-green-500 rounded-full text-white px-3 whitespace-nowrap">
          {type}
        </div>
        <div className="bg-violet-500 rounded-full text-white px-3 whitespace-nowrap">
          {country}
        </div>
      </div>
      <div className="text-lg font-semibold max-w-[260px]">{address}</div>
      <div className="flex gap-x-4 my-4">
        <div className="flex items-center text-gray-600 gap-1">
          <div>
            <BiBed size={20} />
          </div>
          <div>{bedrooms}</div>
        </div>
        <div className="flex items-center text-gray-600 gap-1">
          <div>
            <BiBath size={20} />
          </div>
          <div>{bathrooms}</div>
        </div>
        <div className="flex items-center text-gray-600 gap-1">
          <div>
            <BiArea size={20} />
          </div>
          <div className="whitespace-nowrap">{surface}</div>
        </div>
      </div>
      <div className="text-lg font-semibold text-violet-600 mb-4 whitespace-nowrap">
        ${price}
      </div>
    </div>
  );
};

export default House;
