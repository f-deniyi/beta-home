import React, { useState } from 'react'
import ModalManagement from '../../../generalComponents/ModalManagement'
import { close, user } from '../../../assets/icons'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import CustomButton from '../../../generalComponents/Button'
import ProductOrders from '../../products/view/orders'
import ServicesOrder from '../../services/components/ServicesOrder'
import { UpdateVendorRequestsMutation } from '../controllers/update_requests'

const RequestDetails = ({ user }) => {

    const { updateRequest, isLoading } = UpdateVendorRequestsMutation()

    const handleUpdateRequest = (status) => {
        const data = {
            "request": user?.serviceId,
            "status": status,
            "reason": ""
        }
        updateRequest(data)
    }

    return (
        <>
            <ModalManagement
                id={"vendor_request"}
                hideCancel={true}
            >
                <div className='flex items-center justify-between mb-6'>
                    <p className='text-[18px] font-medium '>Customer Details</p>
                    <div onClick={() => document.getElementById('vendor_request').close()} role='button'>
                        <img src={close} alt='close-icon' className='h-[23px] w-[23px]' />
                    </div>

                </div>
                <div className='flex items-center justify-center mb-[26px]'>
                    <div className='flex items-center justify-center flex-col'>
                        <div className='border-2 border-brandPrimary h-[135px] w-[135px] rounded-full flex items-center justify-center mb-1 overflow-hidden'>
                            <img src={user?.profile_picture.length !== '' ? user?.profile_picture : user} alt='icon' className='object-cover rounded-full' />
                        </div>
                        <div className='text-center'>
                            <h3 className='text-[20px] font-bold '>{user?.fullname}</h3>
                            <p className='text-[12px] font-medium'>{user?.email}</p>
                        </div>
                    </div>

                </div>
                <div className='mb-[17.5px] '>
                    <div className="flex w-full">
                        <div className="grid  flex-grow text-center">
                            <p className='mb-0 text-[#696969] text-[12px] font-semibold'>Gender</p>
                            <h3 className='text-[18px] font-medium '>{user?.gender ?? 'N/A'}</h3>
                        </div>
                        <div className="divider divider-horizontal w-[0.3px] bg-[#A5A5A5]" />
                        <div className="grid  flex-grow text-center">
                            <p className='mb-0 text-[#696969] text-[12px] font-semibold'>Phone No.</p>
                            <h3 className='text-[18px] font-medium '>{user?.phone ?? 'N/A'}</h3>
                        </div>
                        <div className="divider divider-horizontal w-[0.3px] bg-[#A5A5A5]" />
                        <div className="grid  flex-grow text-center">
                            <p className='mb-0 text-[#696969] text-[12px] font-semibold'>Status</p>
                            <h3 className='text-[18px] font-medium capitalize'>{user?.status}</h3>
                        </div>

                    </div>
                </div>

                {
                    user?.status !== 'approved' && <div className='flex gap-x-2'>

                        <CustomButton
                            buttonText={'Accept'}
                            isLoading={isLoading}
                            disabled={isLoading}
                            onClick={() => {
                                handleUpdateRequest('approved')
                            }}
                            className={'!text-[15px] font-light w-full mt-3 rounded-full mt-[25px] !bg-brandPrimary !py-[15px]'}
                        />
                        <CustomButton
                            buttonText={'Reject'}
                            className={'!text-[15px] font-light w-full mt-3 rounded-full mt-[25px] !bg-brandGrey  !py-[15px]'}
                            isLoading={isLoading}
                            disabled={isLoading}
                            onClick={() => {
                                handleUpdateRequest('rejected')
                            }}
                        />
                    </div>
                }

            </ModalManagement>

            {/* <ProductOrders /> */}
            {/* <ServicesOrder /> */}

        </>
    )
}

export default RequestDetails