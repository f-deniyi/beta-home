import React, { useState, useEffect } from "react";
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
import useGetSCategoriesQuery from "../../shopManagement/controllers/get_shop_categories";
import EmptyContent from "../../../generalComponents/EmptyContent";
// import useGetProductOrdersManager from "../controllers/get_product_orders_controller";
// import useGetOrderStatusManager from "../controllers/get_order_statuses";
import useDebounce from "../../../utils/UseDebounce";
import InputWithFullBoarder from "../../../generalComponents/InputWithFullBoarder";


const ProductsManagement = () => {
    const [searchValue, setSearchValue] = useState('')
    const debouncedSearchValue = useDebounce(searchValue, 1000)
    let location = useLocation();
    const isAdmin = location.pathname.includes("/admin");

    const shopId = localStorage.getItem("beta-vendor-shop");
    const [activePage, setActivePage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState({
        name: "All",
        id: "",
    });

    const { data: allProducts, isLoading: loadingAllProducts } =
        useGetAllProductsManager({
            enabled: isAdmin,
            page: activePage,
            categories: selectedCategory.id,
            name: debouncedSearchValue
        });

    const { categories, categoryLoading } = useGetSCategoriesQuery({
        enabled: true,
    });

    const { products, pagination, isLoading } = useGetShopsProductsQuery({
        enabled: Boolean(shopId),
        shopId,
        page: activePage,
        categories: selectedCategory.id,
    });

    const handlePage = (page) => {
        setActivePage(page);
    };

    const [modifiedCategories, setModifiedCategories] = useState([
        { name: "All", id: "" },
    ]);

    useEffect(() => {
        console.log("categories:", categories);

        if (categories) {
            let formattedStatuses = categories;
            const newOrderStatus = [{ name: "All", id: "" }];

            newOrderStatus.push(...formattedStatuses);
            console.log("newOrderStatus:", newOrderStatus);

            setModifiedCategories(newOrderStatus);
        }
    }, [categories]);

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
        <>
            <div className="flex items-center justify-between my-3">
                {/* <p className="text-[20px] font-normal mb-3">List of uploaded products</p> */}
                <div className="flex items-center justify-between mt-3 mb-4  w-full">
                    <h3 className="text-[20px] flex-shrink-0">List of uploaded products</h3>
                    <div className="flex gap-x-3  ">
                        <div className="">
                            <InputWithFullBoarder
                                placeholder={'Search product...'}
                                className={'!border-black border sm:w-full md:w-[230px] mt2 py-3'}
                                onChange={(e) => {
                                    setSearchValue(e.target.value.toLowerCase())
                                }}
                            />
                        </div>
                        <div>
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
                                    {
                                        orders?.orders?.length > 0 && <div className="relative  me-2">
                                            <div
                                                className="relative top-0 right-0 flex items-center justify-center cursor-pointer"
                                                onClick={() =>
                                                    document.getElementById("product_orders").showModal()
                                                }
                                            >
                                                <img src={cart} alt="Notification Icon" />
                                                <p className="h-[15px] w-[15px] flex items-center justify-center bg-[#FF0000] text-white text-[10px] font-medium rounded-full  absolute top-0 right-0">
                                                    {orders?.orders?.length}
                                                </p>
                                            </div>
                                        </div>
                                    }

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
                    </div>

                </div>

            </div>
            {isLoading || loadingAllProducts ? (
                // || loadingStatuses
                <Loader />
            ) : (
                <div>

                    <div className="bg-white rounded-lg p-3">
                        {
                            <div className="flex flex-wrap gap-2 mb-5 mt-2">
                                {modifiedCategories.map((el) => (
                                    <p
                                        onClick={() => {
                                            setSelectedCategory(el);
                                        }}
                                        className={`py-[10px] px-[20px] text-[#696969] font-medium text-[12px] cursor-pointer ${selectedCategory.name !== el.name
                                            ? "bg-[#F2F2F2]"
                                            : "bg-brandPrimary text-black"
                                            } rounded-[20px]`}
                                    >
                                        {el.name}
                                    </p>
                                ))}
                            </div>
                        }
                        {
                            allProducts?.products?.length > 0 || products.length > 0 ? <ProductGrid
                                products={isAdmin ? allProducts.products : products}
                                pagination={isAdmin ? allProducts.pagination : pagination}
                                paginationChange={handlePage}
                            /> : <EmptyContent content={'You don\'t have any products'} className={'h-[300px] w-full'} />
                        }

                    </div>
                </div>
            )}

            <AddProduct />
            <ProductOrders
                shopId={shopId}
                loadingStatuses={loadingStatuses}
                fetchingOrders={fetchingOrders}
                orderStatuses={orderStatuses}
                setChoosenOrderStatus={setChoosenOrderStatus}
                choosenOrderStatus={choosenOrderStatus}
                orders={orders}
            />
        </>
    );
};

export default ProductsManagement;
