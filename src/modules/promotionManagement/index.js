import React, { useState } from "react";
import BaseDashboardNavigation from "../../generalComponents/BaseDashboardNavigation";
import BannerCard from "./components/BannerCard";
import UploadBanner from "./components/UploadBanner";
import useGetShopBanners from "./controller/get_shop_banners.js";
import useGetUserDetailsManager from "../settings/controllers/get_UserDetails_controller";
import PaginationRounded from "../../generalComponents/Pagination";
import Loader from "../../generalComponents/Loader";
import BannerDetails from "./components/BannerDetails";

const PromotionManagement = ({ isAdmin = true }) => {
  const [bannerId, setBannerId] = useState(null);
  const {
    data: userData,
    isError,
    error,
    isLoading: fetchingDetails,
    isSuccess,
  } = useGetUserDetailsManager();
  const [activePage, setActivePage] = useState(1);

  // const items = [...Array(9).keys()];
  const shopId = userData?.data?.user?.shops[0];
  const { banners, isLoading, pagination } = useGetShopBanners({
    enabled: Boolean(shopId),
    shopId,
    // page: activePage
  });

  const handlePage = (page) => {
    setActivePage(page);
  };

  return isAdmin ? (
    <BaseDashboardNavigation title={"Promotion Management"} hideSearch={true}>
      {isLoading || fetchingDetails ? (
        <Loader />
      ) : (
        <>
          <div className="mb-5">
            <div className="flex items-center justify-between mt-2 mb-6">
              <p className="text-[20px] font-normal ">
                List of promotional banners
              </p>
              <div>
                <button
                  className="bg-brandPrimary flex  py-3 shadow-lg px-[25px] rounded-full "
                  onClick={() => {
                    document.getElementById("upload_banner").showModal();
                  }}
                >
                  <p className="text-[12px] font-medium">+Upload Banner</p>
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg py-[38px] px-[23px] ">
              <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-3 gap-5">
                {banners?.map((item, index) => (
                  <BannerCard
                    type={index}
                    banner={item}
                    setBannerId={setBannerId}
                  />
                ))}
              </div>
              {/* <div className='mb-4 flex items-center justify-center'>
                        <PaginationRounded
                            count={pagination?.pageTotal}
                            onChange={handlePage}
                        />
                    </div> */}
            </div>
          </div>

          <UploadBanner shopId={shopId} />
          <BannerDetails bannerId={bannerId} />
        </>
      )}
    </BaseDashboardNavigation>
  ) : (
    <>
      {isLoading || fetchingDetails ? (
        <Loader />
      ) : (
        <>
          <div className="mb-5">
            <div className="md:flex items-center justify-between mt-2 mb-6">
              <p className="text-[20px] font-normal ">
                List of promotional banners
              </p>
              <div className="w-full text-center">
                <button
                  className="bg-brandPrimary flex  py-3 shadow-lg px-[25px] mt-3 rounded-3  md:mt-0 md:rounded-full "
                  onClick={() => {
                    document.getElementById("upload_banner").showModal();
                  }}
                >
                  <p className="text-[12px] font-medium">+Upload Banner</p>
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg py-[38px] px-[23px] ">
              <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-3 gap-5">
                {banners?.map((item, index) => (
                  <BannerCard
                    type={index}
                    banner={item}
                    setBannerId={setBannerId}
                  />
                ))}
              </div>
              {/* <div className='mb-4 flex items-center justify-center'>
                        <PaginationRounded
                            count={pagination?.pageTotal}
                            onChange={handlePage}
                        />
                    </div> */}
            </div>
          </div>

          <UploadBanner shopId={shopId} />
          <BannerDetails bannerId={bannerId} />
        </>
      )}
    </>
  );
};

export default PromotionManagement;
