import React, { useState } from 'react'
import ProductImage from '../../../../assets/images/productImg.png'
import { star } from '../../../../assets/icons'

const ProductCard = ({ product, setProductId, onSelect }) => {
    return (
        <>
            <div className="rounded-lg overflow-hidden cursor-pointer" onClick={() => {
                if (onSelect) {
                    onSelect(product?.id)
                } else {
                    setProductId(product?.id)
                    document.getElementById('product_details').showModal()
                }
            }
            }>
                <img className="w-full h-[150px] rounded-lg object-cover mb-1" src={product?.image?.original} alt="Product Image" />
                <div className="">
                    <div className="flex justify-between items-center">
                        <p className="font-normal text-[10px] text-[#696969] mb-1 capitalize">{
                            product?.categories?.map(
                                (element, index) => (
                                    <span key={index}>
                                        {element?.name}
                                        {index !== product?.categories.length - 1 && ', '}
                                    </span>))}</p>
                        <div className="flex items-center">
                            <img src={star} alt='icon' />
                            <span className="text-[#696969] text-[10px] ps-1">{product?.rating ?? 0}</span>
                        </div>
                    </div>
                    <p className="font-semibold text-[12px] mb-1">{product?.name}</p>
                    <p className="font-semibold text-right">{`N${product?.sale_price ?? product?.price}`}</p>
                </div>
            </div>
        </>
    )
}

export default ProductCard