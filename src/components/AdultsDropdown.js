import React, { useContext } from "react";
import { RoomContext } from "../context/RoomContext";
import { BsChevronDown } from "react-icons/bs";
import { Menu } from "@headlessui/react";

const list = [
  { name: "1 Person" },
  { name: "2 Person" },
  { name: "3 Person" },
  { name: "4 Person" },
];

const AdultsDropdown = () => {
  const { adults, setAdults } = useContext(RoomContext);

  return (
    <Menu as="div" className="w-full h-full bg-white relative">
      <Menu.Button className="w-full h-full flex justify-between items-center px-8">
        {adults}
        <BsChevronDown className="text-base text-accent-hover" />
      </Menu.Button>
      <Menu.Items
        as="ul"
        className="bg-white absolute w-full flex flex-col z-40"
      >
        {list.map((li, i) => {
          return (
            <Menu.Item
              as="li"
              key={i}
              onClick={() => setAdults(li.name)}
              className="border-b last-of-type:border-b-0 h-12 hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer"
            >
              {li.name}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default AdultsDropdown;
