import React, { useEffect, useState } from "react";
import BaseDashboardNavigation from "../../../generalComponents/BaseDashboardNavigation";
import coverImage from '../../../assets/images/vendor_cover.png'
import background from '../../../assets/images/background.png'
import { verifiedIcon, locationIcon, accountOutline, walletOutline, rightArrow } from "../../../assets/icons";
import ServicesTable from "../../../constants/Table/Services";
import ProductTable from "../../../constants/Table/Products";


const Dashboard = () => {


  return (
    <BaseDashboardNavigation title={"Dashboard"} hideSearch={false}>
      <div class="relative w-full">
        <div class="bg-cover bg-center h-[207px]  rounded-bl-[10px] rounded-br-[10px] w-full" style={{ backgroundImage: `url(${coverImage})` }}></div>
        <div class="absolute bottom-[0px] left-[80px] transform -translate-x-1/2 translate-y-1/2 rounded-full overflow-hidden border-4 border-brandPrimary">
          <img class="object-cover h-[120px] w-[120px] " src={background} alt="Profile Picture" />
        </div>

        <div class="absolute bottom-[0px] right-[0px] transform -translate-x-1/2 translate-y-1/2  overflow-hidden ">
          <div className="flex">
            <div className="rounded-full bg-brandPrimary h-[50px] w-[50px] mr-[10px] flex items-center justify-center">
              <img src={walletOutline} className="object-cover " />
            </div>
            <div className="rounded-full bg-brandPrimary h-[50px] w-[50px]  flex items-center justify-center">
              <img src={accountOutline} className="object-cover " />
            </div>
          </div>
        </div>
      </div>
      <div class="ml-40">
        <div className="mt-3">
          <div className="flex items-center ">
            <h3 className="text-[21.457px] text-black font-medium mr-2">Apex funitures</h3>
            <img src={verifiedIcon} className="object-cover h-[15px] w-[15px] p-[0.7px] rounded-full " />
          </div>
          <div className="flex items-center mb-2">
            <img src={locationIcon} className="object-cover  p-[0.7px] rounded-full mr-1" />
            <p className="text-[15.735px] text-[#696969] font-normal mr-2">Silverline Estate Lekki Lagos</p>
          </div>
          <div className="flex items-center ">
            <p className="bg-brandPrimary border-1 border-black rounded-full font-medium px-2 py-1 text-[11.44px] me-2">Created</p>
            <p className="font-light text-[11.444px] text-[#69696]">3months ago</p>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex items-center justify-between mt-3 mb-2">
          <h3 className="text-[15px] font-medium">Service Orders</h3>
          <div className="flex items-center">
            <p className="pe-2 text-[#4F4F4F] text-[12px]">See all </p>
            <div ><img src={rightArrow} /></div>
          </div>

        </div>
        <div className="bg-white  px-3 rounded-lg">
          <ServicesTable />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between mt-3 mb-2">
          <h3 className="text-[15px] font-medium">Product Orders</h3>
          <div className="flex items-center">
            <p className="pe-2 text-[#4F4F4F] text-[12px]">See all </p>
            <div ><img src={rightArrow} /></div>
          </div>

        </div>
        <div className="bg-white  px-3 rounded-lg">
          <ProductTable />
        </div>
      </div>
    </BaseDashboardNavigation>
  );
};

export default Dashboard;
