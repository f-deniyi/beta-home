import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import BaseDashboardNavigation from "../../../generalComponents/BaseDashboardNavigation";

import CategoryCard from "../components/CategoryCard";
import useGetCategoriesManager from "../controllers/get_categories_controller";
import useGetServiceCategoriesManager from "../controllers/get_servicecategories_controller";
import useGetAllBrandsManager from "../controllers/get_brands_controller";
import Loader from "../../../generalComponents/Loader";
import AddCategory from "../components/AddCategory";
import { productCategory, brand } from "../../../assets/icons";
import CategoryDetails from "../components/CategoryDetails";

const AdminSettingsPage = () => {
  const [selectedItem, setSelectedItem] = useState("");

  const { data: productCategories, isLoading: loadingProductCategories } =
    useGetCategoriesManager({ enabled: true });
  const { data: serviceCategories, isLoading: loadingServiceCategories } =
    useGetServiceCategoriesManager({ enabled: true });
  const { data: brands, isLoading: loadingBrands } = useGetAllBrandsManager({
    enabled: true,
  });

  const items = [...Array(10).keys()];
  const brandItems = [...Array(3).keys()];
  const [categoryType, setCategoryType] = useState("product");
  return (
    <BaseDashboardNavigation title={"Shop Settings"} hideSearch={true}>
      <div className="mb-5">
        <div className="flex items-center justify-between my-3 flex-wrap">
          <p className="text-[20px] font-normal mb-3">Product Category</p>
          <div>
            <button
              className="bg-brandPrimary flex  py-3 shadow-lg px-[25px] rounded-full "
              onClick={() => {
                setCategoryType("product");
                document.getElementById("add_category").showModal();
              }}
            >
              {/* <AiOutlinePlus /> */}
              <p className="text-[12px] font-medium">+Add a Category</p>
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg py-[38px] px-[23px] ">
          {loadingProductCategories ? (
            <Loader />
          ) : (
            <div className="flex flex-wrap gap-5">
              {productCategories.map((item, index) => (
                <CategoryCard
                  details={item?.details}
                  item={item}
                  onClick={() => {
                    setSelectedItem(item);
                  }}
                  categoryDetails={selectedItem}
                  key={index}
                  icon={item.icon}
                  name={item.name}
                  type={categoryType}

                />
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="mb-5">
        <div className="flex items-center justify-between my-3 flex-wrap">
          <p className="text-[20px] font-normal mb-3">Service Category</p>
          <div>
            <button
              className="bg-brandPrimary flex  py-3 shadow-lg px-[25px] rounded-full "
              onClick={() => {
                setCategoryType("service");
                document.getElementById("add_category").showModal();
              }}
            >
              <AiOutlinePlus />
              <p className="text-[12px] font-medium">Add a Category</p>
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg py-[38px] px-[23px] ">
          {loadingServiceCategories ? (
            <Loader />
          ) : (
            <div className="flex flex-wrap gap-5">
              {serviceCategories.map((item, index) => (
                <CategoryCard
                  details={item?.details}
                  item={item}
                  key={index}
                  icon={item.icon}
                  name={item.name}
                  type={categoryType}

                  onClick={() => {
                    setSelectedItem(item);
                  }}
                  categoryDetails={selectedItem}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mb-5">
        <div className="flex items-center justify-between my-3 flex-wrap">
          <p className="text-[20px] font-normal mb-3">Brand Category</p>
          <div>
            <button
              className="bg-brandPrimary flex  py-3 shadow-lg px-[25px] rounded-full "
              onClick={() => {
                setCategoryType("brand");
                document.getElementById("add_category").showModal();
              }}
            >
              <AiOutlinePlus />
              <p className="text-[12px] font-medium">
                Add a Brand/Manufacturer
              </p>
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg py-[38px] px-[23px] ">
          {loadingBrands ? (
            <Loader />
          ) : (
            <div className="flex flex-wrap gap-5">
              {brands.map((item, index) => (
                <CategoryCard
                  details={item?.details}
                  item={item}
                  type={"brand"}
                  image={item?.image}
                  name={item.name}
                  onClick={() => {
                    setSelectedItem(item);
                  }}
                  categoryDetails={selectedItem}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <AddCategory type={categoryType} />
      <CategoryDetails
        category={selectedItem}
        // type={type}
        image={selectedItem?.image}
        name={selectedItem?.name}
        icon={selectedItem?.icon}
        details={selectedItem?.details}
      />
    </BaseDashboardNavigation>
  );
};

export default AdminSettingsPage;
