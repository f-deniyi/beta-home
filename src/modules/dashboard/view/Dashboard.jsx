import React, { useEffect, useState } from "react";
import BaseDashboardNavigation from "../../../generalComponents/BaseDashboardNavigation";
import coverImage from '../../../assets/images/vendor_cover.png'
import background from '../../../assets/images/background.png'
import { verifiedIcon, locationIcon, accountOutline, walletOutline, rightArrow } from "../../../assets/icons";
// import ServicesTable from "../../../constants/Table/Services";
import ProductTable from "../../../constants/Table/Products";
import useGetShopsQuery from "../../shopManagement/controllers/get_shops";
import useGetUserDetailsManager from "../../../modules/settings/controllers/get_UserDetails_controller";
import { formatAddress } from "../../../utils/format_address";
import { formatMonth } from "../../../utils/format_month";
import Loader from "../../../generalComponents/Loader";
import useGetProviderServiceRequest from "../../services/controller.js/get_service_request";
import ServicesOrder from "../../services/components/ServicesOrder";
import EmptyContent from "../../../generalComponents/EmptyContent";
import ServicesTable from "../../services/components/table";
import ProductOrderTable from "../../products/components/OrderTable";
import useGetProductOrdersManager from "../../products/controllers/get_product_orders_controller";
import ProductOrders from "../../products/view/orders";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate()
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

  // console.log('my-shop', userShop)


  const { requests, pagination, isLoading: fetchingRequests } = useGetProviderServiceRequest({ enabled: true })
  const { isLoading: fetchingOrders, data: orders, refetch, } = useGetProductOrdersManager({ filter: "", enable: true, shop: userShop?.shops[0]?.id });

  return (
    <BaseDashboardNavigation title={"Dashboard"} hideSearch={false}>
      {
        isLoading || fetchingRequests || fetchingOrders ? <Loader /> :

          userShop?.shops.length > 0 ? <>
            <div class="relative w-full">
              <div class="bg-cover bg-center h-[207px]  rounded-bl-[10px] rounded-br-[10px] w-full" style={{ backgroundImage: `url(${userShop?.shops[0]?.cover_image?.original})` }}></div>
              <div class="absolute bottom-[0px] left-[80px] transform -translate-x-1/2 translate-y-1/2 rounded-full overflow-hidden border-4 border-brandPrimary">
                <img class="object-cover h-[120px] w-[120px] " src={userShop?.shops[0]?.logo?.original} alt="Profile Picture" />
              </div>

              <div class="absolute bottom-[0px] right-[0px] transform -translate-x-1/2 translate-y-1/2  overflow-hidden ">
                <div className="flex">
                  <div className="rounded-full bg-brandPrimary h-[50px] w-[50px] mr-[10px] flex items-center justify-center">
                    <img src={walletOutline} className="object-cover " />
                  </div>
                  <div className="rounded-full bg-brandPrimary h-[50px] w-[50px]  flex items-center justify-center">
                    <img src={accountOutline} className="object-cover " />
                  </div>
                </div>
              </div>
            </div>
            <div class="ml-40">
              <div className="mt-3">
                <div className="flex items-center ">
                  <h3 className="text-[21.457px] text-black font-medium mr-2">{userShop?.shops[0]?.name}</h3>
                  {
                    userShop?.shops[0]?.is_verified && <img src={verifiedIcon} className="object-cover h-[15px] w-[15px] p-[0.7px] rounded-full " />
                  }

                </div>
                <div className="flex items-center mb-2">
                  <img src={locationIcon} className="object-cover  p-[0.7px] rounded-full mr-1" />
                  <p className="text-[15.735px] text-[#696969] font-normal mr-2">{formatAddress(userShop?.shops[0]?.address)}</p>
                </div>
                <div className="flex items-center ">
                  <p className="bg-brandPrimary border-1 border-black rounded-full font-medium px-2 py-1 text-[11.44px] me-2">Created</p>
                  <p className="font-light text-[11.444px] text-[#69696]">{`${formatMonth(userShop?.shops[0]?.createdAt)} ago`}</p>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center justify-between mt-3 mb-2">
                <h3 className="text-[15px] font-medium">Service Orders</h3>
                <div className="flex items-center cursor-pointer">
                  <p className="pe-2 text-[#4F4F4F] text-[12px] " onClick={() => {
                    document.getElementById("services_request").showModal()
                  }}>See all </p>
                  <div ><img src={rightArrow} /></div>
                </div>

              </div>
              <div className="bg-white  px-3 rounded-lg py-3">
                {/* <ServicesTable requests={requests}/>
               */}
                {
                  requests?.length > 0 ?
                    <ServicesTable pagination={null} requests={requests?.slice(0, 2)} selectedOrder={'All'} />
                    : <EmptyContent content='No order yet' className={'h-[150px] w-full '}/>
                }
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mt-3 mb-2">
                <h3 className="text-[15px] font-medium">Product Orders</h3>
                <div className="flex items-center cursor-pointer" onClick={() => {
                  document.getElementById("product_orders").showModal()
                }}>
                  <p className="pe-2 text-[#4F4F4F] text-[12px]">See all </p>
                  <div ><img src={rightArrow} /></div>
                </div>

              </div>
              <div className="bg-white  px-3 rounded-lg py-3">
                {
                  orders?.orders?.length > 0
                    ? <ProductOrderTable
                      orders={orders?.orders?.slice(0, 2)}
                      isAdmin={false}
                    /> : <EmptyContent content='No order yet' className={'h-[150px] w-full '} />
                }

              </div>
            </div>
          </> : <div className="h-[80vh] w-full flex items-center justify-center flex-col">
            <EmptyContent className='h-[300px] w-[300px]' content={'You don\'t have a shop yet'} />
            <div className='flex items-center justify-center'>
              <button className='bg-brandPrimary py-3 px-4 mt-4 rounded-md'
                onClick={() => {
                  navigate('/vendorshop-settings')
                }
                }
              >
                Create Shop
              </button>
            </div>
          </div>


      }
      <ServicesOrder requests={requests} pagination={pagination} />
      <ProductOrders
        orders={orders?.orders}
        pagination={pagination}
        // orderStatuses={orderStatuses}
        refetch={() => {
          refetch();
        }}
      />
    </BaseDashboardNavigation >
  );
};

export default Dashboard;
