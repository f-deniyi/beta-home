import React, { useState } from 'react'
import ModalManagement from '../../../generalComponents/ModalManagement'
import { close, user, productCategory, brand } from '../../../assets/icons'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import CustomButton from '../../../generalComponents/Button'
import ProductOrders from '../../products/view/orders'
import ServicesOrder from '../../services/components/ServicesOrder'

const CategoryDetails = ({ type }) => {


    return (
        <>
            <ModalManagement
                id={"category_details"}
                hideCancel={true}
            >
                <div className='flex items-center justify-between mb-6'>
                    <p className='text-[18px] font-medium '>Product Category</p>
                    <div onClick={() => document.getElementById('category_details').close()} role='button'>
                        <img src={close} alt='close-icon' className='h-[23px] w-[23px]' />
                    </div>

                </div>
                <div className=' mb-[26px]'>
                    <div className='flex itens-center justify-center'>
                        <div className='mb-[10px]'>
                            <div className=' h-[135px] w-[135px] rounded-lg flex items-center justify-center mb-1'>
                                <img src={type === 'brand' ? brand : productCategory} alt='icon' />
                            </div>
                        </div>

                    </div>
                    <h3 className='text-[30px] font-semibold text-center'>Funiture</h3>
                </div>

                <div className='mb-[17.5px] '>
                    <div className="flex w-full">
                        <div className="grid  flex-grow text-center">
                            <p className='mb-0 text-[#696969] text-[15px] font-medium'>Percentage Shares</p>
                            <h3 className='text-[29px] font-semibold '>5%</h3>
                        </div>
                        <div className="divider divider-horizontal w-[0.3px] bg-[#A5A5A5]" />
                        <div className="grid  flex-grow text-center">
                            <p className='mb-0 text-[#696969] text-[15px] font-medium'>Tax Percentage</p>
                            <h3 className='text-[29px] font-semibold '>2%</h3>
                        </div>


                    </div>
                </div>



                <div className='flex gap-x-2 mb-4'>
                    <CustomButton
                        buttonText={'Edit Category'}
                        className={'!text-[15px] font-light w-full mt-3 rounded-full mt-[25px] !bg-brandprimary !py-[15px]'}
                    />
                    <CustomButton
                        buttonText={'Delete Category'}
                        className={'!text-[15px] font-light w-full mt-3 rounded-full mt-[25px] !bg-brandRed text-white !py-[15px]'}
                    />
                </div>
            </ModalManagement>
        </>
    )
}

export default CategoryDetails