import React, { useState } from "react";
import BaseDashboardNavigation from "../../generalComponents/BaseDashboardNavigation";
import EmptyContent from "../../generalComponents/EmptyContent";
import Loader from "../../generalComponents/Loader";
import useGetUseRefferal from "../referralManagement/controller/get_user_referrals";
import useGetUserDetailsManager from "../settings/controllers/get_UserDetails_controller";
import ReferredTable from "../referralManagement/components/RefferedTable";

const Referral = () => {
    const { data, isError, error, isLoading, isSuccess } =
        useGetUserDetailsManager();
    const userId = data?.data?.user?._id

    const { isLoading: fetchingReferral, referrals, pagination } = useGetUseRefferal({
        enabled: Boolean(userId),
        userId: userId
    })
    const [activePage, setActivePage] = useState(1)


    const handlePage = (page) => {
        setActivePage(page)
    }
    return (
        <BaseDashboardNavigation title={"Referral"} hideSearch={false}>
            {
                isLoading || fetchingReferral ? <Loader /> :
                    <>
                        {
                            referrals?.length > 0 ? <ReferredTable referrals={referrals} /> : <EmptyContent content={'No referral yet'} className={'h-[300px]'} />
                        }
                    </>
            }

        </BaseDashboardNavigation >
    );
};

export default Referral;
