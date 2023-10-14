import React from 'react'
import banner from '../../../assets/icons/banner_1.svg'
import banner2 from '../../../assets/icons/banner_2.svg'
import bannerBg from '../../../assets/icons/banner_bg.svg'

import BannerDetails from './BannerDetails'

const CategoryCard = ({ type }) => {
    return (
        <>

            <div
                className='cursor-pointer h-[170px] flex items-center rounded-lg  pl-4 pr-0 '
                onClick={() => document.getElementById('category_details').showModal()}
                style={{
                    background: `url(${bannerBg}),url(${type % 2 == 0 ? banner : banner2}), #fff122`,
                    backgroundPosition: ' right, right bottom,center',
                    backgroundRepeat: 'no-repeat'
                }}
            >

                <div>
                    <p className='text-[20px] font-light'>{type % 2 === 0 ? 'Get this @' : 'Hire a professional'}</p>
                    <p className='text-[20px] font-semibold'>{type % 2 === 0 ? '50% Discount' : '50% Discount'}</p>
                    <button className='bg-black rounded-full text-[12px] text-white  font-medium px-5 py-2 mt-2'>{type % 2 === 0 ? 'Buy Now' : 'Contact Now'}</button>
                </div>
                {/* <div>
                    <img src={type % 2 === 0 ? banner : banner2} alt='icon' />
                </div> */}
            </div >
            <BannerDetails type={type} />

        </>

    )
}

export default CategoryCard