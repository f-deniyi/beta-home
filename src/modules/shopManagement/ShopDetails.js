import React, { useState } from "react";

import BaseDashboardNavigation from "../../generalComponents/BaseDashboardNavigation";

import { AiOutlinePlus } from "react-icons/ai";
// import CategoryCard from "./components/CategoryCard";
// import AddCategory from "./components/AddCategory";
import useGetShopsQuery from "./controllers/get_shops";
import Loader from "../../generalComponents/Loader";
import {
  locationIcon,
  verifiedIcon,
  product,
  services,
} from "../../assets/icons";
import { formatAddress } from "../../utils/format_address";
import { formatMonth } from "../../utils/format_month";
import { useParams } from "react-router-dom";
import UseGetShopDetailsQuery from "./controllers/get_shop_details";
import useGetShopsProductsQuery from "./controllers/get_shops_products";
import ProductGrid from "../products/components/ProductGrid";
import ServiceCard from "../services/components/ServicesCard";
import ProductOrders from "../products/view/orders";
import useGetProductOrdersManager from "../products/controllers/get_product_orders_controller";
import useGetOrderStatusManager from "../products/controllers/get_order_statuses";
import ServicesOrder from "../services/components/ServicesOrder";
import useGetAllServiceRequest from "../services/controller.js/get_all_requests";
import CustomButton from "../../generalComponents/Button";
import { VerifyShopMutation } from "./controllers/verify_shop";
import UseSuspendShop, { SuspendShopManager } from "./controllers/suspend_shop";

