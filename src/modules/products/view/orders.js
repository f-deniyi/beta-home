import React, { useEffect, useState } from "react";
import ModalManagement from "../../../generalComponents/ModalManagement";
import product from "../../../assets/images/product.png";
import { close } from "../../../assets/icons";
import useGetProductOrdersManager from "../controllers/get_product_orders_controller";
import Loader from "../../../generalComponents/Loader";
import useGetOrderStatusManager from "../controllers/get_order_statuses";
import { useLocation } from "react-router-dom";
import ProductOrderTable from "../components/OrderTable";

const ProductOrders = ({ isShop, shopId = "" }) => {
  const location = useLocation();
  const isAdmin = location.pathname.includes("/admin");
  const [orderStatuses, setOrderStatuses] = useState([{ name: "All", id: "" }]);
  const [choosenOrderStatus, setChoosenOrderStatus] = useState({
    name: "All",
    id: "",
  });
  const {
    isLoading: fetchingOrders,
    data: orders,
    refetch,
  } = useGetProductOrdersManager({
    filter: "",
    enable: true,
    shop: shopId,
    status: choosenOrderStatus.id,
  });

  const {
    isLoading: loadingStatuses,
    data: statuses,
    isSuccess: fetchedStatuses,
  } = useGetOrderStatusManager();

  useEffect(() => {
    console.log("statuses:", statuses);

    if (fetchedStatuses && statuses) {
      let formattedStatuses = statuses.data;
      const newOrderStatus = [{ name: "All", id: "" }];

      newOrderStatus.push(...formattedStatuses);
      console.log("newOrderStatus:", newOrderStatus);

      setOrderStatuses(newOrderStatus);
    }
  }, [statuses, fetchedStatuses]);

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
                  className={`py-[10px] px-[20px] text-[#696969] font-medium text-[12px] cursor-pointer ${
                    choosenOrderStatus.name !== el.name
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
            orders={orders.orders}
            isAdmin={isAdmin}
          />
        </div>
      )}
    </ModalManagement>
  );
};

export default ProductOrders;
