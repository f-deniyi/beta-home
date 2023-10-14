import React, { useState } from "react";

import BaseDashboardNavigation from "../../generalComponents/BaseDashboardNavigation";

import { AiOutlinePlus } from 'react-icons/ai'
import CategoryCard from "./components/BannerCard";
import UploadBanner from "./components/UploadBanner";

const ShopManagement = () => {
    const items = [...Array(9).keys()];

    return (
        <BaseDashboardNavigation title={"Promotion Management"} hideSearch={true}>
            <div className="mb-5">
                <div className="flex items-center justify-between mt-2 mb-6">
                    <p className="text-[20px] font-normal ">List of promotional banners</p>
                    <div>
                        <button className="bg-brandPrimary flex  py-3 shadow-lg px-[25px] rounded-full " onClick={() => {
                            document.getElementById('upload_banner').showModal()
                        }}>
                            <p className="text-[12px] font-medium">+Upload Banner</p>
                        </button>
                    </div>
                </div>
                <div className="bg-white rounded-lg py-[38px] px-[23px] ">
                    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-3 gap-5">
                        {items.map((item, index) => (
                            <CategoryCard type={index } />
                        ))}
                    </div>
                </div>
            </div>


            <UploadBanner  />

        </BaseDashboardNavigation>
    );
};

export default ShopManagement;
