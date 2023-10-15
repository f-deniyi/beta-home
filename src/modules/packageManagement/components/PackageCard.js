import React from 'react'
import { productCategory, brand, beta } from '../../../assets/icons'
import PackageDetails from './PackageDetails'

const CategoryCard = ({}) => {
    return (
        <>

            <div className='cursor-pointer ' onClick={() => document.getElementById('package_details').showModal()}>
                <div className={` bg-white  h-[168.59px] w-[168.59px] flex justify-center items-center  rounded-lg`}>
                    <img src={beta} alt={'beta_package'} className='object-cover' />
                </div>

            </div >
            <PackageDetails type={''} />

        </>

    )
}

export default CategoryCard