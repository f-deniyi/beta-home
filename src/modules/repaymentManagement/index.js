import React, { useState } from "react";

import BaseDashboardNavigation from "../../generalComponents/BaseDashboardNavigation";

import { format } from "date-fns";


import RepaymentTable from "./components/RepaymentTable";
import useDebounce from "../../utils/UseDebounce";
import InputWithFullBoarder from "../../generalComponents/InputWithFullBoarder";

const ReferralManagement = () => {
    const [searchValue, setSearchValue] = useState('')
    const debouncedSearchValue = useDebounce(searchValue, 1000)

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return format(date, "MMMM d, yyyy");
    };

    return (
        <BaseDashboardNavigation title={"Repayment Management"} hideSearch={true}>
            <div className="flex flex-wrap items-center justify-between my-3">
                <p className="text-[20px] font-normal mb-3">List of repayment</p>
                <div className="">
                    <InputWithFullBoarder
                        placeholder={'Search repayment...'}
                        className={'!border-black border sm:w-full md:w-[230px]'}
                        onChange={(e) => {
                            setSearchValue(e.target.value.toLowerCase())
                        }}
                    />
                </div>
            </div>
            <RepaymentTable debouncedSearchValue={debouncedSearchValue} />
        </BaseDashboardNavigation>
    );
};

export default ReferralManagement;
