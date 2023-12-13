import React, { useState } from "react";

import BaseDashboardNavigation from "../../generalComponents/BaseDashboardNavigation";

import { format } from "date-fns";


import { useNavigate } from "react-router-dom";

import UserWallet from "./components/Table";
import useGetAllUsersManager from '../UsersManagament/controllers/get_all_users_controller'
import { useLocation } from "react-router-dom";
import useDebounce from "../../utils/UseDebounce";
import InputWithFullBoarder from "../../generalComponents/InputWithFullBoarder";

const UsersWallet = () => {
    const location = useLocation()
    const isAdmin = location.pathname.includes("/admin");
    const [searchValue, setSearchValue] = useState('')
    const debouncedSearchValue = useDebounce(searchValue, 1000)

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return format(date, "MMMM d, yyyy");
    };
    const [currentIndex, setCurrentIndex] = useState(0);


    const navigate = useNavigate();

    const [selectedUser, setSelectedUser] = useState('All Users')
    const userType = [
        'All Users',
        'Customers',
        'Vendors'
    ]

    const { users, pagination } = useGetAllUsersManager({
        filter: selectedUser === 'All Users' ? null : selectedUser === 'Customers' ? false : true,
        enabled: isAdmin,
        fullname: debouncedSearchValue
    })

    return (
        <BaseDashboardNavigation title={"Users Wallet"} hideSearch={true}>
            <p className="text-[20px] font-normal mb-3">List of users</p>

            <div className="bg-white p-3 rounded-[10px]">

                <div className="flex gap-x-2 items-center justify-between flex-wrap">
                    <div className='flex gap-2 mb-3 flex-wrap'>
                        {
                            userType.map(el => <p
                                onClick={() => {
                                    setSelectedUser(el)
                                }}
                                className={`py-[10px] px-[20px] text-[#696969] font-medium text-[12px] cursor-pointer ${selectedUser !== el ? 'bg-[#F2F2F2]' : 'bg-brandPrimary text-black'} rounded-[20px] `}>{el}</p>)
                        }
                    </div>
                    <div className="">
                        <InputWithFullBoarder
                            placeholder={'Search User...'}
                            className={'!border-black border sm:w-full md:w-[230px]'}
                            onChange={(e) => {
                                setSearchValue(e.target.value.toLowerCase())
                            }}
                        />
                    </div>
                </div>

                <div>
                    <UserWallet users={users} selectedUser={selectedUser} />
                </div>
            </div>



        </BaseDashboardNavigation>
    );
};

export default UsersWallet;