const ShopDetails = () => {
  const params = useParams();
  const { shopId } = params;
  const [activePage, setActivePage] = useState(1);
  const [activeTab, setActiveTab] = useState(1);
  const handlePage = (page) => {
    setActivePage(page);
  };
  const { isLoading, data } = useGetShopsQuery({ enabled: true });
  const { shop, isLoading: fetching } = UseGetShopDetailsQuery({
    enabled: Boolean(shopId),
    shopId,
  });

  const {
    products,
    pagination,
    isLoading: fetchingShopProducts,
  } = useGetShopsProductsQuery({
    enabled: Boolean(shopId),
    shopId,
    page: activePage,
  });

  const {
    isLoading: ordersLoading,
    data: orders,
    pagination: ordersPagination,
    refetch,
  } = useGetProductOrdersManager({
    enable: Boolean(shopId),
    shop: shopId,
  });

  const {
    isLoading: loadingStatuses,
    data: statuses,
    isSuccess: fetchedStatuses,
  } = useGetOrderStatusManager();

  const { requests, pagination: servicesPagination } = useGetAllServiceRequest({
    enabled: Boolean(shopId),
    shop: shopId,
  });

  const { verifyShop, isLoading: verifying } = VerifyShopMutation({
    shopId: shopId,
  });

  const { suspendShop, isLoading: suspending } = SuspendShopManager({
    shopId: shopId,
  });

  // console.log('---statutes---', statuses.data)

  return (
    <BaseDashboardNavigation title={"Shop Management"} hideSearch={true}>
      {isLoading || fetching || fetchingShopProducts ? (
        <Loader />
      ) : (
        <>
          <div class="relative w-full">
            <div
              class="bg-cover bg-center h-[207px]  rounded-bl-[10px] rounded-br-[10px] w-full shadow-lg"
              style={{ backgroundImage: `url(${shop?.cover_image?.original})` }}
            ></div>
            <div class="absolute bottom-[0px] left-[80px] transform -translate-x-1/2 translate-y-1/2 rounded-full overflow-hidden border-4 border-brandPrimary">
              <img
                class="object-cover h-[120px] w-[120px] "
                src={shop?.logo?.original}
                alt="Profile Picture"
              />
            </div>
            <div class="absolute top-[10px] right-[20px] flex items-center">
              <CustomButton
                buttonText={!shop.isVerified ? "Verify" : "Unverify"}
                isLoading={verifying}
                disabled={verifying}
                className={
                  !shop?.isVerified
                    ? "rounded-full bg-green-600 text-white shadow-xl flex items-center justify-center px-6 py-2 !hover:bg-green-700"
                    : "rounded-full bg-rose-700 text-white shadow-xl  mr-[5px] flex items-center justify-center px-6 py-2"
                }
                onClick={(e) => {
                  console.log(e);
                  verifyShop({
                    verified: !shop?.isVerified,
                  });
                }}
              />
              <div className="divider divider-horizontal w-[0.3px] bg-[#A5A5A5]" />
              <CustomButton
                buttonText={!shop.isSuspended ? "Suspend" : "Unsuspend"}
                isLoading={suspending}
                disabled={suspending}
                className={
                  "rounded-full bg-slate-700 text-white shadow-lg  flex items-center justify-center px-6 py-2"
                }
                onClick={(e) => {
                  // console.log(e)
                  suspendShop();
                }}
              />
            </div>
          </div>
          <div class="ml-40 flex items-center justify-between">
            <div className="mt-3 ">
              <div className="flex items-center ">
                <h3 className="text-[21.457px] text-black font-medium mr-2">
                  {shop?.name}
                </h3>
                {shop?.isVerified && (
                  <img
                    src={verifiedIcon}
                    className="object-cover h-[15px] w-[15px] p-[0.7px] rounded-full "
                  />
                )}
              </div>
              <div className="flex items-center mb-2">
                <img
                  src={locationIcon}
                  className="object-cover  p-[0.7px] rounded-full mr-1"
                />
                <p className="text-[15.735px] text-[#696969] font-normal mr-2">
                  {formatAddress(shop?.address)}
                </p>
              </div>
              <div className="flex items-center ">
                <p className="bg-brandPrimary border-1 border-black rounded-full font-medium px-2 py-1 text-[11.44px] me-2">
                  Created
                </p>
                <p className="font-light text-[11.444px] text-[#69696]">{`${formatMonth(
                  shop?.createdAt
                )} ago`}</p>
              </div>
            </div>
            <div class="">
              <div className="flex">
                <button
                  className="rounded-full bg-brandPrimary  mr-[10px] flex items-center justify-center px-5 py-4"
                  onClick={() =>
                    document.getElementById("product_orders").showModal()
                  }
                >
                  <img
                    src={product}
                    alt="icon"
                    className="w-[14px] h-[14px] mr-2"
                  />
                  <p className="text-[13px] font-medium">View Product Order</p>
                </button>
                <div className="divider divider-horizontal w-[0.3px] bg-[#A5A5A5]" />
                <button
                  className="rounded-full bg-brandPrimary  mr-[10px] flex items-center justify-center px-5 py-4"
                  onClick={() =>
                    document.getElementById("services_request").showModal()
                  }
                >
                  <img
                    src={services}
                    alt="icon"
                    className="w-[14px] h-[14px] mr-2"
                  />
                  <p className="text-[13px] font-medium">View Service Order</p>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full mt-8">
            <div className="tabs w-full flex">
              <a
                className={`tab tab-bordered  ${
                  activeTab === 1 ? "tab-active border-brandPrimary" : ""
                } w-1/2 text-[15px] font-semibold`}
                onClick={() => {
                  setActiveTab(1);
                }}
              >
                Products
              </a>
              <a
                className={`tab tab-bordered  ${
                  activeTab === 2 ? "tab-active" : ""
                } w-1/2 text-[15px] font-semibold`}
                onClick={() => {
                  setActiveTab(2);
                }}
              >
                Services
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 mt-5">
            {activeTab === 1 ? (
              <ProductGrid
                products={products}
                pagination={pagination}
                paginationChange={handlePage}
              />
            ) : (
              <div className="flex flex-wrap gap-5">
                {shop?.categories.map((item, index) => (
                  <ServiceCard type={"brand"} category={item} />
                ))}
              </div>
            )}
          </div>

          <ProductOrders
            orders={orders?.orders}
            pagination={pagination}
            orderStatuses={statuses?.data}
            refetch={() => {
              refetch();
            }}
          />

          <ServicesOrder requests={requests} pagination={servicesPagination} />
        </>
      )}
    </BaseDashboardNavigation>
  );
};

export default ShopDetails;
