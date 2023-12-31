import React, { useEffect, useState } from "react";
// import { logo } from "../../assets/images";

import {
  AiOutlineFund,
  AiOutlineHome,
  AiOutlineLogout,
  AiOutlineMail,
  AiOutlineNotification,
  AiOutlinePayCircle,
  AiOutlinePercentage,
  AiOutlineScissor,
  AiOutlineSetting,
  AiOutlineSolution,
  AiOutlineTeam,
  AiOutlineUserAdd,
} from "react-icons/ai";

import { Link, useLocation, useNavigate } from "react-router-dom";

import IconsWithText from "./IconsWithText";
import { logo, topPattern } from "../assets/images";
import { CiSearch } from "../../node_modules/react-icons/ci/index.esm";
import { HiOutlineBell } from "../../node_modules/react-icons/hi/index.esm";
import { MdOutlineKeyboardArrowDown } from "../../node_modules/react-icons/md/index.esm";
import { TiThMenu } from "../../node_modules/react-icons/ti/index.esm";
import { IoClose } from "../../node_modules/react-icons/io5/index.esm";
import NotificationList from "../modules/notification/NotificationList";
import useGetUserDetailsManager from "../modules/settings/controllers/get_UserDetails_controller";
import Loader from "./Loader";
import ModalManagement from "./ModalManagement";
import CustomButton from "./Button";
import {
  home,
  home_active,
  product,
  product_active,
  services,
  services_active,
  wallet,
  wallet_active,
  message,
  message_active,
  account,
  account_active,
  messageIcon,
  notificationIcon,
  searchIcon,
} from "../assets/icons";

import { adminMenu, customerMenu, vendorMenu } from "../constants/Menu";

