import React from 'react'
import BaseDashboardNavigation from '../../generalComponents/BaseDashboardNavigation'
import useGetSupportQuery from './controller/get_all_support'
import moment from 'moment'
import SupportTable from './component/SupportTable'
import { useLocation } from "react-router-dom";


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
                <p className='text-[20px] font-normal mb-[13px]'>Your Inbox</p>
                <div className='bg-white rounded-[10px] p-[12px]'>

                    <SupportTable
                        supports={supports}
                    />

                </div>

            </div>
        </BaseDashboardNavigation>
    )
}

export default SupportManagement