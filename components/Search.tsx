import React, { useContext } from "react";
import CountryDropDown from "./CountryDropDown";
import PropertyDropDown from "./PropertyDropDown";
import PriceRangeDropdown from "./PriceRangeDropdown";

import { RiSearch2Line } from "react-icons/ri";
import { HouseContext } from "./HouseContext";

const Search = () => {
  const houseContext = useContext(HouseContext);

  if (!houseContext) {
    return <div>Loading...</div>;
  }

  const { handleClick } = houseContext;

  return (
    <div
      className="px-[30px] py-6 max-w-[1170px] mx-auto flex 
    flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4
    lg:shadow-lg lg: bg-transparent lg:backdrop-blur rounded-lg"
    >
      <CountryDropDown />
      <PropertyDropDown />
      <PriceRangeDropdown />
      <button
        onClick={() => handleClick()}
        className="bg-violet-700 hover:bg-violet-800 transition 
      w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg"
      >
        <RiSearch2Line />
      </button>
    </div>
  );
};

export default Search;
