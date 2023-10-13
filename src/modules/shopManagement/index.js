import React, { useState } from "react";

import BaseDashboardNavigation from "../../generalComponents/BaseDashboardNavigation";

import { AiOutlinePlus } from 'react-icons/ai'
import CategoryCard from "./components/CategoryCard";
import AddCategory from "./components/AddCategory";

const ShopManagement = () => {
    const items = [...Array(10).keys()];
    const brandItems = [...Array(3).keys()];
    const [categoryType, setCategoryType] = useState('product')

    return (
        <BaseDashboardNavigation title={"Shop Management"} hideSearch={true}>
            <div className="mb-5">
                <div className="flex items-center justify-between my-3">
                    <p className="text-[20px] font-normal mb-3">Product Category</p>
                    <div>
                        <button className="bg-brandPrimary flex  py-3 shadow-lg px-[25px] rounded-full " onClick={() => {
                            setCategoryType('product')
                            document.getElementById('add_category').showModal()
                        }}>
                            <AiOutlinePlus />
                            <p className="text-[12px] font-medium">Add a Category</p>
                        </button>
                    </div>
                </div>
                <div className="bg-white rounded-lg py-[38px] px-[23px] ">
                    <div className="flex flex-wrap gap-5">
                        {items.map((item, index) => (
                            <CategoryCard />
                        ))}
                    </div>
                </div>
            </div>
            <div className="mb-5">

                <div className="flex items-center justify-between my-3">
                    <p className="text-[20px] font-normal mb-3">Service Category</p>
                    <div>
                        <button className="bg-brandPrimary flex  py-3 shadow-lg px-[25px] rounded-full " onClick={() => {
                            setCategoryType('service')
                            document.getElementById('add_category').showModal()
                        }}>
                            <AiOutlinePlus />
                            <p className="text-[12px] font-medium">Add a Category</p>
                        </button>
                    </div>
                </div>
                <div className="bg-white rounded-lg py-[38px] px-[23px] ">
                    <div className="flex flex-wrap gap-5">
                        {items.map((item, index) => (
                            <CategoryCard />
                        ))}
                    </div>
                </div>
            </div>

            <div className="mb-5">

                <div className="flex items-center justify-between my-3">
                    <p className="text-[20px] font-normal mb-3">Brand Category</p>
                    <div>
                        <button className="bg-brandPrimary flex  py-3 shadow-lg px-[25px] rounded-full " onClick={() => {
                            setCategoryType('brand')
                            document.getElementById('add_category').showModal()
                        }}>
                            <AiOutlinePlus />
                            <p className="text-[12px] font-medium">Add a Category</p>
                        </button>
                    </div>
                </div>
                <div className="bg-white rounded-lg py-[38px] px-[23px] ">
                    <div className="flex flex-wrap gap-5">
                        {brandItems.map((item, index) => (
                            <CategoryCard type={'brand'} />
                        ))}
                    </div>
                </div>
            </div>

            <AddCategory type={categoryType} />

        </BaseDashboardNavigation>
    );
};

export default ShopManagement;
