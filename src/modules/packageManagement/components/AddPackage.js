import React, { useState } from 'react'
import ModalManagement from '../../../generalComponents/ModalManagement'
import CustomButton from '../../../generalComponents/Button'
import InputWithFullBoarder from '../../../generalComponents/InputWithFullBoarder'
import { close } from '../../../assets/icons'
import { AiOutlinePlus } from 'react-icons/ai'


const AddCategory = () => {
    const [count, setCount] = useState(1)
    const items = [...Array(count).keys()];



    return (
        <>
            <ModalManagement
                id={"add_category"}
                hideCancel={true}
            >
                <div className='flex items-center justify-between mb-6'>
                    <p className='text-[18px] font-medium '>Add a Package</p>
                    <div onClick={() => document.getElementById('add_category').close()} role='button'>
                        <img src={close} alt='close-icon' className='h-[23px] w-[23px]' />
                    </div>

                </div>
                <div className=' mb-[26px]'>


                    <form>
                        <div>
                            <InputWithFullBoarder
                                label={'Title'}
                                placeholder={'Enter package title'}
                                className={'!bg-[#EDEDED] !py-4 !px-[24px]'}
                            />
                        </div>
                        <div>
                            <InputWithFullBoarder
                                label={'Sub-title'}
                                placeholder={'Enter package sub-title'}
                                className={'!bg-[#EDEDED] !py-4 !px-[24px]'}
                            />
                        </div>
                        <div className='mt-3 mb-6'>
                            <div className='flex items-center justify-between'>
                                <label className="text-13px md:text-16px font-semibold mb-2">
                                    items
                                </label>
                                <button className="bg-brandPrimary flex  py-3 shadow-lg px-[25px] rounded-full " onClick={(e) => {
                                    e.preventDefault()
                                    setCount(count => count + 1)
                                }}>
                                    {/* <AiOutlinePlus /> */}
                                    <p className="text-[12px] font-medium">+Add item</p>
                                </button>
                            </div>
                            {
                                items.map((el, i) =>
                                    <div className='ml-[43px]'>
                                        <div >
                                            <InputWithFullBoarder
                                                label={`item ${i + 1}`}
                                                placeholder={'Enter name'}
                                                className={'!bg-[#EDEDED] !py-4 !px-[24px]'}
                                            />
                                        </div>
                                        <div >
                                            <InputWithFullBoarder
                                                label={`No. of item`}
                                                placeholder={'Enter number of items'}
                                                className={'!bg-[#EDEDED] !py-4 !px-[24px]'}
                                            />
                                        </div>
                                    </div>

                                )
                            }

                        </div>


                        <div>
                            <InputWithFullBoarder
                                label={'Percentage penalty for 60days non payment'}
                                placeholder={'Enter percentage'}
                                className={'!bg-[#EDEDED] !py-4 !px-[24px]'}
                            />
                        </div>

                        <CustomButton
                            buttonText={'Proceed'}
                            className={'!text-[15px] font-light w-full mt-3 rounded-full mt-[25px] !bg-brandPrimary  !py-[15px]'}
                        />
                    </form>
                </div>


            </ModalManagement >
        </>
    )
}

export default AddCategory