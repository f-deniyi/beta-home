import React, { useEffect, useState } from "react";
import ModalManagement from "../../../generalComponents/ModalManagement";
import product from "../../../assets/images/product.png";
import { close } from "../../../assets/icons";
import Loader from "../../../generalComponents/Loader";
import { useLocation } from "react-router-dom";
import ProductOrderTable from "../components/OrderTable";

const ProductOrders = ({
  loadingStatuses,
  fetchingOrders,
  orderStatuses,
  setChoosenOrderStatus,
  choosenOrderStatus,
  orders
}) => {
  const location = useLocation();
  const isAdmin = location.pathname.includes("/admin");



  return (
    <ModalManagement id="product_orders" type="large">
      {loadingStatuses || fetchingOrders ? (
        <Loader />
      ) : (
        <div
          style={{
            width: "100%",
          }}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-[18px] font-medium ">Product Order</p>
              <p className="text-[12px] font-normal ">
                {isAdmin
                  ? "List of products orders"
                  : "List of product orders you have."}
              </p>
            </div>
            <div
              onClick={() => document.getElementById("product_orders").close()}
              role="button"
            >
              <img src={close} alt="close-icon" className="h-[23px] w-[23px]" />
            </div>
          </div>
          {
            <div className="flex gap-1 mb-3 flex-wrap">
              {orderStatuses?.map((el) => (
                <p
                  onClick={() => {
                    setChoosenOrderStatus(el);
                  }}
                  className={`py-[10px] px-[20px] text-[#696969] font-medium text-[12px] cursor-pointer ${choosenOrderStatus.name !== el.name
                    ? "bg-[#F2F2F2]"
                    : "bg-brandPrimary text-black"
                    } rounded-[20px] `}
                >
                  {el.name}
                </p>
              ))}
            </div>
          }
          <ProductOrderTable
            statuses={orderStatuses}
            orders={orders?.orders}
            isAdmin={isAdmin}
          />
        </div>
      )}
    </ModalManagement>
  );
};

export default ProductOrders;
