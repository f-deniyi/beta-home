import React, { useState } from 'react'
import ModalManagement from '../../../generalComponents/ModalManagement'
import { close, user } from '../../../assets/icons'
import InputWithFullBoarder from '../../../generalComponents/InputWithFullBoarder'
import CustomButton from '../../../generalComponents/Button'

const FilterRequest = () => {


    return (
        <>
            <ModalManagement
                id={"filter_request"}
                hideCancel={true}
            >
                <div className='flex items-center justify-between mb-6'>
                    <p className='text-[18px] font-medium '>Filter by</p>
                    <div onClick={() => document.getElementById('filter_request').close()} role='button'>
                        <img src={close} alt='close-icon' className='h-[23px] w-[23px]' />
                    </div>
                </div>

                <div>
                    <p className='text-[12px] font-normal text-right'>Clear filter</p>
                    <form>
                        <div>
                            <InputWithFullBoarder
                                label={'Name'}
                                placeholder={'Enter name'}
                                className={'!bg-[#EDEDED] !py-4 !px-[24px]'}
                            />
                        </div>
                        <div>
                            <InputWithFullBoarder
                                label={'Email address'}
                                placeholder={'Enter email address'}
                                className={'!bg-[#EDEDED] !py-4 !px-[24px]'}
                            />
                        </div>
                        <div>
                            <label className="text-13px md:text-16px font-semibold mb-2" >
                                Date created
                            </label>
                            <div className='flex gap-x-3 items-center'>

                                <div className='w-full'>
                                    <InputWithFullBoarder
                                        label={''}
                                        placeholder={''}
                                        className={'!bg-[#EDEDED] !py-4 !px-[24px] w-full'}
                                        type='date'
                                    />
                                </div>
                                <p className='text-[15px] font-medium'>to</p>
                                <div className='w-full'>
                                    <InputWithFullBoarder
                                        label={''}
                                        placeholder={''}
                                        className={'!bg-[#EDEDED] !py-4 !px-[24px] w-full'}
                                        type='date'
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <InputWithFullBoarder
                                label={'No. of Orders'}
                                placeholder={'Enter No. of Orders'}
                                className={'!bg-[#EDEDED] !py-4 !px-[24px]'}
                            />
                        </div>

                        <CustomButton
                            buttonText={'Proceed'}
                            className={'!text-[15px] font-light w-full mt-3 rounded-full mt-[25px] !bg-brandPrimary  !py-[15px]'}
                        />
                    </form>
                </div>


            </ModalManagement>
        </>
    )
}

export default FilterRequest