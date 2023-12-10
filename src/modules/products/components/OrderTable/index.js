import React, { useEffect, useState } from "react";
import { menu } from "../../../../assets/icons";
import OrderDetails from "../../../services/components/OrderDetails";
import ProductOrderDetails from "../ProductOrderDetails";

const ProductOrderTable = ({ orders, isAdmin, statuses }) => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const formatDate = (isoDate) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(isoDate).toLocaleDateString("en-US", options);
  };

  useEffect(() => {
    if (orders?.length > 0) {
      setSelectedOrder(orders[0]);
    }
  }, [orders]);

  return (
    <div>
      <table className=" hidden md:block min-w-full  rounded-lg overflow-hidden border-separate border-spacing-y-3">
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
                          <li
                            role="button"
                            onClick={() => {
                              setSelectedOrder(order);
                              document
                                .getElementById("product-order-details")
                                .showModal();
                            }}
                            className="text-[12px] font-normal bg-brandPrimary px-2 py-1 text-center rounded-full mb-2  text-black"
                          >
                            View Order
                          </li>
                          {!isAdmin && (
                            <li className="text-[12px] font-normal bg-[#F2F2F2] px-2 py-1 text-center rounded-full text-black">
                              Report dispute
                            </li>
                          )}
                        </ul>
                      </div>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="block md:hidden">
        {orders?.map((order, index) =>
          <div className="flex gap-x-1 bg-white p-2 rounded-lg mb-2 " key={index}>
            <div>
              <img
                className="w-[80px] h-[80px] rounded-lg mr-[10px]"
                src={order.item.product.image.thumbnail}
                alt="Item Image"
              />
            </div>
            <div>
              <h3 className="text-[18px] font-medium ">{order.item.product.name}</h3>
              <p>{order.item.product.categories[0].name}</p>
              <p className="text-[16px] font-medium"> {`N${order.item.total_price}`}</p>
            </div>
          </div>
        )
        }
      </div>

      <ProductOrderDetails orderDetails={selectedOrder} statuses={statuses} />
    </div>
  );
};

export default ProductOrderTable;
