import React, { useEffect, useState } from "react";
import { productCategory, brand } from "../../../assets/icons";
import CategoryDetails from "./CategoryDetails";

const CategoryCard = ({
  categoryDetails,
  details,
  icon = productCategory,
  name = "Home Decor",
  count = "1500",
  onClick,
  type,
  image,
  item
}) => {
 
  return (
    <>
      <div
        className="cursor-pointer"
        onClick={() => {
          onClick();
          document.getElementById("category_details").showModal();
        }}
      >

        <div
          className={`${type !== "brand"
            ? "bg-brandPrimary"
            : "bg-white border border-1 border-[#828282] border-solid "
            } h-[124px] w-[124px] flex justify-center items-center mb-[15px] rounded-lg`}
        >
          <img
            src={type === "brand" ? image ?? brand : icon}
            alt={name}
            className={type === "brand" ? "object-cover h-full w-full" : "object-cover "}
          />
        </div>
        <p className="text-[15px] font-normal mb-2 text-center">{name}</p>
        {/* <p className="text-[15px] font-normal mb-2 bg-black rounded-full text-white text-[10px] font-medium py-2 px-3 text-center">{`${count}/products`}</p> */}
      </div>
      
    </>
  );
};

export default CategoryCard;
