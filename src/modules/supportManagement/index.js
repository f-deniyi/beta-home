import React from 'react'
import BaseDashboardNavigation from '../../generalComponents/BaseDashboardNavigation'
import useGetSupportQuery from './controller/get_all_support'
import moment from 'moment'
import SupportTable from './component/SupportTable'

const SupportManagement = () => {
    const { supports, isLoading } = useGetSupportQuery({
        page: 1
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