const BaseDashboardNavigation = ({
  children,
  title,
  onChange,
  value,
  hideSearch,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const { data, isError, error, isLoading, isSuccess } =
    useGetUserDetailsManager();
  const [isAdmin, setIsAdmin] = useState(false);
  const handleOpenMenu = () => {
    setShowMenu(!showMenu);
  };
  const navigate = useNavigate();
  const location = useLocation();
  // checking if it is admin or not
  // useEffect(() => {
  //   if (isSuccess) {
  //     // Call getUserRole when data is successfully loaded
  //     const getUserRole = () => {
  //       setIsAdmin(data.data.user.role.name === "admin");
  //     };
  //     if (data.data.user.role.name !== "admin") {
  //       if (
  //         data.data.user.fullname === "" ||
  //         data.data.user.sex === "" ||
  //         data.data.user.phone === ""
  //       ) {
  //         navigate("/dashboard/settings");
  //         window.my_modal_1.showModal();
  //       }
  //     }
  //     getUserRole(); // Call the function immediately
  //   }
  // }, [isSuccess, data]);

  // if (isError) {
  //   return `error.message`;
  // }

  // if (isLoading) {
  //   return <Loader />;
  // }

  const handleLogout = async () => {
    localStorage.clear();
    // Wait for localStorage to be cleared
    await new Promise((resolve) => setTimeout(resolve, 0));
    window.location.href = "/login";
  };

  // const tokenExists = localStorage.getItem("token") !== null;

  // //console.log('--->>user<<---', data)
  const isSalesRep = data?.data?.user?.referral_code?.length > 0;
  const activeMenu =
    data?.data?.user?.role?.name === "admin"
      ? adminMenu
      : data?.data?.user?.shops?.length > 0
        ? vendorMenu.filter((item) => !item.isSalesRep || (item.isSalesRep && isSalesRep))
        : customerMenu.filter((item) => !item.isSalesRep || (item.isSalesRep && isSalesRep));

  // const activeMenu = adminMenu;

  return (
    <div className="relative md:fixed flex h-[100vh] w-full text-blackColor p-3">
      <div
        className={` o hidden md:flex ease-in-out duration-500 w-[25%] bg-[#fff122] z-50 h-full pt-2  md:overflow-auto scrollbar-hide  flex-col  items-start space-y-10  pb-10 rounded-[10px]`}
      >
        <div className="pb-2 border-b border-black w-[90%] mx-auto mb-3 ">
          <img
            className="object-contain w-[64px] h-[67.98px] mx-2"
            src={logo}
            alt="BetaHomeNg logo"
          />
        </div>

        {activeMenu.map((el) => (
          <Link className="w-[90%] mx-auto cursor-pointer" to={el?.path}>
            <IconsWithText
              icon={el?.icon}
              activeIcon={el?.activeIcon}
              path={el?.path}
              iconSize="28px"
              text={el?.title}
            />
          </Link>
        ))}
      </div>
      {/* this is where the mobile menu is */}

      <div
        className={`fixed md:hidden ${showMenu ? "left-0" : "left-[-100%]"
          } ease-in-out duration-500 w-4/5 bg-lightGrey z-50 h-full pt-4  flex flex-col  items-start space-y-10 mr-7 overflow-y-scroll`}
      >
        <img
          className="object-contain w-[64px] h-[67.98px] mx-7"
          src={logo}
          alt="BetaHomeNg logo"
        />
        {activeMenu.map((el) => (
          <Link className="w-[90%] mx-auto cursor-pointer" to={el?.path}>
            <IconsWithText
              icon={el?.icon}
              activeIcon={el?.activeIcon}
              path={el?.path}
              iconSize="28px"
              text={el?.title}
            />
          </Link>
        ))}
      </div>

      {/* this is where the top section starts */}
      <div className="w-screen">
        <div className="flex flex-col   max-h-[100vh] overflow-auto">
          <div className="flex flex-col md:flex-row items-center justify-between text-left ml-0 md:ml-3 z-40 bg-white rounded-[10px] px-4 py-[15px] mb-[12px]">
            <div className="w-full md:w-auto flex items-center justify-between">
              <h3 className="text-[20px] font-bold ">{title}</h3>
              <div
                onClick={handleOpenMenu}
                className=" md:hidden  bg-white shadow-md p-3.5 h-14 border w-14 rounded-full"
              >
                {showMenu ? (
                  <IoClose size={25} color="blackColor" />
                ) : (
                  <TiThMenu size={25} color="blackColor" />
                )}
              </div>
            </div>
            <div className="hidden md:flex justify-end items-center">
              <div
                className={` ${hideSearch ? "hidden" : "flex"
                  }  items-center justify-start pl-5 pr-4 py-3 h-[50px] mr-[10px] bg-[#F2F2F2] rounded-[60px] md:min-w-[280px] max-w-xs`}
              >
                <input
                  className="text-[12px] font-normal text-[#8E8E8E] bg-transparent outline-none focus:outline-none w-full"
                  placeholder="Search"
                  type="text"
                  value={value}
                  onChange={onChange}
                />
                <img src={searchIcon} alt="search_icon" />
              </div>
              <button
                onClick={() => setShowNotification(!showNotification)}
                className="mr-[10px]"
              >
                <img src={notificationIcon} alt="notification_icon" />
              </button>
              <button className="mr-[10px]"
                onClick={() => {
                  navigate('/messages')
                }}>
                <img src={messageIcon} alt="message_icon" />
              </button>
              {/* notification display */}
              {showNotification && (
                <NotificationList showNotification={showNotification} />
              )}
              <div className="rounded-full border-brandPrimary border-solid border-2 mr-[13px] cursor-pointer"

              >
                {" "}
                <img
                  className=" object-cover h-[44px] w-[44px] p-[0.7px] rounded-full "
                  src={
                    data?.data?.user?.profile_picture !== ""
                      ? data?.data?.user?.profile_picture
                      : `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png`
                  }
                  alt="user avatar"
                />
              </div>
              <div>
                <p className="flex items-center text-blackColor text-[13px] font-semibold mb-0">
                  {/* {data.data.user.fullname} */}
                  {data?.data?.user?.fullname}
                  {/* <MdOutlineKeyboardArrowDown size={30} /> */}
                </p>
                <p className="text-[#8E8E8E] text-[10px] capitalize">
                  {data?.data?.user?.role?.name === "admin"
                    ? "Admin" :
                    data?.data?.user.shops.length > 0 ? 'Vendor' : "Customer"}
                </p>
              </div>
            </div>
          </div>
          <div className="max-h-[90%] ml-0 md:ml-3  pb-10"> {children}</div>
        </div>
      </div>
    </div>
  );
};

export default BaseDashboardNavigation;
