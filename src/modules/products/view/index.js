import React from "react";
import BaseDashboardNavigation from "../../../generalComponents/BaseDashboardNavigation";
import { cart } from "../../../assets/icons";
import ProductGrid from "../components/ProductGrid";
import AddProduct from "../components/AddProduct";

const ProductsManagement = () => {
    return (
        <BaseDashboardNavigation title={"Product Managment"} hideSearch={false}>
            <div>
                <div className="flex items-center justify-between mt-3 mb-4">
                    <h3 className="text-[20px]">List of uploaded products</h3>
                    <div className="flex items-center">
                        <div className="relative  me-2">
                            <div className="relative top-0 right-0 flex items-center justify-center">
                                <img src={cart} alt="Notification Icon" />
                                <p className="h-[15px] w-[15px] flex items-center justify-center bg-[#FF0000] text-white text-[10px] font-medium rounded-full  absolute top-0 right-0">3</p>

                            </div>
                        </div>
                        <button className="bg-brandPrimary px-6 py-5 rounded-full px-3 text-[15px] font-medium " onClick={() => document.getElementById('add_product').showModal()} >
                            +Add a product
                        </button>
                    </div>

                </div>
                <div className="bg-white rounded-lg p-3">
                    <ProductGrid />
                </div>
            </div>
            <AddProduct />
        </BaseDashboardNavigation >
    );
};

export default ProductsManagement;
