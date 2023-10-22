import React, { useState, useEffect, useContext } from "react";

import {
  RiWallet3Line,
  RiMapPinLine,
  RiArrowUpSLine,
  RiArrowDownSLine,
} from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseContext";
import { House } from ".";

const PriceRangeDropDown = () => {
  const houseContext = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  if (!houseContext) {
    return <div>Loading...</div>;
  }

  const { price, setPrice } = houseContext;

  const prices = [
    "Price Range (any)",
    "100,000 - 130,000",
    "130,000 - 180,000",
    "180,000 - 240,000",
    "240,000 - 300,000",
  ];

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiWallet3Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{price}</div>
          <div className="text-[13px]">Choose price range</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {prices.map((priceOption, index) => {
          return (
            <Menu.Item
              onClick={() => setPrice(priceOption)}
              as="li"
              key={index}
              className="cursor-pointer hover:text-violet-700 transition"
            >
              {priceOption}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropDown;
