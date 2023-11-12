import React, { useState } from 'react'
import ModalManagement from '../../../generalComponents/ModalManagement'
import { close, user } from '../../../assets/icons'
import useGetEnrollmentDetails from '../controller/get_enrollment_details'
import Loader from '../../../generalComponents/Loader'
import moment from 'moment'
const LeadDetails = ({ enrollmentId }) => {

    const { enrollment, isLoading } = useGetEnrollmentDetails({
        enabled: Boolean(enrollmentId),
        enrollmentId
    })


    return (
        <>
            <ModalManagement
                id={"repayment_details"}
                hideCancel={true}
            >
                {
                    isLoading ? <Loader /> : <>
                        <div className='flex items-center justify-between mb-6'>
                            <p className='text-[18px] font-medium '>Customer Details</p>
                            <div onClick={() => document.getElementById('repayment_details').close()} role='button'>
                                <img src={close} alt='close-icon' className='h-[23px] w-[23px]' />
                            </div>

                        </div>
                        <div className='flex itens-center justify-center mb-[26px]'>
                            <div>
                                <div className='border-2 border-brandPrimary h-[135px] w-[135px] rounded-full flex items-center justify-center mb-1 overflow-hidden'>
                                    <img src={enrollment?.user?.profile_picture?.length > 0 ? enrollment?.user?.profile_picture : user} alt='icon' />
                                </div>
                                <div className='text-center'>
                                    <h3 className='text-[20px] font-bold '>{enrollment?.user?.fullname}</h3>
                                    <p className='text-[12px] font-medium'>{enrollment?.user?.email}</p>
                                </div>
                            </div>

                        </div>
                        <div className='my-[17.5px] '>
                            <div className="flex w-full">
                                <div className="grid  flex-grow text-center">
                                    <p className='mb-0 text-[#696969] text-[12px] font-semibold'>Gender</p>
                                    <h3 className='text-[18px] font-medium '>{enrollment?.user?.gender ?? 'N/A'}</h3>
                                </div>
                                <div className="divider divider-horizontal w-[0.3px] bg-[#A5A5A5]" />
                                <div className="grid  flex-grow text-center">
                                    <p className='mb-0 text-[#696969] text-[12px] font-semibold'>Phone No.</p>
                                    <h3 className='text-[18px] font-medium '>{enrollment?.user?.phone}</h3>
                                </div>
                                <div className="divider divider-horizontal w-[0.3px] bg-[#A5A5A5]" />
                                <div className="grid  flex-grow text-center">
                                    <p className='mb-0 text-[#696969] text-[12px] font-semibold'>Status</p>
                                    <h3 className='text-[18px] font-medium capitalize'>{enrollment?.enrollment_status}</h3>
                                </div>

                            </div>
                        </div>
                        <div className='flex items-center justify-between mt-[25px] mb-4'>
                            <p className='text-[15px] font-medium '>Scheduled inspection date:</p>
                            <h3 className='text-[#212121] font-semibold text-[20px]'>{moment(enrollment?.inspection_date).format('ll')}</h3>
                        </div>
                    </>
                }


            </ModalManagement>
        </>
    )
}

export default LeadDetails


