import React, { useState } from "react";
import BaseDashboardNavigation from "../../../generalComponents/BaseDashboardNavigation";
import ServicesTable from "../components/table";

const ProductsManagement = () => {
    const [selectedOrder, setSelectedOrder] = useState('All')
    const orderStatus = [
        'All',
        'Pending',
        'Accepted',
        'Ongoing',
        'Declined',
        'Cancelled',
        'Confirmed'
    ]

    return (
        <BaseDashboardNavigation title={"Service Managment"} hideSearch={false}>
            <div>
                <div className="flex items-center justify-between mt-3 mb-4">
                    <h3 className="text-[20px]">Service Orders</h3>
                </div>
            </div>
            <div className="bg-white p-5 rounded-[10px] ">
                <div className='flex gap-2 mb-1'>
                    {
                        orderStatus.map(el => <p
                            onClick={() => {
                                setSelectedOrder(el)
                            }}
                            className={`py-[10px] px-[20px] text-[#696969] font-medium text-[12px] cursor-pointer ${selectedOrder !== el ? 'bg-[#F2F2F2]' : 'bg-brandPrimary text-black'} rounded-[20px] `}>{el}</p>)
                    }
                </div>
                <ServicesTable />
            </div>
        </BaseDashboardNavigation >
    );
};

export default ProductsManagement;
