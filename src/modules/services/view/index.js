import React, { useState } from "react";
import BaseDashboardNavigation from "../../../generalComponents/BaseDashboardNavigation";
import ServicesTable from "../components/table";
import useGetShopsQuery from "../../shopManagement/controllers/get_shops";
import useGetUserDetailsManager from "../../../modules/settings/controllers/get_UserDetails_controller";
import ServicesCard from "../components/ServicesCard";
import { cart, new_cart } from "../../../assets/icons";
import useGetProviderServiceRequest from "../controller.js/get_service_request";
import ServicesOrder from "../components/ServicesOrder";

const ServicesManagement = () => {

    const { data } = useGetUserDetailsManager();

    const {
        data: userShop,
        isError,
        error,
        isLoading,
    } = useGetShopsQuery({
        enabled: Boolean(data?.data?.user),
        owner_id: data?.data?.user?.id
    });
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

    console.log('---user-shop---', userShop)

    const { requests, pagination } = useGetProviderServiceRequest({ enabled: true })

    return (
        <BaseDashboardNavigation title={"Service Managment"} hideSearch={false}>
            <div>
                <div className="flex items-center justify-between mt-3 mb-4">
                    <h3 className="text-[20px]">All Services</h3>
                    <div className="flex">
                        <div className="relative  me-2">
                            <div className="relative top-0 right-0 flex items-center justify-center cursor-pointer" onClick={() => document.getElementById('services_request').showModal()}>
                                <img src={cart} alt="Notification Icon" />
                                <p className="h-[15px] w-[15px] flex items-center justify-center bg-[#FF0000] text-white text-[10px] font-medium rounded-full  absolute top-0 right-0">{requests?.length}</p>

                            </div>
                        </div>
                        <div className="flex items-center">

                            <button className="bg-brandPrimary px-6 py-5 rounded-full px-3 text-[15px] font-medium " onClick={() => document.getElementById('add_product').showModal()} >
                                +Add a service
                            </button>
                        </div>

                    </div>


                </div>
            </div>
            <div className="bg-white rounded-[10px] px-4 py-5 ">
                {/* <div className='flex gap-2 mb-1'>
                    {
                        orderStatus.map(el => <p
                            onClick={() => {
                                setSelectedOrder(el)
                            }}
                            className={`py-[10px] px-[20px] text-[#696969] font-medium text-[12px] cursor-pointer ${selectedOrder !== el ? 'bg-[#F2F2F2]' : 'bg-brandPrimary text-black'} rounded-[20px] `}>{el}</p>)
                    }
                </div> */}
                {/* <div className="bg-whit rounded-lg p px-[23px] "> */}
                <div className="flex flex-wrap gap-5">
                    {userShop?.shops[0]?.categories.map((item, index) => (
                        <ServicesCard type={'brand'} category={item} />
                    ))}
                </div>
                {/* </div> */}
                {/* <ServicesTable /> */}
                <ServicesOrder requests={requests} pagination={pagination} />
            </div>
        </BaseDashboardNavigation >
    );
};

export default ServicesManagement;
