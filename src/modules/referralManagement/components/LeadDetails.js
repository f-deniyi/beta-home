import React, { useState } from 'react'
import ModalManagement from '../../../generalComponents/ModalManagement'
import { close, user } from '../../../assets/icons'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import ReferredTable from './RefferedTable'

const LeadDetails = () => {


    return (
        <>
            <ModalManagement
                id={"lead_details"}
                hideCancel={true}
            >
                <div className='flex items-center justify-between mb-6'>
                    <p className='text-[18px] font-medium '>Lead</p>
                    <div onClick={() => document.getElementById('lead_details').close()} role='button'>
                        <img src={close} alt='close-icon' className='h-[23px] w-[23px]' />
                    </div>

                </div>
                <div className='flex itens-center justify-center mb-[26px]'>
                    <div>
                        <div className='border-2 border-brandPrimary h-[135px] w-[135px] rounded-full flex items-center justify-center mb-1'>
                            <img src={user} alt='icon' />
                        </div>
                        <div className='text-center'>
                            <h3 className='text-[20px] font-bold '>Faith May</h3>
                            <p className='text-[12px] font-medium'>faithmay@gmail.com</p>
                        </div>
                    </div>

                </div>
                <div className='mb-[17.5px] '>
                    <div className="flex w-full">
                        <div className="grid  flex-grow text-center">
                            <p className='mb-0 text-[#696969] text-[12px] font-semibold'>Gender</p>
                            <h3 className='text-[18px] font-medium '>Female</h3>
                        </div>
                        <div className="divider divider-horizontal w-[0.3px] bg-[#A5A5A5]" />
                        <div className="grid  flex-grow text-center">
                            <p className='mb-0 text-[#696969] text-[12px] font-semibold'>Phone No.</p>
                            <h3 className='text-[18px] font-medium '>+234 810 123 4567</h3>
                        </div>
                        <div className="divider divider-horizontal w-[0.3px] bg-[#A5A5A5]" />
                        <div className="grid  flex-grow text-center">
                            <p className='mb-0 text-[#696969] text-[12px] font-semibold'>Status</p>
                            <h3 className='text-[18px] font-medium '>Customer</h3>
                        </div>

                    </div>
                </div>
                <div>
                    <p className='text-[15px] font-medium mb-3'>Package</p>
                    <div className='bg-brandPrimary rounded-[10px] px-[18px] py-[15px] flex items-center justify-between shadow-lg mb-[30px]'>
                        <div>
                            <h3 className='text-[22px] font-medium mb-0'>Beta</h3>
                            <h3 className='text-[29px] font-semibold mb-0 -mt-3'>Basic</h3>
                            <p className='text-[13px] font-normal mb-0 -mt-2'>Daily Payment Plan</p>
                        </div>
                        <div>
                            <MdOutlineArrowForwardIos size='19' />
                        </div>
                    </div>
                </div>
                <ReferredTable />
            </ModalManagement>
        </>
    )
}

export default LeadDetails