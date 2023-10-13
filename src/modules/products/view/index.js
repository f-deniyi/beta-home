import React, { useState } from "react";
import BaseDashboardNavigation from "../../../generalComponents/BaseDashboardNavigation";
import { cart,new_cart } from "../../../assets/icons";
import ProductGrid from "../components/ProductGrid";
import AddProduct from "../components/AddProduct";
import ProductOrders from "./orders";
import { useLocation } from 'react-router-dom';

const ProductsManagement = () => {
    let location = useLocation();
    const isAdmin = location.pathname.includes('/admin');

    const [selectedCategory, setSelectedCategory] = useState('All')
    const productCategory = [
        'All',
        'Funiture',
        'Home Decor',
        'Kitchen & Dining',
        'Bed & Bath',
        'Home Improvement',
        'Home Electronics',
        'Home Cleaning',
        'Home Texlies',
        'Garden & Outdoor',
        'Pet Supplies'

    ]

    return (
        <BaseDashboardNavigation title={"Product Managment"} hideSearch={false}>
            <div>
                <div className="flex items-center justify-between mt-3 mb-4">
                    <h3 className="text-[20px]">List of uploaded products</h3>
                    {
                        isAdmin ?
                            <div className="flex items-center">
                                <button className="bg-brandPrimary px-6 py-5 rounded-full px-3 text-[15px] font-medium flex items-center gap-x-2" onClick={() => document.getElementById('product_orders').showModal()} >
                                    <img src={new_cart} alt="Notification Icon" />
                                    <p>View all orders</p>
                                </button>
                            </div> :
                            <div className="flex items-center">
                                <div className="relative  me-2">
                                    <div className="relative top-0 right-0 flex items-center justify-center cursor-pointer" onClick={() => document.getElementById('product_orders').showModal()}>
                                        <img src={cart} alt="Notification Icon" />
                                        <p className="h-[15px] w-[15px] flex items-center justify-center bg-[#FF0000] text-white text-[10px] font-medium rounded-full  absolute top-0 right-0">3</p>

                                    </div>
                                </div>
                                <button className="bg-brandPrimary px-6 py-5 rounded-full px-3 text-[15px] font-medium " onClick={() => document.getElementById('add_product').showModal()} >
                                    +Add a product
                                </button>
                            </div>
                    }
                </div>
                <div className="bg-white rounded-lg p-3">
                    {
                        isAdmin && <div className='flex flex-wrap gap-2 mb-5 mt-2'>
                            {
                                productCategory.map(el => <p
                                    onClick={() => {
                                        setSelectedCategory(el)
                                    }}
                                    className={`py-[10px] px-[20px] text-[#696969] font-medium text-[12px] cursor-pointer ${selectedCategory !== el ? 'bg-[#F2F2F2]' : 'bg-brandPrimary text-black'} rounded-[20px] `}>{el}</p>)
                            }
                        </div>
                    }

                    <ProductGrid />
                </div>
            </div>
            <AddProduct />
            <ProductOrders />
        </BaseDashboardNavigation >
    );
};

export default ProductsManagement;
