import React from 'react'
import BaseDashboardNavigation from '../../generalComponents/BaseDashboardNavigation'
import useGetSupportQuery from './controller/get_all_support'
import moment from 'moment'
import SupportTable from './component/SupportTable'
import { useLocation } from "react-router-dom";
import CreateTicket from './component/CreateTicket'

const SupportManagement = () => {
    let location = useLocation();
    const isAdmin = location.pathname.includes("/admin");

    const { supports, isLoading } = useGetSupportQuery({
        page: 1,
        isAdmin
    })
    console.log('supports', supports)
    return (
        <BaseDashboardNavigation title={'Support Management'}>
            <div className='mt-[17px]'>
                <div className='flex items-center justify-between mb-4'>
                    <p className='text-[20px] font-normal mb-[13px]'>Your Inbox</p>

                    <button className='bg-brandPrimary py-2 px-5 rounded-md' onClick={
                        () => document.getElementById("create_ticket").showModal()
                    }>
                        Create Ticket
                    </button>
                </div>
                <div className='bg-white rounded-[10px] p-[12px]'>

                    <SupportTable
                        supports={supports}
                    />

                </div>

            </div>
            <CreateTicket />
        </BaseDashboardNavigation>
    )
}

export default SupportManagement