import React, { useState } from 'react'
import ModalManagement from '../../../generalComponents/ModalManagement'
import { close, user, productCategory, brand } from '../../../assets/icons'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import CustomButton from '../../../generalComponents/Button'
import banner from '../../../assets/icons/banner_1.svg'
import banner2 from '../../../assets/icons/banner_2.svg'
import bannerBg from '../../../assets/icons/banner_bg.svg'

const CategoryDetails = ({ type }) => {


    return (
        <>
            <ModalManagement
                id={"category_details"}
                hideCancel={true}
            >
                <div className='flex items-center justify-between mb-6'>
                    <p className='text-[18px] font-medium '>Banner</p>
                    <div onClick={() => document.getElementById('category_details').close()} role='button'>
                        <img src={close} alt='close-icon' className='h-[23px] w-[23px]' />
                    </div>

                </div>
                <div
                    className='cursor-pointer h-[170px] flex items-center rounded-lg  pl-4 pr-0 '
                    onClick={() => document.getElementById('category_details').showModal()}
                    style={{
                        background: `url(${bannerBg}),url(${banner}), #fff122`,
                        backgroundPosition: ' right, right bottom,center',
                        backgroundRepeat: 'no-repeat'
                    }}
                >

                    <div>
                        <p className='text-[20px] font-light'>{type % 2 === 0 ? 'Get this @' : 'Hire a professional'}</p>
                        <p className='text-[20px] font-semibold'>{type % 2 === 0 ? '50% Discount' : '50% Discount'}</p>
                        <button className='bg-black rounded-full text-[12px] text-white  font-medium px-5 py-2 mt-2'>{type % 2 === 0 ? 'Buy Now' : 'Contact Now'}</button>
                    </div>
                </div>
                <div className=' mt-[30px]'>
                    <div className='flex items-center justify-between mb-4'>
                        <p className='text-[12px] font-medium text-[#8E8E8E]'>Title</p>
                        <h3 className='text-[#212121] font-semibold text-[15px]'>Repair Services</h3>
                    </div>
                    <div className='flex items-center justify-between mb-4'>
                        <p className='text-[12px] font-medium text-[#8E8E8E]'>Type</p>
                        <h3 className='text-[#212121] font-semibold text-[15px]'>Product</h3>
                    </div><div className='flex items-center justify-between mb-4'>
                        <p className='text-[12px] font-medium text-[#8E8E8E]'>Banner Link</p>
                        <h3 className='text-[#212121] font-semibold text-[15px]'>Repair Services</h3>
                    </div>
                </div>

                <div className='flex gap-x-2 mb-4'>
                    <CustomButton
                        buttonText={'Edit'}
                        className={'!text-[15px] font-light w-full mt-3 rounded-full mt-[25px] !bg-brandprimary !py-[15px]'}
                    />
                    <CustomButton
                        buttonText={'Delete'}
                        className={'!text-[15px] font-light w-full mt-3 rounded-full mt-[25px] !bg-brandRed text-white !py-[15px]'}
                    />
                </div>
            </ModalManagement>
        </>
    )
}

export default CategoryDetails