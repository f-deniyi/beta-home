import React, { useEffect, useState } from 'react'
import banner from '../../../assets/icons/banner_1.svg'
import banner2 from '../../../assets/icons/banner_2.svg'
import bannerBg from '../../../assets/icons/banner_bg.svg'

import BannerDetails from './BannerDetails'

const BannerCard = ({ banner, setBannerId }) => {

    return (
        <>

            <div
                className='cursor-pointer h-[170px] flex items-center rounded-lg  pl-4 pr-0 '
                onClick={() => {
                    setBannerId(banner?._id)
                    document.getElementById('banner_details').showModal()
                }
                }
                style={{
                    background: `url(${banner?.banner_picture?.original})`,
                    backgroundPosition: 'right, right bottom,center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}
            >

                <div>
                    {/* <p className='text-[20px] font-light'>{!banner?.is_service ? 'Get this @' : 'Hire a professional'}</p> */}
                    {/* <p className='text-[20px] font-semibold'>{banner?.title}</p> */}
                    {/* <button className='bg-black rounded-full text-[12px] text-white  font-medium px-5 py-2 mt-2'>{type % 2 === 0 ? 'Buy Now' : 'Contact Now'}</button> */}
                </div>
                {/* <div>
                    <img src={type % 2 === 0 ? banner : banner2} alt='icon' />
                </div> */}
            </div >


        </>

    )
}

export default BannerCard