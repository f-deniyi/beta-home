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
  useEffect(() => {
    if (isSuccess) {
      // Call getUserRole when data is successfully loaded
      const getUserRole = () => {
        setIsAdmin(data.data.user.role.name === "admin");
      };
      if (data.data.user.role.name !== "admin") {
        if (
          data.data.user.fullname === "" ||
          data.data.user.sex === "" ||
          data.data.user.phone === ""
        ) {
          navigate("/dashboard/settings");
          window.my_modal_1.showModal();
        }
      }
      getUserRole(); // Call the function immediately
    }
  }, [isSuccess, data]);

  if (isError) {
    return `error.message`;
  }

  if (isLoading) {
    return <Loader />;
  }

  const handleLogout = async () => {
    localStorage.clear();
    // Wait for localStorage to be cleared
    await new Promise((resolve) => setTimeout(resolve, 0));
    window.location.href = "/login";
  };

  // const tokenExists = localStorage.getItem("token") !== null;

  return (
    <div className="relative md:fixed flex h-[100vh] w-full text-blackColor">
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
        className={`hidden md:flex ease-in-out duration-500 w-[20%] bg-lightGrey z-50 h-full pt-11  md:overflow-auto scrollbar-hide  flex-col  items-start space-y-10  pb-10`}
      >
        <img
          className="object-contain w-[10rem] mx-7"
          src={logo}
          alt="Raizon logo"
        />
        {/* <p className="w-auto text-logo font-playfair-sc text-blackColor flex mx-7">
          RAIZON
        </p> */}

        <Link
          to={
            isAdmin
              ? "/admin/dashboard"
              : data.data.user.fullname === "" ||
                data.data.user.sex === "" ||
                data.data.user.phone === ""
              ? "/dashboard/settings"
              : "/dashboard"
          }
        >
          <IconsWithText
            icon={<AiOutlineHome />}
            path={
              isAdmin
                ? "/admin/dashboard"
                : data.data.user.fullname === "" ||
                  data.data.user.sex === "" ||
                  data.data.user.phone === ""
                ? "/dashboard/settings"
                : "/dashboard"
            }
            iconSize="28px"
            text="Dashboard"
          />
        </Link>
        {isAdmin && (
          <Link to={"/admin/user-management"}>
            <IconsWithText
              icon={<AiOutlineSolution />}
              iconSize="28px"
              path={"/admin/user-management"}
              text={"User Management"}
            />
          </Link>
        )}
        <Link to={isAdmin ? "/admin/all-feeds" : "/dashboard/feeds"}>
          <IconsWithText
            icon={<AiOutlineFund />}
            iconSize="28px"
            path={isAdmin ? "/admin/all-feeds" : "/dashboard/feeds"}
            text="Feeds"
          />
        </Link>
        {!isAdmin && (
          <Link to={"/dashboard/new-profile"}>
            <IconsWithText
              icon={<AiOutlineUserAdd />}
              iconSize="28px"
              path={"/dashboard/new-profile"}
              text={"New Profiles"}
            />
          </Link>
        )}
        <Link to={isAdmin ? "/admin/all-profiles" : "/dashboard/all-profiles"}>
          <IconsWithText
            icon={<AiOutlineTeam />}
            iconSize="28px"
            path={isAdmin ? "/admin/all-profiles" : "/dashboard/all-profiles"}
            text="Profiles"
          />
        </Link>
        {isAdmin && (
          <Link to={"/admin/pricing"}>
            <IconsWithText
              icon={<AiOutlinePercentage />}
              iconSize="28px"
              path={"/admin/pricing"}
              text="Pricing"
            />
          </Link>
        )}
        {isAdmin && (
          <Link to={"/admin/measurements"}>
            <IconsWithText
              icon={<AiOutlineScissor />}
              iconSize="28px"
              path={"/admin/measurements"}
              text="Measurement"
            />
          </Link>
        )}
        <Link to={isAdmin ? "/admin/settings" : "/dashboard/settings"}>
          <IconsWithText
            icon={<AiOutlineSetting />}
            iconSize="28px"
            path={isAdmin ? "/admin/settings" : "/dashboard/settings"}
            text="Settings"
          />
        </Link>
        {isAdmin && (
          <Link to={"/admin/tickets"}>
            <IconsWithText
              icon={<AiOutlineMail />}
              iconSize="28px"
              path={"/admin/tickets"}
              text="Tickets"
            />
          </Link>
        )}
        {isAdmin && (
          <Link to={"/admin/broadcast"}>
            <IconsWithText
              icon={<AiOutlineNotification />}
              iconSize="28px"
              path={"/admin/broadcast"}
              text="Broadcasts"
            />
          </Link>
        )}
        <button onClick={handleLogout}>
          <IconsWithText
            icon={<AiOutlineLogout />}
            iconSize="28px"
            text="Logout"
          />
        </button>
      </div>
      {/* this is where the mobile menu is */}
      <div
        className={`fixed md:hidden ${
          showMenu ? "left-0" : "left-[-100%]"
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
        <Link to={isAdmin ? "/admin/dashboard" : "/dashboard"}>
          <IconsWithText
            icon={<AiOutlineHome />}
            iconSize="28px"
            path={isAdmin ? "/admin/dashboard" : "/dashboard"}
            text="Dashboard"
          />
        </Link>
        {isAdmin && (
          <Link to={"/admin/user-management"}>
            <IconsWithText
              icon={<AiOutlineSolution />}
              iconSize="28px"
              path={"/admin/user-management"}
              text={"User Management"}
            />
          </Link>
        )}
        <Link to={isAdmin ? "/admin/all-feeds" : "/dashboard/feeds"}>
          <IconsWithText
            icon={<AiOutlineFund />}
            iconSize="28px"
            path={isAdmin ? "/admin/all-feeds" : "/dashboard/feeds"}
            text="Feeds"
          />
        </Link>
        {!isAdmin && (
          <Link to={"/dashboard/new-profile"}>
            <IconsWithText
              icon={<AiOutlineUserAdd />}
              iconSize="28px"
              path={"/dashboard/new-profile"}
              text={"New Profiles"}
            />
          </Link>
        )}
        <Link to={isAdmin ? "/admin/all-profiles" : "/dashboard/all-profiles"}>
          <IconsWithText
            icon={<AiOutlineTeam />}
            iconSize="28px"
            path={isAdmin ? "/admin/all-profiles" : "/dashboard/all-profiles"}
            text="Profiles"
          />
        </Link>
        {isAdmin && (
          <Link to={"/admin/pricing"}>
            <IconsWithText
              icon={<AiOutlinePercentage />}
              iconSize="28px"
              path={"/admin/pricing"}
              text="Pricing"
            />
          </Link>
        )}
        {isAdmin && (
          <Link to={"/admin/measurements"}>
            <IconsWithText
              icon={<AiOutlineScissor />}
              iconSize="28px"
              path={"/admin/measurements"}
              text="Measurement"
            />
          </Link>
        )}
        <Link to={isAdmin ? "/admin/settings" : "/dashboard/settings"}>
          <IconsWithText
            icon={<AiOutlineSetting />}
            iconSize="28px"
            path={isAdmin ? "/admin/settings" : "/dashboard/settings"}
            text="Settings"
          />
        </Link>
        {isAdmin && (
          <Link to={"/admin/tickets"}>
            <IconsWithText
              icon={<AiOutlineMail />}
              iconSize="28px"
              path={"/admin/tickets"}
              text="Tickets"
            />
          </Link>
        )}
        {isAdmin && (
          <Link to={"/admin/broadcast"}>
            <IconsWithText
              icon={<AiOutlineNotification />}
              iconSize="28px"
              path={"/admin/broadcast"}
              text="Broadcasts"
            />
          </Link>
        )}

        <button onClick={handleLogout}>
          <IconsWithText
            icon={<AiOutlineLogout />}
            iconSize="28px"
            text="Logout"
          />
        </button>
      </div>
      {/* this is where the top section starts */}
      <div className="w-screen">
        <img className=" w-full object-cover " src={topPattern} alt="" />
        <div className="flex flex-col   max-h-[100vh]">
          <div className="flex flex-col md:flex-row items-center justify-between text-left mx-7 z-40">
            <div className="w-full md:w-auto flex items-center justify-between">
              <h3 className="text-[30px] font-bold mt-[40px] mb-[20px]">
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
            <div className="hidden md:flex justify-end items-center   mt-[40px] mb-[20px]">
              <div
                className={` ${
                  hideSearch ? "hidden" : "flex"
                }  items-center justify-start p-3 h-[50px] mr-[35px] border border-lightGrey bg-lightGrey/20 rounded-[20px] md:min-w-[280px] max-w-xs`}
              >
                <CiSearch size={23} className="mr-5" />
                <input
                  className="text-[16px] font-normal text-blackColor bg-transparent outline-none focus:outline-none w-full"
                  placeholder="Search"
                  type="text"
                  value={value}
                  onChange={onChange}
                />
              </div>
              <button onClick={() => setShowNotification(!showNotification)}>
                <div className="bg-white shadow-md p-1.5 border w-10 rounded-full">
                  <HiOutlineBell color="blackColor" size={25} />
                </div>
              </button>
              {/* notification display */}
              {showNotification && (
                <NotificationList showNotification={showNotification} />
              )}
              <div>
                {" "}
                <img
                  className="h-[51px] w-[51px] object-cover rounded-full ml-[18px] mr-[22px]"
                  src={
                    data.data.user.profile_picture !== ""
                      ? data.data.user.profile_picture
                      : `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png`
                  }
                  alt="user avatar"
                />
              </div>
              <p className="flex items-center gap-1 text-blackColor text-[16px] font-semibold">
                {data.data.user.fullname}
                {/* <MdOutlineKeyboardArrowDown size={30} /> */}
              </p>
            </div>
          </div>
          <div className="max-h-[90%] ml-7  pb-10"> {children}</div>
        </div>
      </div>
    </div>
  );
};

export default BaseDashboardNavigation;
