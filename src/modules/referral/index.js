import React, { useState } from "react";
import BaseDashboardNavigation from "../../generalComponents/BaseDashboardNavigation";
import EmptyContent from "../../generalComponents/EmptyContent";
import Loader from "../../generalComponents/Loader";
import useGetUseRefferal from "../referralManagement/controller/get_user_referrals";
import useGetUserDetailsManager from "../settings/controllers/get_UserDetails_controller";
import ReferredTable from "../referralManagement/components/RefferedTable";
import GlobalVariables from "../../constants/GlobalVariables";
import { BiCopy } from "react-icons/bi";
import { toast } from "react-toastify";

const Referral = () => {
  const { data, isError, error, isLoading, isSuccess } =
    useGetUserDetailsManager();
  const userId = data?.data?.user?._id;
  const userDetails = data?.data?.user;

  const {
    isLoading: fetchingReferral,
    referrals,
    pagination,
  } = useGetUseRefferal({
    enabled: Boolean(userId),
    userId: userId,
  });
  const [activePage, setActivePage] = useState(1);

  const handlePage = (page) => {
    setActivePage(page);
  };
  return (
    <BaseDashboardNavigation title={"Referral"} hideSearch={false}>
      {isLoading || fetchingReferral ? (
        <Loader />
      ) : (
        <>
          <div className="w-full bg-white rounded-lg mb-5 flex items-center justify-start px-5 md:px-10 py-10">
            <div className="h-[135px] w-[135px] border-2 border-brandYellow rounded-full">
              <img
                src={
                  userDetails?.profile_picture
                    ? userDetails?.profile_picture
                    : GlobalVariables.defaultProfilePicture
                }
                className="h-full w-full rounded-full object-cover"
                alt=""
              />
            </div>
            <div className="flex flex-col items-start">
              <div className="text-blackColor ml-4 flex flex-col items-start">
                <p className="text-center text-[20px]  font-semibold ">
                  {userDetails?.fullname}
                </p>
                <p className="text-center text-[12px] font-medium ">
                  {userDetails?.email}
                </p>
              </div>
              <div className="flex items-center ml-5 mt-5">
                <div className="font-medium flex flex-col items-start">
                  <p className="text-[#696969] text-[12px] mb-3">
                    No. of referrals
                  </p>
                  <p className="text-blackColor text-[15px]">
                    {referrals.length}
                  </p>
                </div>
                <div className="border-r h-10 mx-20 border-[#a5a5a5]"></div>
                <div className="font-medium flex flex-col items-start">
                  <p className="text-[#696969] text-[12px] mb-3">
                    Your referral code
                  </p>
                  <p className="text-blackColor text-[15px] flex items-center gap-4">
                    {userDetails.referral_code}
                    <BiCopy
                      role="button"
                      onClick={() => {
                        navigator.clipboard.writeText(
                          userDetails.referral_code
                        );
                        toast.success("Copied referral code");
                      }}
                      size={20}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
          {referrals?.length > 0 ? (
            <ReferredTable referrals={referrals} />
          ) : (
            <EmptyContent content={"No referral yet"} className={"h-[300px]"} />
          )}
        </>
      )}
    </BaseDashboardNavigation>
  );
};

export default Referral;
