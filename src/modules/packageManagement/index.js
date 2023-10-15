import React, { useState } from "react";

import BaseDashboardNavigation from "../../generalComponents/BaseDashboardNavigation";

import { AiOutlinePlus } from 'react-icons/ai'
import PackageCard from "./components/PackageCard";
import AddCategory from "./components/AddPackage";

const ShopManagement = () => {
    const items = [...Array(10).keys()];
    const brandItems = [...Array(3).keys()];
    const [categoryType, setCategoryType] = useState('product')

    return (
        <BaseDashboardNavigation title={"Package Management"} hideSearch={true}>
            <div className="mb-5">
                <div className="flex items-center justify-between mt-2 mb-6">
                    <p className="text-[20px] font-normal ">List of packages</p>
                    <div>
                        <button className="bg-brandPrimary flex  py-3 shadow-lg px-[25px] rounded-full " onClick={() => {
                            setCategoryType('product')
                            document.getElementById('add_category').showModal()
                        }}>
                            {/* <AiOutlinePlus /> */}
                            <p className="text-[12px] font-medium">+Add a Package</p>
                        </button>
                    </div>
                </div>
                <div className="bg-white rounded-lg py-[23px] px-[25px]  ">
                    <div className="flex flex-wrap gap-3">
                        {items.map((item, index) => (
                            <PackageCard />
                        ))}
                    </div>
                </div>
            </div>
           

            <AddCategory type={categoryType} />

        </BaseDashboardNavigation>
    );
};

export default ShopManagement;
