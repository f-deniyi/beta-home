import React from "react";
import { useLocation } from "react-router-dom";

const IconsWithText = ({ icon, text, iconSize, editText, className, path }) => {
  const location = useLocation();
  return (
    <div
      className={`hover:py-1.5 hover:px-3 hover:w-[190px] hover:mx-4 hover:rounded-full hover:bg-offCoffee duration-300 ${
        location.pathname === path
          ? `py-1.5 px-3 mx-4 rounded-full bg-brandOrange w-[190px] `
          : `mx-7`
      } flex space-x-5 justify-start text-[${iconSize}] ${className} items-center text-blackColor group`}
    >
      {icon}

      <h4 className={` ${editText ?? "text-16px  font-semibold"} `}>{text}</h4>
    </div>
  );
};

export default IconsWithText;
