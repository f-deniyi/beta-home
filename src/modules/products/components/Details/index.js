import React from 'react'
import ModalManagement from '../../../../generalComponents/ModalManagement'
import { close, locationIcon, star } from '../../../../assets/icons'


const ProductDetails = () => {
    return (
        <ModalManagement
            id={"product_details"}
            hideCancel={true}
        >
            <div className='flex items-center justify-between mb-6'>
                <p className='text-[18px] font-medium '>Product </p>
                <div onClick={() => document.getElementById('product_details').close()} role='button'>
                    <img src={close} alt='close-icon' className='h-[23px] w-[23px]' />
                </div>
            </div>
            <div>
                <div>
                    <div className="flex items-center">
                        <p className="font-normal text-[10px] text-[#696969] mb-1">Furniture</p>
                        <div className="flex items-center">
                            <img src={star} alt='icon' />
                            <span className="text-[#696969] text-[10px] ps-1">4.5</span>
                        </div>
                    </div>
                    <p className="font-semibold text-[12px] mb-1">Single sitter chair</p>
                    <div className="flex items-center mb-2">
                        <img src={locationIcon} className="object-cover  p-[0.7px] rounded-full mr-1" />
                        <p className="text-[15.735px] text-[#696969] font-normal mr-2">Silverline Estate Lekki Lagos</p>
                    </div>
                </div>
            </div>

        </ModalManagement>

    )
}

export default ProductDetails