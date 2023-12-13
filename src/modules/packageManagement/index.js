import React, { useEffect, useState } from "react";

import BaseDashboardNavigation from "../../generalComponents/BaseDashboardNavigation";

import { AiOutlinePlus } from "react-icons/ai";
import PackageCard from "./components/PackageCard";
import AddCategory from "./components/AddPackage";
import useGetPackagesManager from "./controller/get_packages_controller";
import Loader from "../../generalComponents/Loader";
import useDebounce from "../../utils/UseDebounce";
import PackageDetails from "./components/PackageDetails";
import InputWithFullBoarder from "../../generalComponents/InputWithFullBoarder";

const ShopManagement = () => {
  const [searchValue, setSearchValue] = useState('')
  const debouncedSearchValue = useDebounce(searchValue, 1000)
  const items = [...Array(10).keys()];

  const [selectedPackage, setSelectedPackage] = useState("");
  const [categoryType, setCategoryType] = useState("product");
  const { isLoading, data } = useGetPackagesManager({ enabled: true, title: debouncedSearchValue });

  useEffect(() => {
    if (data) {
      setSelectedPackage(data.data[0]);
    }
  }, [data]);

  return (
    <BaseDashboardNavigation title={"Package Management"} hideSearch={true}>
      <div className="mb-5">
        <div className="flex flex-wrap items-center justify-between mt-2 mb-6">
          <p className="text-[20px] font-normal ">List of packages</p>
          <div className=" flex gap-x-2 items-center">
            <div >
              <InputWithFullBoarder
                placeholder={'Search package...'}
                className={'!border-black border sm:w-full md:w-[230px]'}
                onChange={(e) => {
                  setSearchValue(e.target.value.toLowerCase())
                }}
              />
            </div>
            <div className="mb-3">
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

        </div>
        <div className="bg-white rounded-lg p-1 md:py-[23px] md:px-[25px]  ">
          {isLoading ? (
            <Loader />
          ) : (
            <div className="flex flex-wrap md:gap-3 gap-1">
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
