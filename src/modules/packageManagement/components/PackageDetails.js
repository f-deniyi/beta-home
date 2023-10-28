import React, { useState } from "react";
import ModalManagement from "../../../generalComponents/ModalManagement";
import {
  close,
  user,
  productCategory,
  brand,
  beta,
} from "../../../assets/icons";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import CustomButton from "../../../generalComponents/Button";
import PackageTable from "./PackageTable";
import EditPackage from "./EditPackage";
import { DeletePackageManager } from "../controller/delete_package_controller";

const PackageDetails = ({ packageDetails }) => {
  const { deletePackageController, isLoading } = DeletePackageManager(
    packageDetails._id
  );
  return (
    <>
      <ModalManagement id={"package_details"} hideCancel={true}>
        <div className="flex items-center justify-between mb-6">
          <p className="text-[18px] font-medium ">Package</p>
          <div
            onClick={() => document.getElementById("package_details").close()}
            role="button"
          >
            <img src={close} alt="close-icon" className="h-[23px] w-[23px]" />
          </div>
        </div>
        <div className=" mb-[26px]">
          <div className="flex itens-center justify-center">
            <div className="mb-[10px]">
              <div className=" h-[135px] w-[135px] rounded-lg flex items-center justify-center mb-1">
                <img src={beta} alt="icon" />
              </div>
            </div>
          </div>
          <h3 className="text-[30px] font-semibold text-center">
            {packageDetails?.title}
          </h3>
        </div>

        <div className=" mt-[30px]">
          <div className="flex items-center justify-between mb-4">
            <p className="text-[12px] font-medium text-[#8E8E8E]">
              Percentage penalty for 60days non payment
            </p>
            <h3 className="text-[#212121] font-semibold text-[15px]">20%</h3>
          </div>
          <div className="flex items-center justify-between mb-4">
            <p className="text-[12px] font-medium text-[#8E8E8E]">
              Percentage penalty for 90days non payment
            </p>
            <h3 className="text-[#212121] font-semibold text-[15px]">30%</h3>
          </div>
          <div className="flex items-center justify-between mb-4">
            <p className="text-[12px] font-medium text-[#8E8E8E]">
              Package amount
            </p>
            <h3 className="text-[#212121] font-semibold text-[15px]">
              {`N${packageDetails?.amount}`}
            </h3>
          </div>
        </div>

        <PackageTable list={packageDetails.items} />
        <div className="flex gap-x-2 mb-4">
          <CustomButton
            buttonText={"Edit Package"}
            onClick={() => {
              document.getElementById("package_details").close();
              document.getElementById("edit_package").showModal();
            }}
            className={
              "!text-[15px] font-light w-full mt-3 rounded-full mt-[25px] !bg-brandprimary !py-[15px]"
            }
          />
          <CustomButton
            buttonText={"Delete Package"}
            isLoading={isLoading}
            onClick={async () => {
              await deletePackageController();
              document.getElementById("package_details").close();
            }}
            className={
              "!text-[15px] font-light w-full mt-3 rounded-full mt-[25px] !bg-brandRed text-white !py-[15px]"
            }
          />
        </div>
      </ModalManagement>
      <EditPackage packageDetails={packageDetails} />
    </>
  );
};

export default PackageDetails;
