import React from "react";
import menu from "./menu";
import { arrowRight } from "../../../../assets/icons";
import { useLocation } from "react-router-dom";


const ShopManagementWrapper = ({ title, setTitle, children, hasShop,isAdmin }) => {
  let location = useLocation();
  // const isAdmin = location.pathname.includes("/admin");
  return (
    <>
      <div className="relative  flex  w-full text-blackColor">
        <div
          className={`hidden md:flex ease-in-out duration-500 w-[30%] bg-[#fff] z-50 pt-[20px]  md:overflow-auto scrollbar-hide  flex-col  items-start space-y-4  pb-10 rounded-[10px] h-[calc(100vh-116px)] px-[10px]`}
        >
          {menu
            .filter((item) => (!hasShop ? item.hasShop : true))
            .filter((item) => (!isAdmin ? !item.belongsToAdmin : true))

            .map((el) => (
              <div
                className={`flex items-center justify-between ${el.name === title ? "bg-brandPrimary rounded-full" : ""
                  } w-full pl-[16px] pr-2 py-[10px] text-[12px] font-normal cursor-pointer`}
                onClick={() => {
                  setTitle(el.name);
                }}
              >
                <div className="flex items-center gap-2">
                  <img src={el?.icon} alt="icon" />
                  <p>{el?.name}</p>
                </div>
                <div>
                  <img src={arrowRight} alt="icon" />
                </div>
              </div>
            ))}
        </div>

        <div className="w-full">
          <div className=" ">
            <div className="text-left ml-3 z-40 bg-white rounded-[10px] px-4 py-[15px] mb-[12px]">
              <div className="">
                <h3 className="text-[20px] font-semibold ">{title}</h3>
              </div>
            </div>
            <div className=" ml-3  pb-10 h-full"> {children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopManagementWrapper;
