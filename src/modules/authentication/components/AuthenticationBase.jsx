import React from "react";
import { authentication, logo, topPattern } from "../../../assets/images";
import CustomButton from "../../../generalComponents/Button";
import { Link, useLocation } from "react-router-dom";

const AuthenticationBase = ({
  title,
  subtitle,
  inputFields,
  buttonText,
  onClick,
  afterElements,
  isLoading,
}) => {
  let location = useLocation();

  const isAdmin = location.pathname.includes("/admin");

  return (
    <div className="h-full lg:h-screen relative text-blackColor  overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center  bg-white h-full w-full">
        <div className="lg:w-[50%] bg-brandYellow h-full flex flex-col py-[30px] px-10">
          <img
            className="object-contain w-[10rem] mb-7 mt-14"
            src={logo}
            alt="BetaHome logo"
          />

          <p className="flex flex-col items-center justify-center text-[50px] lg:text-[100px] font-bold leading-tight z-0 ">
            <span className="-mb-4 lg:-mb-8">{!isAdmin ? 'Vendor' : 'Super'}</span>{" "}
            <span className="text-[100px] lg:text-[200px] -mt-6 lg:-mt-10 mask-gradient">

              {!isAdmin ? 'Store' : 'Admin'}
            </span>
          </p>

          <img
            className="w-full lg:max-w-[70%] mx-auto 2xl:py-0 object-contain -mt-10 lg:-mt-20 z-10"
            src={authentication}
            alt=""
          />
        </div>

        <div className=" p-10  lg:p-20 mx-auto lg:w-[35%]">
          <div className="bg-white  p-0 flex flex-col justify-center ">
            <div className="mb-[64px] text-left">
              <p className="text-[40px] leading-8 font-bold mb-4">{title}</p>
              <p className="text-[12px] leading-5 ">{subtitle}</p>
            </div>
            {inputFields}
            {/* <button
              onClick={onClick}
              className="bg-offCoffee rounded-[20px] w-[60%] mx-auto py-1.5 px-10 mt-5"
            >
              {buttonText}
            </button> */}

            <CustomButton
              buttonText={buttonText}
              onClick={onClick}
              className="mt-[70px] mb-[31px]"
              isLoading={isLoading}
            />
          </div>
          {afterElements}
        </div>
      </div>
    </div>
  );
};

export default AuthenticationBase;
