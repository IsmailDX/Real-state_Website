import React, { useState, useEffect, useContext } from "react";

import { RiMapPinLine, RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { HouseContext } from "./";
import { House } from ".";

const CountryDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiMapPinLine className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">country</div>
          <div className="text-[13px]">Select your place</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        <Menu.Item
          as="li"
          className="cursor-pointer hover:text-violet-700 transition"
        >
          Egypt
        </Menu.Item>
        <Menu.Item
          as="li"
          className="cursor-pointer hover:text-violet-700 transition"
        >
          UAE
        </Menu.Item>
        <Menu.Item
          as="li"
          className="cursor-pointer hover:text-violet-700 transition"
        >
          Saudi Arabia
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default CountryDropDown;
