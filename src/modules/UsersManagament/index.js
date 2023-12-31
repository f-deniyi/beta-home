import React, { useEffect, useState } from "react";

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
import UserTable from "./components/Table";
import useGetUserCountManager from "./controllers/get_user_counts_controller";
import useDebounce from "../../utils/UseDebounce";
import InputWithFullBoarder from "../../generalComponents/InputWithFullBoarder";

const UsersManagement = () => {
  const [searchValue, setSearchValue] = useState('')
  const debouncedSearchValue = useDebounce(searchValue, 1000)
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, "MMMM d, yyyy");
  };
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();
  const { users: userCount, isLoading: loadingCount } =
    useGetUserCountManager();

  const [selectedUser, setSelectedUser] = useState("");
  const userType = [
    { title: "All Users", query: null },
    { title: "Customers", query: false },
    { title: "Vendors", query: true },
  ];

  useEffect(()=>{
    setSelectedUser(userType[0])

  },[])
  
  if (loadingCount) {
    return <isLoading />;
  }

 



  return (
    <BaseDashboardNavigation title={"User Management"} hideSearch={true}>
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
                <p className="text-30px font-bold ">{userCount.total}</p>
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
                <p className="text-30px font-bold ">{userCount.customers}</p>
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
                <p className="text-30px font-bold ">{userCount.vendors}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-[20px] font-normal mb-3">List of users</p>

      <div className="bg-white p-3 rounded-[10px] ">
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex gap-2 mb-3 ">
            {userType.map((el) => (
              <p
                onClick={() => {
                  setSelectedUser(el);
                }}
                className={`py-[10px] px-[20px] text-[#696969] font-medium text-[12px] cursor-pointer ${selectedUser?.title !== el.title
                  ? "bg-[#F2F2F2]"
                  : "bg-brandPrimary text-black"
                  } rounded-[20px] `}
              >
                {el.title}
              </p>
            ))}
          </div>
          <div className="">
            <InputWithFullBoarder
              placeholder={'Search User...'}
              className={'!border-black border sm:w-full md:w-[230px]'}
              onChange={(e) => {
                setSearchValue(e.target.value.toLowerCase())
              }}
            />
          </div>

        </div>

        <div>
          <UserTable filter={selectedUser?.query} debouncedSearchValue={debouncedSearchValue} />
        </div>
      </div>
    </BaseDashboardNavigation>
  );
};

export default UsersManagement;
