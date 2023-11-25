import React, { useEffect, useState } from "react";

import BaseDashboardNavigation from "../../generalComponents/BaseDashboardNavigation";

import { AiOutlinePlus } from "react-icons/ai";
import PackageCard from "./components/PackageCard";
import AddCategory from "./components/AddPackage";
import useGetPackagesManager from "./controller/get_packages_controller";
import Loader from "../../generalComponents/Loader";
import PackageDetails from "./components/PackageDetails";

const ShopManagement = () => {
  const items = [...Array(10).keys()];

  const [selectedPackage, setSelectedPackage] = useState("");
  const [categoryType, setCategoryType] = useState("product");
  const { isLoading, data } = useGetPackagesManager({ enabled: true });

  useEffect(() => {
    if (data) {
      setSelectedPackage(data.data[0]);
    }
  }, [data]);

  return (
    <BaseDashboardNavigation title={"Package Management"} hideSearch={true}>
      <div className="mb-5">
        <div className="flex items-center justify-between mt-2 mb-6">
          <p className="text-[20px] font-normal ">List of packages</p>
          <div>
            <button
              className="bg-brandPrimary flex  py-3 shadow-lg px-[25px] rounded-full "
              onClick={() => {
                setCategoryType("product");
                document.getElementById("add_package").showModal();
              }}
            >
              {/* <AiOutlinePlus /> */}
              <p className="text-[12px] font-medium">+Add a Package</p>
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg py-[23px] px-[25px]  ">
          {isLoading ? (
            <Loader />
          ) : (
            <div className="flex flex-wrap gap-3">
              {data.data.map((item, index) => (
                <PackageCard
                  onClick={() => {
                    setSelectedPackage(item);
                    document.getElementById("package_details").showModal();
                  }}
                  key={index}
                  packageDetails={item}
                />
              ))}
            </div>
          )}
        </div>
        {selectedPackage && <PackageDetails packageDetails={selectedPackage} />}
      </div>

      <AddCategory type={categoryType} />
    </BaseDashboardNavigation>
  );
};

export default ShopManagement;
