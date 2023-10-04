import React from 'react'
import ModalManagement from '../../../generalComponents/ModalManagement'
import { close } from '../../../assets/icons'
import WithdrawOTP from './OTP'

const Withdraw = () => {

    return (
        <>
            <ModalManagement
                id={"withdraw_fund"}
                hideCancel={true}
            >
                <div className='flex items-center justify-between mb-6'>
                    <p className='text-[18px] font-medium '>Withdraw</p>
                    <div onClick={() => document.getElementById('withdraw_fund').close()} role='button'>
                        <img src={close} alt='close-icon' className='h-[23px] w-[23px]' />
                    </div>

                </div>
                <div className='mb-[17px]'>
                    <form>
                        <div className='mb-[17px]'>
                            <label className='text-[14px] font-medium'>Amount to withdraw</label>
                            <input placeholder='Enter amount' className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none h-[53px] flex-1 px-4 bg-[#EDEDED] rounded-[7px] focus:border-none hover:border-none focus:outline-none focus:shadow-none appearance-none w-full placeholder:[text-[#8E8E8E]] placeholder:text-[12px] placeholder:font-normal" />
                        </div>
                        <div className='mb-[17px]'>
                            <label className='text-[14px] font-medium'>Full Name</label>
                            <input placeholder='Enter amount' className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none h-[53px] flex-1 px-4 bg-[#EDEDED] rounded-[7px] focus:border-none hover:border-none focus:outline-none focus:shadow-none appearance-none w-full placeholder:[text-[#8E8E8E]] placeholder:text-[12px] placeholder:font-normal" />
                        </div><div className='mb-[17px]'>
                            <label className='text-[14px] font-medium'>Select bank</label>
                            <input placeholder='Enter amount' className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none h-[53px] flex-1 px-4 bg-[#EDEDED] rounded-[7px] focus:border-none hover:border-none focus:outline-none focus:shadow-none appearance-none w-full placeholder:[text-[#8E8E8E]] placeholder:text-[12px] placeholder:font-normal" />
                        </div>
                        <div className='mb-[17px]'>
                            <label className='text-[14px] font-medium'>Acount Number</label>
                            <input placeholder='Enter amount' className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none h-[53px] flex-1 px-4 bg-[#EDEDED] rounded-[7px] focus:border-none hover:border-none focus:outline-none focus:shadow-none appearance-none w-full placeholder:[text-[#8E8E8E]] placeholder:text-[12px] placeholder:font-normal" />
                        </div>
                        <div className='mb-[17px]'>
                            <label className='text-[14px] font-medium'>Re-enter your Password</label>
                            <input placeholder='Enter amount' type='passowrd' className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none h-[53px] flex-1 px-4 bg-[#EDEDED] rounded-[7px] focus:border-none hover:border-none focus:outline-none focus:shadow-none appearance-none w-full placeholder:[text-[#8E8E8E]] placeholder:text-[12px] placeholder:font-normal" />
                        </div>
                        <div className='mt-[60px] mb-6'>
                            <button className="bg-brandPrimary rounded-full text-[15px] py-[12px] w-full  cursor-pointer"
                                onClick={(e) => {
                                    e.preventDefault()
                                    document.getElementById('withdraw_fund').close()
                                    document.getElementById('withdraw_otp').showModal()
                                }
                                }
                            >
                                Proceed
                            </button>

                        </div>

                    </form>

                </div>

            </ModalManagement>
            <WithdrawOTP />
        </>

    )
}

export default Withdraw