import React, { useState } from "react";

import BaseDashboardNavigation from "../../generalComponents/BaseDashboardNavigation";

import { AiOutlinePlus } from "react-icons/ai";
// import CategoryCard from "./components/CategoryCard";
// import AddCategory from "./components/AddCategory";
import useGetShopsQuery from "./controllers/get_shops";
import Loader from "../../generalComponents/Loader";
import { locationIcon, verifiedIcon } from "../../assets/icons";
import { formatAddress } from "../../utils/format_address";
import { formatMonth } from "../../utils/format_month";
import { useNavigate } from "react-router-dom";

const ShopManagement = () => {
  const navigate = useNavigate()
  const { isLoading, data } = useGetShopsQuery({ enabled: true });

  return (
    <BaseDashboardNavigation title={"Shop Management"} hideSearch={true}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 ">
            {data.shops.map((shop, index) => (
              <div className="flex flex-col bg-whiteColor h-[184px] w-full md:w-[266px] rounded-lg mb-5 cursor-pointer"
                onClick={() => {
                  navigate(`/admin/shop-details/${shop?._id}`)
                }}>
                <img
                  className="w-full rounded-t-lg h-[77px]"
                  src={shop.cover_image?.original}
                  alt=""
                />
                <div className="flex flex-col -translate-y-1/3">
                  <div class="flex items-center justify-center w-full">
                    <div className="rounded-full border-[2px] border-brandPrimary ">
                      <img
                        class="object-cover rounded-full border-2 border-white h-[80px] w-[80px] "
                        src={shop.logo?.original}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="mt-0">
                    <div className="flex items-center justify-center w-full">
                      <h3 className="text-[15px] text-black font-medium mr-2">
                        {shop.name}
                      </h3>
                      <img
                        src={verifiedIcon}
                        className="object-cover h-[15px] w-[15px] p-[0.7px] rounded-full "
                      />
                    </div>
                    <div className="flex items-center justify-center w-full mb-0.5">
                      <img
                        src={locationIcon}
                        className="object-cover  p-[0.7px] rounded-full mr-1"
                        alt=""
                      />
                      <p className="text-[10px] text-[#696969] font-normal mr-0">
                        {formatAddress(shop.address)}
                      </p>
                    </div>
                    <div className="flex items-center justify-center w-full">
                      <p className="bg-brandPrimary border-1 border-black rounded-full font-medium px-2 py-0.5 text-[8px] me-2">
                        Created
                      </p>
                      <p className="font-light text-[8px] text-[#69696]">{`${formatMonth(
                        shop.createdAt
                      )} ago`}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </BaseDashboardNavigation>
  );
};

export default ShopManagement;
