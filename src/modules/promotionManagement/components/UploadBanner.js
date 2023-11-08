import React, { useEffect, useState } from 'react'
import ModalManagement from '../../../generalComponents/ModalManagement'
import CustomButton from '../../../generalComponents/Button'
import InputWithFullBoarder from '../../../generalComponents/InputWithFullBoarder'
import { close, banner_img } from '../../../assets/icons'
import { AiOutlinePlus } from 'react-icons/ai'
import useFileUpload from '../../fileupload/fileUploadController'
import { UploadBannerManager } from '../controller/upload_banner'
import BannerProducts from './BannerProducts'

const UploadBanner = ({ shopId }) => {
    const [bannerType, setBannerType] = useState(false)
    const [uploadedImages, setUploadedImages] = useState(null);
    const [title, setTitle] = useState('')
    const [selectedProduct, setSelectedProduct] = useState(null)




    // console.log('---data----', userData)
    const { uploadBannerController, isLoading, isSuccess: bannerUploaded } = UploadBannerManager()

    const {
        error: fileUploadError,
        handleFileUpload: uploadFile,
        isLoading: fileLoading,
        data: uploadUrl,
    } = useFileUpload();


    // const handleFile = async (file) => {
    //     const response = await uploadFile(file)
    //     console.log(response, uploadUrl)
    // }
    // useEffect(() => {
    //     if (uploadedImages) {
    //         handleFile(uploadedImages.file)
    //     }
    // }, [uploadedImages])

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

    const handleCreatePromotionBanner = async (e) => {
        e.preventDefault()
        const bannerPicture = await uploadFile(uploadedImages.file)
        const data = {
            "shop": shopId,
            "product": selectedProduct,
            title,
            "banner_picture": {
                "original": bannerPicture,
                "thumbnail": bannerPicture
            },
            is_service: bannerType === 'service' ? true : false
        }
        // console.log(data)
        uploadBannerController(data)
    }

    useEffect(() => {
        if (bannerType === 'product') {
            document.getElementById('banner_products').showModal()
        }
    }, [bannerType])

    useEffect(() => {
        if (selectedProduct) {
            document.getElementById('banner_products').close()
        }

    }, [selectedProduct])

    useEffect(() => {
        if (bannerUploaded) {
            document.getElementById('upload_banner').close()
        }

    }, [bannerUploaded])

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
                <form onSubmit={handleCreatePromotionBanner}>

                    <div className=' mb-[26px]'>
                        <label className="text-13px md:text-16px font-semibold mb-4">
                            Upload banner picture
                        </label>

                        <div className='gap-x-[39px] mt-3 mb-5' >

                            <div>
                                <div className="relative text-center ">

                                    <label className="cursor-pointer  justify-center py-4   rounded-full mb-2 h-[185px] overflow-hidden rounded-lg flex items-center justify-center mb-1 rounded-lg border-[#A5A5A5] border-2 border border-dashed bg-white w-full ">
                                        <div className={` ${uploadedImages ? 'h-[185px] w-full ' : ""}`}>
                                            <img src={!uploadedImages ? banner_img : uploadedImages?.url} alt='icon' className={`object-cover ${uploadedImages ? 'h-[185px] w-full' : ""}`} />
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

                        <div>
                            <InputWithFullBoarder
                                required
                                label={'Title'}
                                placeholder={'Enter Title'}
                                className={'!bg-[#EDEDED] !py-4 !px-[24px]'}
                                onChange={(e) => {
                                    setTitle(e.target.value)
                                }}
                            />
                        </div>

                        <div className=''>
                            {/* <label className='text-13px md:text-16px font-semibold mb-2'>Gender</label> */}
                            <div className='flex items-center justify-between w-2/4'>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <input
                                            required
                                            type="radio"
                                            name="is_service"
                                            className="radio checked:bg-brandPrimary"
                                            // defaultChecked={!is_service}
                                            onChange={(e) => {
                                                setBannerType(e.target.checked ? 'product' : null)
                                            }}
                                        />
                                        <span className="label-text pl-2">Product</span>

                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <input
                                            required

                                            type="radio"
                                            name="is_service"
                                            className="radio checked:bg-brandPrimary"
                                            // defaultChecked={is_service}
                                            onChange={(e) => {
                                                setBannerType(e.target.checked ? 'service' : null)
                                            }}
                                        />
                                        <span className="label-text pl-2">Service</span>

                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* <div>
                            <InputWithFullBoarder
                                label={'Banner Link'}
                                placeholder={'Enter banner link'}
                                className={'!bg-[#EDEDED] !py-4 !px-[24px]'}
                            />
                        </div> */}

                        <CustomButton
                            disabled={fileLoading || isLoading || (bannerType === 'product' && selectedProduct === null)}
                            type='submit'
                            isLoading={fileLoading || isLoading}
                            buttonText={'Proceed'}
                            className={'!text-[15px] font-light w-full mt-3 rounded-full mt-[25px] !bg-brandPrimary  !py-[15px]'}
                        />

                    </div>
                </form>

                <BannerProducts
                    shopId={shopId}
                    selectProduct={setSelectedProduct}
                />



            </ModalManagement >
        </>
    )
}

export default UploadBanner