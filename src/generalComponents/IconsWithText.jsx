import React, { useState } from "react";
import { useLocation } from "react-router-dom";


const IconsWithText = ({ icon, text, iconSize, editText, className, path, activeIcon }) => {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`hover:py-1.5 hover:px-3 hover:text-white hover:cursor-pointer  hover:rounded-full hover:bg-[#000000B3] duration-300 ${location.pathname === path
        ? `py-1.5 px-3  rounded-full bg-black w-full text-white`
        : `px-3`
        } flex space-x-2 justify-start text-[${iconSize}] ${className} items-center text-blackColor group`}
    >
      {
        activeIcon ? <img src={location.pathname === path || isHovered ? activeIcon : icon} className="" /> : icon
      }


      <h4 className={` ${editText ?? "text-[12px]  font-[500]"} `}>{text}</h4>
    </div>
  );
};

export default IconsWithText;
