import React, { useEffect, useState } from "react";
import ModalManagement from "../../../generalComponents/ModalManagement";
import product from "../../../assets/images/product.png";
import { menu } from "../../../assets/icons";
import { close } from "../../../assets/icons";
import useGetProductOrdersManager from "../controllers/get_product_orders_controller";
import Loader from "../../../generalComponents/Loader";
import useGetOrderStatusManager from "../controllers/get_order_statuses";
import { useLocation } from "react-router-dom";

const ProductOrders = ({ refetch, orders, pagination, orderStatuses }) => {
  const location = useLocation()
  const isAdmin = location.pathname.includes("/admin");

  const [selectedOrder, setSelectedOrder] = useState("All");

  useEffect(() => {
    refetch();
  }, [selectedOrder]);

  const formatDate = (isoDate) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(isoDate).toLocaleDateString("en-US", options);
  };

  return (
    <ModalManagement id="product_orders" type="large">
      <div
        style={{
          width: "100%",
        }}
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-[18px] font-medium ">Product Order</p>
            <p className="text-[12px] font-normal ">
              {
                isAdmin ? 'List of products orders' : 'List of product orders you have.'
              }

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
                  setSelectedOrder(el.name);
                }}
                className={`py-[10px] px-[20px] text-[#696969] font-medium text-[12px] cursor-pointer ${selectedOrder !== el.name
                  ? "bg-[#F2F2F2]"
                  : "bg-brandPrimary text-black"
                  } rounded-[20px] `}
              >
                {el.name}
              </p>
            ))}
          </div>
        }
        <table className="min-w-full  rounded-lg overflow-hidden border-separate border-spacing-y-3">
          <tbody>
            {orders?.length > 0 &&
              orders?.map((order, index) => (
                <tr
                  key={index}
                  className="bg-[#FAFAFA]  rounded-lg p-5 relative mb-2 "
                >
                  <td className="p-2 w-[450px] ">
                    <div className="flex items-center">
                      <img
                        className="w-[80px] h-[80px] rounded-lg mr-[10px]"
                        src={order.item.product.image.thumbnail}
                        alt="Item Image"
                      />
                      <div>
                        <p className="text-[15px] font-medium">
                          {order.item.product.name}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-2 w-[300px] text-[14px] font-normal">
                    {order.item.product.categories[0].name}
                  </td>
                  <td className="p-2 w-[150px] text-[14px] font-normal">
                    {order.item.quantity}
                  </td>
                  <td className="p-2 w-[300px] text-[14px] font-normal">
                    {formatDate(order.createdAt)}
                  </td>
                  <td className="p-2 w-[150px] text-[14px] font-normal">
                    {`N${order.item.total_price}`}
                  </td>
                  <td className="p-2 w-[150px] text-[14px] font-normal">
                    <div className="flex items-center justify-center w-full h-full">
                      <p className="bg-[#FFA800] px-2 py-1 rounded-full text-center text-white text-[10px] font-medium">
                        {order.status.name}
                      </p>
                    </div>
                  </td>
                  <td className=" p-2 w-[150px] relative text-[14px] font-normal text-center">
                    <div>
                      <button className="flex items-center justify-center text-blue-600 w-full h-full cursor-pointer">
                        <div className="dropdown dropdown-bottom dropdown-end">
                          {/* <label tabIndex={0} className="btn m-1">Click</label> */}
                          <img src={menu} alt="icon" tabIndex={0} />
                          <ul
                            tabIndex={0}
                            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                          >
                            <li className="text-[12px] font-normal bg-brandPrimary px-2 py-1 text-center rounded-full mb-2  text-black">
                              View Order
                            </li>
                            {
                              !isAdmin && <li className="text-[12px] font-normal bg-[#F2F2F2] px-2 py-1 text-center rounded-full text-black">
                                Report dispute
                              </li>
                            }

                          </ul>
                        </div>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </ModalManagement>
  );
};

export default ProductOrders;
