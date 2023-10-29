import React, { useState } from "react";

import BaseDashboardNavigation from "../../generalComponents/BaseDashboardNavigation";

import { format } from "date-fns";


import { useNavigate } from "react-router-dom";

import UserWallet from "./components/Table";
import useGetAllUsersManager from '../UsersManagament/controllers/get_all_users_controller'
import { useLocation } from "react-router-dom";

const UsersWallet = () => {
    const location = useLocation()
    const isAdmin = location.pathname.includes("/admin");

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
        filter: "",
        enabled: isAdmin
    })


    return (
        <BaseDashboardNavigation title={"User Management"} hideSearch={true}>
            <p className="text-[20px] font-normal mb-3">List of users</p>

            <div className="bg-white p-3 rounded-[10px]">
                <div className='flex gap-2 mb-3'>
                    {
                        userType.map(el => <p
                            onClick={() => {
                                setSelectedUser(el)
                            }}
                            className={`py-[10px] px-[20px] text-[#696969] font-medium text-[12px] cursor-pointer ${selectedUser !== el ? 'bg-[#F2F2F2]' : 'bg-brandPrimary text-black'} rounded-[20px] `}>{el}</p>)
                    }
                </div>
                <div>
                    <UserWallet users={users} selectedUser={selectedUser} />
                </div>
            </div>



        </BaseDashboardNavigation>
    );
};

export default UsersWallet;
