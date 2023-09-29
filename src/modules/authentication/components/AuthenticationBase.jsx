import React from "react";
import { authentication, logo, topPattern } from "../../../assets/images";
import CustomButton from "../../../generalComponents/Button";
import { Link } from "react-router-dom";

const AuthenticationBase = ({
  title,
  subtitle,
  inputFields,
  buttonText,
  onClick,
  afterElements,
  isLoading,
}) => {
  return (
    <div className="h-full md:h-screen relative text-blackColor  overflow-hidden">
      <div className="flex flex-col md:flex-row items-center  bg-white h-full w-full">
        <div className="md:w-[50%] bg-brandYellow h-full flex flex-col py-[30px] px-10">
          <img
            className="object-contain w-[10rem] mb-7 mt-14"
            src={logo}
            alt="BetaHome logo"
          />

          <p className="flex flex-col items-center justify-center text-[50px] md:text-[100px] font-bold leading-tight z-0 ">
            <span className="-mb-4 md:-mb-8">Vendor</span>{" "}
            <span className="text-[100px] md:text-[200px] -mt-6 md:-mt-10 mask-gradient">
              Store
            </span>
          </p>

          <img
            className="w-full md:max-w-[70%] mx-auto 2xl:py-0 object-contain -mt-10 md:-mt-20 z-10"
            src={authentication}
            alt=""
          />
        </div>

        <div className=" p-10  md:p-20 mx-auto md:w-[35%]">
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
