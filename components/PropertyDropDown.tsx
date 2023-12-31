import React, { useState, useEffect, useContext } from "react";

import {
  RiHome5Line,
  RiMapPinLine,
  RiArrowUpSLine,
  RiArrowDownSLine,
} from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseContext";
import { House } from ".";

const PropertyDropDown = () => {
  const houseContext = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  if (!houseContext) {
    return <div>Loading...</div>;
  }

  const { property, setProperty, properties } = houseContext;

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiHome5Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight w-full">
            {property}
          </div>
          <div className="text-[13px] whitespace-nowrap">Select your place</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {properties.map((property, index) => {
          return (
            <Menu.Item
              onClick={() => setProperty(property)}
              as="li"
              key={index}
              className="cursor-pointer hover:text-violet-700 transition whitespace-nowrap"
            >
              {property}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropDown;
