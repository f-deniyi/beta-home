import React, { useState } from "react";

import BaseDashboardNavigation from "../../generalComponents/BaseDashboardNavigation";

import { format } from "date-fns";
// import FewDataTable from "../../generalComponents/FewDataTable";

import ErrorManager from "../../generalComponents/ErrorManager";
import Loader from "../../generalComponents/Loader";
// import useGetAnalytics from "./profiles/controllers/getAnalytics";
import { customers, vendor_active, users_active, arrowRight } from "../../assets/icons";

import { useNavigate } from "react-router-dom";
import Chart from "../../generalComponents/Chart";
import BarChart from "../../generalComponents/BarChart";

import { FiArrowRight } from 'react-icons/fi'
import RequestTable from "./components/RequestTable";
import { filterIcon } from "../../assets/icons";
import FilterRequest from "./components/FilterRequest";
import UseGetVendorRequestsQuery from "./controllers/get_requests";
import useDebounce from "../../utils/UseDebounce";
import InputWithFullBoarder from "../../generalComponents/InputWithFullBoarder";

const VendorRequest = () => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return format(date, "MMMM d, yyyy");
    };
    const [searchValue, setSearchValue] = useState('')
    const debouncedSearchValue = useDebounce(searchValue, 1000)
    const { requests, pagination } = UseGetVendorRequestsQuery({
        fullname: debouncedSearchValue
    })

    return (
        <BaseDashboardNavigation title={"Vendor Request Management"} hideSearch={true}>
            <div className="flex items-center justify-between my-3">
                <p className="text-[20px] font-normal mb-3">List of requests</p>
                <div className="">
                    <InputWithFullBoarder
                        placeholder={'Search name...'}
                        className={'!border-black border sm:w-full md:w-[230px]'}
                        onChange={(e) => {
                            setSearchValue(e.target.value.toLowerCase())
                        }}
                    />
                </div>
                {/* <div>
                    <button className="bg-brandPrimary flex gap-x-2 py-3 shadow-lg px-[25px] rounded-full " onClick={() => {
                        document.getElementById('filter_request').showModal()
                    }}>
                        <img src={filterIcon} alt='icon' />
                        <p className="text-[12px] font-medium">Filter</p>
                    </button>
                </div> */}

            </div>
            <RequestTable requests={requests} pagination={pagination} />
            <FilterRequest />
        </BaseDashboardNavigation>
    );
};

export default VendorRequest;
