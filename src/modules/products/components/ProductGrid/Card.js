import React from 'react'
import ProductImage from '../../../../assets/images/productImg.png'
import { star } from '../../../../assets/icons'
import ProductDetails from '../Details'

const ProductCard = () => {
    return (
        <>
            <div className="rounded-lg overflow-hidden cursor-pointer" onClick={() => document.getElementById('product_details').showModal()}>
                <img className="w-full h-[150px] rounded-lg object-cover mb-1" src={ProductImage} alt="Product Image" />
                <div className="">
                    <div className="flex justify-between items-center">
                        <p className="font-normal text-[10px] text-[#696969] mb-1">Furniture</p>
                        <div className="flex items-center">
                            <img src={star} alt='icon' />
                            <span className="text-[#696969] text-[10px] ps-1">4.5</span>
                        </div>
                    </div>
                    <p className="font-semibold text-[12px] mb-1">Single sitter chair</p>
                    <p className="font-semibold text-right">N56,000</p>
                </div>
            </div>
            <ProductDetails />
        </>

    )
}

export default ProductCard