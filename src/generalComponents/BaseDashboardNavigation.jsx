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
  searchIcon
} from '../assets/icons'

const BaseDashboardNavigation = ({
  children,
  title,
  onChange,
  value,
  hideSearch,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  // const { data, isError, error, isLoading, isSuccess } =
  //   useGetUserDetailsManager();
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

  return (
    <div className="relative md:fixed flex h-[100vh] w-full text-blackColor p-3">
      <ModalManagement
        id={"my_modal_1"}
        hideCancel={true}
        className={"bg-white"}
      >
        <div className="text-center text-blackColor space-y-8 m-5 bg-white">
          <p className=" font-bold text-28px">Welcome</p>
          <p className="">
            We noticed you have not set up your profile yet. To continue, please
            set up your account profile.
          </p>
          <CustomButton
            buttonText={"Setup my profile"}
            onClick={() => navigate("/dashboard/settings")}
          />
        </div>
      </ModalManagement>
      <div
        className={`hidden md:flex ease-in-out duration-500 w-[20%] bg-[#fff122] z-50 h-full pt-2  md:overflow-auto scrollbar-hide  flex-col  items-start space-y-10  pb-10 rounded-[10px]`}
      >
        <div className="pb-2 border-b border-black w-[90%] mx-auto mb-3">
          <img
            className="object-contain w-[64px] h-[67.98px] mx-2"
            src={logo}
            alt="Raizon logo"
          />
        </div>

        {/* <p className="w-auto text-logo font-playfair-sc text-blackColor flex mx-7">
          RAIZON
        </p> */}

        <Link
          className="w-[90%] mx-auto"
          to={
            isAdmin
              ? "/admin/dashboard"

              : "/dashboard"
          }
        >
          <IconsWithText
            icon={home}
            activeIcon={home_active}
            path={
              isAdmin
                ? "/admin/dashboard"
                // : data.data.user.fullname === "" ||
                //   data.data.user.sex === "" ||
                //   data.data.user.phone === ""
                // ? "/dashboard/settings"
                : "/dashboard"
            }
            iconSize="28px"
            text="Home"
          />
        </Link>

        <Link
          className="w-[90%] mx-auto"
          to={
            isAdmin
              ? "/admin/products-management"

              : "/products-management"
          }
        >
          <IconsWithText
            icon={product}
            activeIcon={product_active}
            path={
              isAdmin
                ? "/admin/products-management"
                // : data.data.user.fullname === "" ||
                //   data.data.user.sex === "" ||
                //   data.data.user.phone === ""
                // ? "/dashboard/settings"
                : "/products-management"
            }
            iconSize="28px"
            text="Products Management"
          />
        </Link>

        <Link
          className="w-[90%] mx-auto"
          to={
            isAdmin
              ? "/admin/services-management"

              : "/services-management"
          }
        >
          <IconsWithText

            icon={services}
            activeIcon={services_active}
            path={
              isAdmin
                ? "/admin/services-management"
                : "/services-management"
            }
            iconSize="28px"
            text="Services Management"
          />
        </Link>


        <Link
          className="w-[90%] mx-auto"
          to={
            isAdmin
              ? "/admin/messages"

              : "/messages"
          }
        >
          <IconsWithText

            icon={message}
            activeIcon={message_active}
            path={
              isAdmin
                ? "/admin/messages"
                : "/messages"
            }
            iconSize="28px"
            text="Messages"
          />
        </Link>

        <Link
          className="w-[90%] mx-auto"
          to={
            isAdmin
              ? "/admin/wallet"

              : "/wallet"
          }
        >
          <IconsWithText
            icon={wallet}
            activeIcon={wallet_active}
            path={
              isAdmin
                ? "/admin/wallet"
                : "/wallet"
            }
            iconSize="28px"
            text="Wallet"
          />
        </Link>

        <Link
          className="w-[90%] mx-auto"
          to={
            isAdmin
              ? "/admin/profile"

              : "/profile"
          }
        >
          <IconsWithText
            icon={account}
            activeIcon={account_active}
            path={
              isAdmin
                ? "/admin/profile"
                : "/profile"
            }
            iconSize="28px"
            text="Account"
          />
        </Link>

        {/* 
        {isAdmin && (
          <Link
          className="w-[90%] mx-auto" to={"/admin/user-management"}>
            <IconsWithText
              icon={<AiOutlineSolution />}
              iconSize="28px"
              path={"/admin/user-management"}
              text={"User Management"}
            />
          </Link>
        )}
        <Link
        className="w-[90%] mx-auto" to={isAdmin ? "/admin/all-feeds" : "/dashboard/feeds"}>
          <IconsWithText
            icon={<AiOutlineFund />}
            iconSize="28px"
            path={isAdmin ? "/admin/all-feeds" : "/dashboard/feeds"}
            text="Feeds"
          />
        </Link>
        {!isAdmin && (
          <Link
          className="w-[90%] mx-auto" to={"/dashboard/new-profile"}>
            <IconsWithText
              icon={<AiOutlineUserAdd />}
              iconSize="28px"
              path={"/dashboard/new-profile"}
              text={"New Profiles"}
            />
          </Link>
        )}
        <Link
        className="w-[90%] mx-auto" to={isAdmin ? "/admin/all-profiles" : "/dashboard/all-profiles"}>
          <IconsWithText
            icon={<AiOutlineTeam />}
            iconSize="28px"
            path={isAdmin ? "/admin/all-profiles" : "/dashboard/all-profiles"}
            text="Profiles"
          />
        </Link>
        {isAdmin && (
          <Link
          className="w-[90%] mx-auto" to={"/admin/pricing"}>
            <IconsWithText
              icon={<AiOutlinePercentage />}
              iconSize="28px"
              path={"/admin/pricing"}
              text="Pricing"
            />
          </Link>
        )}
        {isAdmin && (
          <Link
          className="w-[90%] mx-auto" to={"/admin/measurements"}>
            <IconsWithText
              icon={<AiOutlineScissor />}
              iconSize="28px"
              path={"/admin/measurements"}
              text="Measurement"
            />
          </Link>
        )}
        <Link
        className="w-[90%] mx-auto" to={isAdmin ? "/admin/settings" : "/dashboard/settings"}>
          <IconsWithText
            icon={<AiOutlineSetting />}
            iconSize="28px"
            path={isAdmin ? "/admin/settings" : "/dashboard/settings"}
            text="Settings"
          />
        </Link>
        {isAdmin && (
          <Link
          className="w-[90%] mx-auto" to={"/admin/tickets"}>
            <IconsWithText
              icon={<AiOutlineMail />}
              iconSize="28px"
              path={"/admin/tickets"}
              text="Tickets"
            />
          </Link>
        )}
        {isAdmin && (
          <Link
          className="w-[90%] mx-auto" to={"/admin/broadcast"}>
            <IconsWithText
              icon={<AiOutlineNotification />}
              iconSize="28px"
              path={"/admin/broadcast"}
              text="Broadcasts"
            />
          </Link>
        )} */}
        <div className="w-[90%] mx-auto">
          <button onClick={handleLogout} className="w-full" >
            <IconsWithText
              icon={<AiOutlineLogout />}
              iconSize="28px"
              text="Logout"
            />
          </button>
        </div>
      </div>
      {/* this is where the mobile menu is */}
      <div
        className={`fixed md:hidden ${showMenu ? "left-0" : "left-[-100%]"
          } ease-in-out duration-500 w-4/5 bg-lightGrey z-50 h-full pt-11 flex flex-col  items-start space-y-10 mr-7`}
      >
        <img
          className="object-contain w-[10rem] mx-7"
          src={logo}
          alt="Raizon logo"
        />
        {/* <p className="w-auto text-logo font-playfair-sc text-blackColor flex mx-7 ">
          RAIZON
        </p> */}
        <Link
          className="w-[90%] mx-auto" to={isAdmin ? "/admin/dashboard" : "/dashboard"}>
          <IconsWithText
            icon={<AiOutlineHome />}
            iconSize="28px"
            path={isAdmin ? "/admin/dashboard" : "/dashboard"}
            text="Home"
          />
        </Link>
        {isAdmin && (
          <Link
            className="w-[90%] mx-auto" to={"/admin/user-management"}>
            <IconsWithText
              icon={<AiOutlineSolution />}
              iconSize="28px"
              path={"/admin/user-management"}
              text={"User Management"}
            />
          </Link>
        )}
        <Link
          className="w-[90%] mx-auto" to={isAdmin ? "/admin/products-management" : "/dashboard/products-management"}>
          <IconsWithText
            icon={<AiOutlineFund />}
            iconSize="28px"
            path={isAdmin ? "/admin/products-management" : "/dashboard/products-management"}
            text="Products Management"
          />
        </Link>
        {!isAdmin && (
          <Link
            className="w-[90%] mx-auto" to={"/dashboard/new-profile"}>
            <IconsWithText
              icon={<AiOutlineUserAdd />}
              iconSize="28px"
              path={"/dashboard/new-profile"}
              text={"New Profiles"}
            />
          </Link>
        )}
        <Link
          className="w-[90%] mx-auto" to={isAdmin ? "/admin/all-profiles" : "/dashboard/all-profiles"}>
          <IconsWithText
            icon={<AiOutlineTeam />}
            iconSize="28px"
            path={isAdmin ? "/admin/all-profiles" : "/dashboard/all-profiles"}
            text="Profiles"
          />
        </Link>
        {isAdmin && (
          <Link
            className="w-[90%] mx-auto" to={"/admin/pricing"}>
            <IconsWithText
              icon={<AiOutlinePercentage />}
              iconSize="28px"
              path={"/admin/pricing"}
              text="Pricing"
            />
          </Link>
        )}
        {isAdmin && (
          <Link
            className="w-[90%] mx-auto" to={"/admin/measurements"}>
            <IconsWithText
              icon={<AiOutlineScissor />}
              iconSize="28px"
              path={"/admin/measurements"}
              text="Measurement"
            />
          </Link>
        )}
        <Link
          className="w-[90%] mx-auto" to={isAdmin ? "/admin/settings" : "/dashboard/settings"}>
          <IconsWithText
            icon={<AiOutlineSetting />}
            iconSize="28px"
            path={isAdmin ? "/admin/settings" : "/dashboard/settings"}
            text="Settings"
          />
        </Link>
        {isAdmin && (
          <Link
            className="w-[90%] mx-auto" to={"/admin/tickets"}>
            <IconsWithText
              icon={<AiOutlineMail />}
              iconSize="28px"
              path={"/admin/tickets"}
              text="Tickets"
            />
          </Link>
        )}
        {isAdmin && (
          <Link
            className="w-[90%] mx-auto" to={"/admin/broadcast"}>
            <IconsWithText
              icon={<AiOutlineNotification />}
              iconSize="28px"
              path={"/admin/broadcast"}
              text="Broadcasts"
            />
          </Link>
        )}
        <div className="w-[90%] mx-auto">
          <button onClick={handleLogout} className="w-full" >
            <IconsWithText
              icon={<AiOutlineLogout />}
              iconSize="28px"
              text="Logout"
            />
          </button>
        </div>

      </div>
      {/* this is where the top section starts */}
      <div className="w-screen">
        <div className="flex flex-col   max-h-[100vh] overflow-auto">
          <div className="flex flex-col md:flex-row items-center justify-between text-left ml-3 z-40 bg-white rounded-[10px] px-4 py-[15px] mb-[12px]">
            <div className="w-full md:w-auto flex items-center justify-between">
              <h3 className="text-[20px] font-bold ">
                {title}
              </h3>
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
                <img src={searchIcon} alt='search_icon' />
              </div>
              <button onClick={() => setShowNotification(!showNotification)} className="mr-[10px]">
                <img src={notificationIcon} alt='notification_icon' />
              </button>
              <button className="mr-[10px]">
                <img src={messageIcon} alt='message_icon' />
              </button>
              {/* notification display */}
              {showNotification && (
                <NotificationList showNotification={showNotification} />
              )}
              <div className="rounded-full border-brandPrimary border-solid border-2 mr-[13px]">
                {" "}
                <img
                  className=" object-cover h-[44px] w-[44px] p-[0.7px] rounded-full "
                  src={
                    // data.data.user.profile_picture !== ""
                    //   ? data.data.user.profile_picture
                    //   : 
                    `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png`
                  }
                  alt="user avatar"
                />
              </div>
              <div>
                <p className="flex items-center text-blackColor text-[13px] font-semibold mb-0">
                  {/* {data.data.user.fullname} */}
                  {'Davide Mark'}
                  {/* <MdOutlineKeyboardArrowDown size={30} /> */}
                </p>
                <p className="text-[#8E8E8E] text-[10px]">Vendor</p>
              </div>

            </div>
          </div>
          <div className="max-h-[90%] ml-3  pb-10"> {children}</div>
        </div>
      </div>
    </div >
  );
};

export default BaseDashboardNavigation;
