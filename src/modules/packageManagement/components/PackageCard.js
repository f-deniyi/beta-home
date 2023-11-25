import React from "react";
import { productCategory, brand, beta } from "../../../assets/icons";
import PackageDetails from "./PackageDetails";

const PackageCard = ({ packageDetails, onClick }) => {
  return (
    <>
      <div
        className="cursor-pointer "
        onClick={() => {
          onClick();
        }}
      >
        <div
          className={` bg-white  h-[168.59px] w-[168.59px] flex justify-start items-end  rounded-lg `}
          style={{ backgroundImage: `url(${beta})`, backgroundSize: "cover" }}
        >
          <p className="text-[25px] font-semibold mb-4 ml-2">
            {packageDetails.title}
          </p>
        </div>
      </div>
    </>
  );
};

export default PackageCard;
