import React, { useState } from "react";

import BaseDashboardNavigation from "../../generalComponents/BaseDashboardNavigation";

import { format } from "date-fns";


import ReferralTable from "./components/ReferralTable";

const ReferralManagement = () => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return format(date, "MMMM d, yyyy");
    };

    return (
        <BaseDashboardNavigation title={"Referral Management"} hideSearch={true}>
            <div className="flex items-center justify-between my-3">
                <p className="text-[20px] font-normal mb-3">List of vendor referral leads</p>
            </div>
            <ReferralTable />
        </BaseDashboardNavigation>
    );
};

export default ReferralManagement;
