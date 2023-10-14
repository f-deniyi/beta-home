import React, { useState } from "react";

import BaseDashboardNavigation from "../../generalComponents/BaseDashboardNavigation";

import { format } from "date-fns";


import RepaymentTable from "./components/RepaymentTable";

const ReferralManagement = () => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return format(date, "MMMM d, yyyy");
    };

    return (
        <BaseDashboardNavigation title={"Repayment Management"} hideSearch={true}>
            <div className="flex items-center justify-between my-3">
                <p className="text-[20px] font-normal mb-3">List of repayment</p>
            </div>
            <RepaymentTable />
        </BaseDashboardNavigation>
    );
};

export default ReferralManagement;
