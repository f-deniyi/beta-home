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
          document.getElementById("package_details").showModal();
        }}
      >
        <div
          className={` bg-white  h-[168.59px] w-[168.59px] flex justify-center items-center  rounded-lg`}
        >
          <img src={beta} alt={"beta_package"} className="object-cover" />
        </div>
      </div>
      {packageDetails && <PackageDetails packageDetails={packageDetails} />}
    </>
  );
};

export default PackageCard;
