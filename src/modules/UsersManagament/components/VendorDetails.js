import React, { useState } from 'react'
import ModalManagement from '../../../generalComponents/ModalManagement'
import { close, user } from '../../../assets/icons'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import CustomButton from '../../../generalComponents/Button'
import UserProducts from '../../products/components/UserProducts'
import ServicesOrder from '../../services/components/ServicesOrder'

const VendorDetails = () => {
    const [uploadedImages, setUploadedImages] = useState([]);
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const newImage = { url: reader.result, file };
                setUploadedImages([...uploadedImages, newImage]);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDeleteImage = (index) => {
        const updatedImages = uploadedImages.filter((_, i) => i !== index);
        setUploadedImages(updatedImages);
    };

    return (
        <>
            <ModalManagement
                id={"vendor_details"}
                hideCancel={true}
            >
                <div className='flex items-center justify-between mb-6'>
                    <p className='text-[18px] font-medium '>Vendor Details</p>
                    <div onClick={() => document.getElementById('vendor_details').close()} role='button'>
                        <img src={close} alt='close-icon' className='h-[23px] w-[23px]' />
                    </div>

                </div>
                <div className='flex itens-center justify-center mb-[26px]'>
                    <div>
                        <div className='border-2 border-brandPrimary h-[135px] w-[135px] rounded-full flex items-center justify-center mb-1'>
                            <img src={user} alt='icon' />
                        </div>
                        <div className='text-center'>
                            <h3 className='text-[20px] font-bold '>Mark Oak</h3>
                            <p className='text-[12px] font-medium'>markoak@gmail.com</p>
                        </div>
                    </div>

                </div>
                <div className='mb-[33px] '>
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
                            <h3 className='text-[18px] font-medium '>Vendor</h3>
                        </div>

                    </div>
                </div>

                <div className="flex w-full mb-[20px]">
                    <div className="grid  flex-grow text-center">
                        <p className='mb-0 text-[#696969] text-[15px] font-medium mb-2'>Vendor Products</p>
                        <h3 className='text-[30px] font-semibold '>12 Products</h3>
                        <div classNmw='w-1/3 mx-auto'>
                            <button
                                type="button"
                                onClick={() => {
                                    document.getElementById('vendor_details').close()
                                    document.getElementById('user_products').showModal()
                                }}
                                class="bg-brandPrimary inline-flex items-center px-3 py-2 text-[12px] font-medium text-gray-700 transition-all duration-200  shadow-sm focus:outline-none hover:text-black focus:ring-2 focus:ring-offset-2 focus:ring-[#fff122] px-[20px] py-[15px] rounded-full"
                            >
                                View Details
                            </button>
                        </div>

                    </div>
                    <div className="divider divider-horizontal w-[0.3px] bg-[#A5A5A5]" />
                    <div className="grid  flex-grow text-center">
                        <p className='mb-0 text-[#696969] text-[15px] font-medium mb-2'>Vendor Service</p>
                        <h3 className='text-[30px] font-semibold '>1 Products</h3>
                        <div classNmw='w-1/3 mx-auto'>
                            <button
                                type="button"
                                onClick={() => document.getElementById('customer_details').showModal()}
                                class="bg-brandPrimary inline-flex items-center px-3 py-2 text-[12px] font-medium text-gray-700 transition-all duration-200  shadow-sm focus:outline-none hover:text-black focus:ring-2 focus:ring-offset-2 focus:ring-[#fff122] px-[20px] py-[15px] rounded-full"
                            >
                                View Details
                            </button>
                        </div>
                    </div>

                </div>

                <div>
                    <CustomButton
                        buttonText={'Verify Vendor'}
                        className={'!text-[15px] font-light w-full mt-3 rounded-full mt-[25px] bg-brandPrimary !py-[15px]'}
                    />
                </div>

                <div className='flex gap-x-2'>
                    <CustomButton
                        buttonText={'Suspend User'}
                        className={'!text-[15px] font-light w-full mt-3 rounded-full mt-[25px] !bg-brandGrey !py-[15px]'}
                    />
                    <CustomButton
                        buttonText={'Delete User'}
                        className={'!text-[15px] font-light w-full mt-3 rounded-full mt-[25px] !bg-brandRed text-white !py-[15px]'}
                    />
                </div>




            </ModalManagement>
            <UserProducts />
        </>
    )
}

export default VendorDetails