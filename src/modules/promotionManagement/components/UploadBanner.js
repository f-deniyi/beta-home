import React, { useState } from 'react'
import ModalManagement from '../../../generalComponents/ModalManagement'
import CustomButton from '../../../generalComponents/Button'
import InputWithFullBoarder from '../../../generalComponents/InputWithFullBoarder'
import { close, banner_img } from '../../../assets/icons'
import { AiOutlinePlus } from 'react-icons/ai'


const UploadBanner = () => {

    const [uploadedImages, setUploadedImages] = useState(null);
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const newImage = { url: reader.result, file };
                setUploadedImages(newImage);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <ModalManagement
                id={"upload_banner"}
                hideCancel={true}
            >
                <div className='flex items-center justify-between mb-6'>
                    <p className='text-[18px] font-medium '>Upload Banner</p>
                    <div onClick={() => document.getElementById('upload_banner').close()} role='button'>
                        <img src={close} alt='close-icon' className='h-[23px] w-[23px]' />
                    </div>

                </div>
                <div className=' mb-[26px]'>
                    <label className="text-13px md:text-16px font-semibold mb-4">
                        Upload banner picture
                    </label>

                    <div className='gap-x-[39px] mt-3 mb-5' >

                        <div>
                            <div className="relative text-center ">
                                <label className="cursor-pointer  justify-center py-4  px-[25px] rounded-full mb-2 h-[185px]  rounded-lg flex items-center justify-center mb-1 rounded-lg border-[#A5A5A5] border-2 border border-dashed bg-white w-full ">
                                    <div>
                                        <img src={banner_img} alt='icon' />
                                    </div>
                                    <input
                                        type="file"
                                        className="hidden"
                                        accept="image/*"
                                        onChange={(e) => handleFileUpload(e)}
                                    />
                                </label>
                            </div>

                        </div>
                    </div>

                    <form>
                        <div>
                            <InputWithFullBoarder
                                label={'Title'}
                                placeholder={'Enter Title'}
                                className={'!bg-[#EDEDED] !py-4 !px-[24px]'}
                            />
                        </div>

                        <div>
                            <InputWithFullBoarder
                                label={'Banner Link'}
                                placeholder={'Enter banner link'}
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

export default UploadBanner