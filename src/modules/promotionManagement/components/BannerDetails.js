import React, { useEffect, useState } from 'react'
import ModalManagement from '../../../generalComponents/ModalManagement'
import { close, user, productCategory, brand } from '../../../assets/icons'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import CustomButton from '../../../generalComponents/Button'
import useGetBannerDetails from '../controller/get_banner_details'
import Loader from '../../../generalComponents/Loader'
import { is } from 'date-fns/locale'
import EditBanner from './EditBanner'
import { set } from 'date-fns'
import { DeletePromotionManager } from '../controller/delete_banner'

const BannerDetails = ({ type, bannerId }) => {
    const { banner: bannerDetails, isLoading, isFetching, isRefetching } = useGetBannerDetails({
        enabled: Boolean(bannerId),
        bannerId
    })

    // //console.log(bannerDetails, isLoading, isFetching, isRefetching)
    const [banner, setBannerDetails] = useState(null)
    const { deletePromotionController, isLoading: deleting, isSuccess: bannerDeleted } = DeletePromotionManager({ bannerId })

    useEffect(() => {
        if (bannerDeleted) {
            document.getElementById('banner_details').close()
        }
    }, [bannerDeleted])

    return (

        <>
            <ModalManagement
                id={"banner_details"}
                hideCancel={true}
            >
                {
                    isLoading || isFetching || isRefetching ?
                        <Loader /> :
                        <>
                            <div className='flex items-center justify-between mb-6'>
                                <p className='text-[18px] font-medium '>Banner</p>
                                <div onClick={() => document.getElementById('banner_details').close()} role='button'>
                                    <img src={close} alt='close-icon' className='h-[23px] w-[23px]' />
                                </div>

                            </div>
                            <div
                                className='cursor-pointer h-[170px] flex items-center rounded-lg  pl-4 pr-0 '
                                onClick={() => document.getElementById('banner_details').showModal()}
                                style={{
                                    // background: `url(${bannerBg}),url(${banner}), #fff122`,
                                    background: `url(${bannerDetails?.banner_picture?.original})`,
                                    // backgroundPosition: ' right, right bottom,center',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover'

                                }}
                            >

                                <div>
                                    {/* <p className='text-[20px] font-light'>{!bannerDetails?.is_service ? 'Get this @' : 'Hire a professional'}</p> */}
                                    {/* <p className='text-[20px] font-semibold'>{bannerDetails?.title}</p> */}
                                    {/* <button className='bg-black rounded-full text-[12px] text-white  font-medium px-5 py-2 mt-2'>{type % 2 === 0 ? 'Buy Now' : 'Contact Now'}</button> */}
                                </div>
                            </div>
                            <div className=' mt-[30px]'>
                                <div className='flex items-center justify-between mb-4'>
                                    <p className='text-[12px] font-medium text-[#8E8E8E]'>Title</p>
                                    <h3 className='text-[#212121] font-semibold text-[15px]'>{bannerDetails?.title}</h3>
                                </div>
                                <div className='flex items-center justify-between mb-4'>
                                    <p className='text-[12px] font-medium text-[#8E8E8E]'>Type</p>
                                    <h3 className='text-[#212121] font-semibold text-[15px]'>{bannerDetails?.is_service ? 'Service' : 'Product'}</h3>
                                </div>

                            </div>
                            {
                                !bannerDetails?.is_service &&
                                <>
                                    <div className='flex  justify-between mb-4 gap-5'>
                                        <p className='text-[12px] font-medium text-[#8E8E8E]'>Product</p>
                                        <div className='w-full'>
                                            <h3 className='text-[#212121] font-semibold text-[15px]'>{bannerDetails?.product?.name}</h3>

                                            <div
                                                className='cursor-pointer h-[180px] w-full flex items-center rounded-lg  pl-4 pr-0 '
                                                style={{
                                                    // background: `url(${bannerBg}),url(${banner}), #fff122`,
                                                    background: `url(${bannerDetails?.product?.image?.original})`,
                                                    // backgroundPosition: ' right, right bottom,center',
                                                    backgroundPosition: 'center',
                                                    backgroundRepeat: 'no-repeat',
                                                    backgroundSize: 'cover'

                                                }}
                                            >

                                            </div>
                                        </div>
                                    </div>

                                </>

                            }
                            <div className='flex gap-x-2 mb-4'>
                                <CustomButton
                                    onClick={() => {
                                        setBannerDetails(bannerDetails)
                                        document.getElementById('edit_banner').showModal()
                                    }}
                                    buttonText={'Edit'}
                                    className={'!text-[15px] font-light w-full mt-3 rounded-full mt-[25px] !bg-brandprimary !py-[15px]'}
                                />
                                <CustomButton
                                    buttonText={'Delete'}
                                    isLoading={deleting}
                                    className={'!text-[15px] font-light w-full mt-3 rounded-full mt-[25px] !bg-brandRed text-white !py-[15px]'}
                                    onClick={() => {
                                        deletePromotionController()
                                    }}
                                />
                            </div>
                        </>


                }

                <EditBanner
                    banner={banner}
                />


            </ModalManagement>
        </>
    )
}

export default BannerDetails