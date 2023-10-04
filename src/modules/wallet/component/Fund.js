import React from 'react'
import ModalManagement from '../../../generalComponents/ModalManagement'
import { close } from '../../../assets/icons'


const FundWallet = () => {

    return (
        <ModalManagement
            id={"fund_wallet"}
            hideCancel={true}
        >
            <div className='flex items-center justify-between mb-6'>
                <p className='text-[18px] font-medium '>Fund Wallet</p>
                <div onClick={() => document.getElementById('fund_wallet').close()} role='button'>
                    <img src={close} alt='close-icon' className='h-[23px] w-[23px]' />
                </div>

            </div>
            <div>
                <form>
                    <div>
                        <label className='text-[14px] font-medium'>Amount</label>
                        <input placeholder='Enter amount' className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none h-[53px] flex-1 px-4 bg-[#EDEDED] rounded-[7px] focus:border-none hover:border-none focus:outline-none focus:shadow-none appearance-none w-full placeholder:[text-[#8E8E8E]] placeholder:text-[12px] placeholder:font-normal" />
                    </div>
                    <div className='mt-[60px] mb-6'>
                        <button className="bg-brandPrimary rounded-full text-[15px] py-[12px] w-full  cursor-pointer"
                            onClick={(e) => {
                                e.preventDefault()
                                document.getElementById('fund_wallet').close()
                            }
                            }
                        >
                            Fund
                        </button>

                    </div>

                </form>

            </div>

        </ModalManagement>
    )
}

export default FundWallet