import React from 'react'
import { productCategory, brand } from '../../../assets/icons'

const ServiceCard = ({ category, icon = productCategory, name = 'Home Decor', count = '1500', type }) => {
    return (
        <>
            <div className=''>
                <div className={`${type !== 'brand' ? 'bg-brandPrimary ' : "bg-white border border-1 border-[#828282] border-solid "} h-[124px] w-[124px] flex justify-center items-center mb-[15px] rounded-lg`}>
                    <img src={category?.image?.original} alt={name} className='object-cover h-[124px] w-[124px] rounded-lg' />
                </div>
                <p className='text-[15px] font-normal mb-2 text-center'>{category?.name}</p>
            </div >
        </>

    )
}

export default ServiceCard