import React, { useState, useEffect } from "react";
import BaseDashboardNavigation from "../../../generalComponents/BaseDashboardNavigation";
import { cart, new_cart } from "../../../assets/icons";
import ProductGrid from "../components/ProductGrid";
import AddProduct from "../components/AddProduct";
import ProductOrders from "./orders";
import { useLocation } from "react-router-dom";
import useGetShopsProductsQuery from "../../shopManagement/controllers/get_shops_products";
import Loader from "../../../generalComponents/Loader";
import useGetAllProductsManager from "../controllers/get_all_products_controller";
import useGetProductOrdersManager from "../controllers/get_product_orders_controller";
import useGetOrderStatusManager from "../controllers/get_order_statuses";

const ProductsManagement = () => {
  let location = useLocation();
  const isAdmin = location.pathname.includes("/admin");

  const shopId = localStorage.getItem("beta-vendor-shop");
  const [activePage, setActivePage] = useState(1);

  const { data: allProducts, isLoading: loadingAllProducts } =
    useGetAllProductsManager({ enabled: isAdmin, page: activePage });

  const { products, pagination, isLoading } = useGetShopsProductsQuery({
    enabled: Boolean(shopId),
    shopId,
    page: activePage,
  });

  const handlePage = (page) => {
    setActivePage(page);
  };

  const {
    isLoading: fetchingOrders,
    data: orders,
    refetch,
  } = useGetProductOrdersManager({
    filter: "",
    enable: true,
  });

  const {
    isLoading: loadingStatuses,
    data: statuses,
    isSuccess: fetchedStatuses,
  } = useGetOrderStatusManager();
  const [orderStatuses, setOrderStatuses] = useState([{ name: "All", id: "" }]);

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
  const [selectedCategory, setSelectedCategory] = useState("All");
  const productCategory = [
    "All",
    "Funiture",
    "Home Decor",
    "Kitchen & Dining",
    "Bed & Bath",
    "Home Improvement",
    "Home Electronics",
    "Home Cleaning",
    "Home Texlies",
    "Garden & Outdoor",
    "Pet Supplies",
  ];

  return (
    <BaseDashboardNavigation title={"Product Managment"} hideSearch={false}>
      {isLoading || loadingAllProducts || fetchingOrders || loadingStatuses ? (
        <Loader />
      ) : (
        <div>
          <div className="flex items-center justify-between mt-3 mb-4">
            <h3 className="text-[20px]">List of uploaded products</h3>
            {isAdmin ? (
              <div className="flex items-center">
                <button
                  className="bg-brandPrimary px-6 py-5 rounded-full px-3 text-[15px] font-medium flex items-center gap-x-2"
                  onClick={() =>
                    document.getElementById("product_orders").showModal()
                  }
                >
                  <img src={new_cart} alt="Notification Icon" />
                  <p>View all orders</p>
                </button>
              </div>
            ) : (
              <div className="flex items-center">
                <div className="relative  me-2">
                  <div
                    className="relative top-0 right-0 flex items-center justify-center cursor-pointer"
                    onClick={() =>
                      document.getElementById("product_orders").showModal()
                    }
                  >
                    <img src={cart} alt="Notification Icon" />
                    <p className="h-[15px] w-[15px] flex items-center justify-center bg-[#FF0000] text-white text-[10px] font-medium rounded-full  absolute top-0 right-0">
                      3
                    </p>
                  </div>
                </div>
                <button
                  className="bg-brandPrimary px-6 py-5 rounded-full px-3 text-[15px] font-medium "
                  onClick={() =>
                    document.getElementById("add_product").showModal()
                  }
                >
                  +Add a product
                </button>
              </div>
            )}
          </div>
          <div className="bg-white rounded-lg p-3">
            {isAdmin && (
              <div className="flex flex-wrap gap-2 mb-5 mt-2">
                {productCategory.map((el) => (
                  <p
                    onClick={() => {
                      setSelectedCategory(el);
                    }}
                    className={`py-[10px] px-[20px] text-[#696969] font-medium text-[12px] cursor-pointer ${
                      selectedCategory !== el
                        ? "bg-[#F2F2F2]"
                        : "bg-brandPrimary text-black"
                    } rounded-[20px] `}
                  >
                    {el}
                  </p>
                ))}
              </div>
            )}

            <ProductGrid
              products={isAdmin ? allProducts.products : products}
              pagination={isAdmin ? allProducts.pagination : pagination}
              paginationChange={handlePage}
            />
          </div>
        </div>
      )}

      <AddProduct />
      {orders && (
        <ProductOrders
          orders={orders.orders}
          pagination={pagination}
          orderStatuses={orderStatuses}
          refetch={() => {
            refetch();
          }}
        />
      )}
    </BaseDashboardNavigation>
  );
};

export default ProductsManagement;
