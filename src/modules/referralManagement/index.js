import React, { useState } from "react";
import BaseDashboardNavigation from "../../generalComponents/BaseDashboardNavigation";
import { format } from "date-fns";
import ReferralTable from "./components/ReferralTable";
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
        <BaseDashboardNavigation title={"Referral Management"} hideSearch={true}>
            <div className="flex flex-wrap md:flex-nowrap items-center justify-between my-3">
                <p className="text-[20px] font-normal mb-3">List of vendor referral leads</p>
                <div className="">
                    <InputWithFullBoarder
                        placeholder={'Search lead...'}
                        className={'!border-black border w-full md:w-[230px]'}
                        onChange={(e) => {
                            setSearchValue(e.target.value.toLowerCase())
                        }}
                    />
                </div>
            </div>
            <ReferralTable debouncedSearchValue={debouncedSearchValue}/>
        </BaseDashboardNavigation>
    );
};

export default ReferralManagement;
