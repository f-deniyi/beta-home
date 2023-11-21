import React, { useState } from "react";

import BaseDashboardNavigation from "../../generalComponents/BaseDashboardNavigation";

import { format } from "date-fns";
// import FewDataTable from "../../generalComponents/FewDataTable";

import ErrorManager from "../../generalComponents/ErrorManager";
import Loader from "../../generalComponents/Loader";
// import useGetAnalytics from "./profiles/controllers/getAnalytics";
import {
  customers,
  vendor_active,
  users_active,
  arrowRight,
} from "../../assets/icons";

import { useNavigate } from "react-router-dom";
import Chart from "../../generalComponents/Chart";
import BarChart from "../../generalComponents/BarChart";

import { FiArrowRight } from "react-icons/fi";
import useGetUserCountManager from "../UsersManagament/controllers/get_user_counts_controller";

const AdminDashboard = () => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, "MMMM d, yyyy");
  };
  const [currentIndex, setCurrentIndex] = useState(0);

  const { isLoading, users } = useGetUserCountManager();

  // const { isError, data, isSuccess, error, isLoading } = useGetFeedsManager();

  // const {
  //   data: analytics,
  //   error: analyticsError,
  //   isError: analyticsHasError,
  //   isLoading: loadingAnalytics,
  // } = useGetAnalytics();

  const navigate = useNavigate();

  if (isLoading) {
    return <Loader />;
  }

  // if (isSuccess && currentPostId !== data.data[currentIndex].id) {
  //   setCurrentPostId(data.data[currentIndex].id);
  // }

  // if (isError) {
  //   return (
  //     <div>{isError && <ErrorManager errorMessage={error.message} />}</div>
  //   );
  // }

  return (
    <BaseDashboardNavigation title={"Dashboard"} hideSearch={true}>
      <div className="grid grid-cols-1 md:space-x-[46px] space-y-10 md:space-y-0 relative bg-white p-3 rounded-[10px] mb-4">
        <div className=" md:overflow-y-scroll scrollbar-hide  relative md:mr-0">
          <div>
            <div className="flex flex-col md:flex-row justify-between md:space-x-[13px] space-y-[13px] md:space-y-0 py-1 mb-[20px] md:mb-[0px] ">
              <div className="hover:shadow-xl duration-150 h-[127px] rounded-[20px] bg-brandPrimary px-[14px] pt-[24px] pb-[22px] w-full  flex flex-col justify-center">
                <div className="flex gap-x-2 items-center mb-2">
                  <div className="bg-black rounded-[10px] w-[50px] h-[50px] flex items-center justify-center flex-shrink-0">
                    <img
                      src={users_active}
                      className="object-cover "
                      alt="users"
                    />
                  </div>
                  <p className="text-15px font-medium text-black ">Users</p>
                </div>
                <p className="text-30px font-bold ">{users.total}</p>
              </div>
              <div className="hover:shadow-xl duration-150 h-[127px] rounded-[20px] bg-brandPrimary px-[14px] pt-[24px] pb-[22px] w-full  flex flex-col justify-center">
                <div className="flex gap-x-2 items-center mb-2">
                  <div className="bg-black rounded-[10px] w-[50px] h-[50px] flex items-center justify-center flex-shrink-0">
                    <img
                      src={customers}
                      className="object-cover "
                      alt="users"
                    />
                  </div>
                  <p className="text-15px font-medium text-black ">Customers</p>
                </div>
                <p className="text-30px font-bold ">{users.customers}</p>
              </div>
              <div className="hover:shadow-xl duration-150 h-[127px] rounded-[20px] bg-brandPrimary px-[14px] pt-[24px] pb-[22px] w-full  flex flex-col justify-center">
                <div className="flex gap-x-2 items-center mb-2">
                  <div className="bg-black rounded-[10px] w-[50px] h-[50px] flex items-center justify-center flex-shrink-0">
                    <img
                      src={vendor_active}
                      className="object-cover w-[19px] h-[19px] "
                      alt="users"
                    />
                  </div>
                  <p className="text-15px font-medium text-black ">Vendors</p>
                </div>
                <p className="text-30px font-bold ">{users.vendors}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-5 rounded-[16px] mb-3">
        <div className="flex items-center justify-between mb-5">
          <div className="flex gap-x-2 items-center">
            <div className="h-[8px] w-[8px] rounded-full bg-brandPrimary"></div>
            <p className="text-[#1C2A53] text-[20px] font-normal">
              Registered Users
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <p className="text-[14px] text=[#555F7E] font-semibold">
              View Details
            </p>
            <FiArrowRight size="16" color="#555F7E" />
          </div>
        </div>
        <div className="h-[400px]">
          <Chart />
        </div>
      </div>
      <div className="bg-white p-5 rounded-[16px] mb-3">
        <div className="flex items-center justify-between mb-5">
          <div className="flex gap-x-2 items-center">
            <div className="h-[8px] w-[8px] rounded-full bg-brandPrimary"></div>
            <p className="text-[#1C2A53] text-[20px] font-normal">
              Package Management
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <p className="text-[14px] text=[#555F7E] font-semibold">
              View Details
            </p>
            <FiArrowRight size="16" color="#555F7E" />
          </div>
        </div>
        <div className="h-[400px]">
          <BarChart />
        </div>
      </div>
    </BaseDashboardNavigation>
  );
};

export default AdminDashboard;
