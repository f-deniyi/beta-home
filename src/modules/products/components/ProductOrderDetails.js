import React, { useState } from "react";
import ModalManagement from "../../../generalComponents/ModalManagement";
import { close } from "../../../assets/icons";

import { formatAddress } from "../../../utils/format_address";
import moment from "moment";
import { Carousel } from "react-responsive-carousel";
import CustomButton from "../../../generalComponents/Button";

import { useLocation } from "react-router-dom";
import { UpdateOrderStatus } from "../controllers/update_order_status_controller";

const ProductOrderDetails = ({ orderDetails, statuses }) => {
  const location = useLocation();
  const [statusId, setStatusId] = useState();
  const { updateOrderStatusController, isLoading } = UpdateOrderStatus();
  const isAdmin = location.pathname.includes("/admin");

  return (
    <ModalManagement id="product-order-details">
      <div
        style={{
          width: "100%",
        }}
      >
        <div className="flex items-center flex-wrap justify-between mb-6">
          <div>
            <p className="text-[18px] font-medium ">Product Order Details</p>
          </div>
          <div
            onClick={() => {
              document.getElementById("product-order-details").close();
            }}
            role="button"
          >
            <img src={close} alt="close-icon" className="h-[23px] w-[23px]" />
          </div>
        </div>

        <div className="flex items-center flex-wrap justify-between mb-4">
          <p className="text-[#8E8E8E] text-[12px] font-medium">Category</p>
          <h3 className="text-[#212121] text-[15px] font-semibold">
            {orderDetails?.item.product.categories[0]?.name}
          </h3>
        </div>

        <div className="flex items-center flex-wrap justify-between mb-4">
          <p className="text-[#8E8E8E] text-[12px] font-medium">Product Name</p>
          <h3 className="text-[#212121] text-[15px] font-semibold">
            {orderDetails?.item?.product?.name}
          </h3>
        </div>

        <div className="flex items-center flex-wrap justify-between mb-4">
          <p className="text-[#8E8E8E] text-[12px] font-medium">
            Purchase Date
          </p>
          <h3 className="text-[#212121] text-[15px] font-semibold">
            {moment(orderDetails?.delivery_date).format("ll")}
          </h3>
        </div>

        <div className="flex items-center flex-wrap justify-between mb-4">
          <p className="text-[#8E8E8E] text-[12px] font-medium">
            Payment Status
          </p>
          <h3 className="text-[#212121] text-[15px] font-semibold">
            {orderDetails?.status?.name}
          </h3>
        </div>

        <div className="flex items-center flex-wrap justify-between mb-4">
          <p className="text-[#8E8E8E] text-[12px] font-medium">
            Shipping Address
          </p>
          <h3 className="text-[#212121] text-[15px] font-semibold">
            {orderDetails?.address?.address?.street_address}
          </h3>
        </div>

        <div className="flex items-center flex-wrap justify-between mb-4">
          <p className="text-[#8E8E8E] text-[12px] font-medium">Total Amount</p>
          <h3 className="text-[#212121] text-[15px] font-semibold">
            N{orderDetails?.total}
          </h3>
        </div>
        <select
          className={`border border-lightGrey w-full mb-10 bg-lightGrey/30 p-2 rounded-md outline-none focus:outline-none `}
          value={statusId}
          onChange={(e) => setStatusId(e.target.value)}
        >
          {statuses &&
            statuses.map((el, i) => <option value={el.id}>{el.name}</option>)}
        </select>
        {
          <div className="flex gap-x-2">
            <CustomButton
              isLoading={isLoading}
              buttonText={"Update Status"}
              className={
                "!text-[15px] font-light w-full mt-3 rounded-full mt-[25px] !bg-brandPrimary !py-[15px]"
              }
              onClick={() => {
                const details = {
                  orderId: orderDetails.id,
                  statusId: statusId,
                };
                updateOrderStatusController(details);
              }}
            />
          </div>
        }
      </div>
    </ModalManagement>
  );
};

export default ProductOrderDetails;
