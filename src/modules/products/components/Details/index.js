import React from 'react'
import ModalManagement from '../../../../generalComponents/ModalManagement'
import { close, locationIcon, star, edit, deleteIcon } from '../../../../assets/icons'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'
import product from '../../../../assets/images/product_details.png'
import DeleteProduct from '../DeleteProduct';

const customIndicator = (onClickHandler, isSelected, index, label) => {
    const indicatorStyle = {
        width: '7px',
        height: '7px',
        borderRadius: '50%',
        display: 'inline-block',
        margin: '0 5px',
        cursor: 'pointer',
        background: isSelected ? '#fff122' : '#fff', // Change colors as needed
    };

    return (
        <span
            key={index}
            style={indicatorStyle}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            role="button"
            tabIndex={0}
            aria-label={`${label} ${index + 1}`}
        />
    );
};


const ProductDetails = () => {
    return (
        <>
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
                <div className=''>
                    <Carousel
                        showArrows={false}
                        showStatus={false}
                        showThumbs={false}
                        renderIndicator={customIndicator}
                    >
                        <div>
                            <img src={product} alt='img' className='object-cover rounded-lg h-[263px]' />
                        </div>
                        <div>
                            <img src={product} alt='img' className='object-cover rounded-lg h-[263px]' />
                        </div>
                        <div>
                            <img src={product} alt='img' className='object-cover rounded-lg h-[263px]' />
                        </div>
                    </Carousel>
                    <div className='mt-[21px] mb-[17px] flex items-center justify-between'>
                        <div>
                            <div className="flex items-center mb-[9px]">
                                <p className="font-normal text-[10px] text-[#696969] mb-0 mr-3">Furniture</p>
                                <div className="flex items-center">
                                    <img src={star} alt='icon' />
                                    <span className="text-[#696969] text-[10px] ps-1">4.5</span>
                                </div>
                            </div>
                            <p className="font-semibold text-[12px] mb-[9px]">Single sitter chair</p>
                            <div className="flex items-center mb-2 mb-[9px]">
                                <img src={locationIcon} className="object-cover  w-[9px] h-[10.74px] p-[0.7px] rounded-full mr-1" />
                                <p className="text-[11px] text-[#696969] font-normal mr-2">Silverline Estate Lekki Lagos</p>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div className='cursor-pointer flex items-center justify-center bg-brandPrimary border-2 border-black h-[60px] w-[60px] rounded-full'>
                                <img src={edit} alt='icon' />
                            </div>
                            <div className='cursor-pointer'
                                onClick={() => {
                                    document.getElementById('product_details').close()
                                    document.getElementById('delete_product').showModal()

                                }}
                            >
                                <img src={deleteIcon} alt='icon' />
                            </div>

                        </div>

                    </div>
                    <div className='mb-3 '>
                        <div className="flex w-full">
                            <div className="grid mr-3">
                                <p className='text-[#696969] text-[15px] font-normal mb-[10px]'>Colour</p>
                                <div className='flex gap-1'>
                                    <div className='h-[36px] rounded-full w-[36px]  bg-[#FF0000]' />
                                    <div className='h-[36px] rounded-full w-[36px]  bg-[#04A701]' />
                                    <div className='h-[36px] rounded-full w-[36px]  bg-[#00A3FF]' />
                                    <div className='h-[36px] rounded-full w-[36px]  bg-[#9747FF]' />
                                </div>
                            </div>
                            <div className="divider divider-horizontal w-[0.3px] bg-[#A5A5A5]" />
                            <div className="grid  flex-grow text-center">
                                <p className='mb-0 text-[#696969] text-[15px] font-normal'>Size</p>
                                <h3 className='text-[18px] font-medium '>34cm</h3>
                            </div>
                            <div className="divider divider-horizontal w-[0.3px] bg-[#A5A5A5]" />
                            <div className="grid  flex-grow text-center">
                                <p className='mb-0 text-[#696969] text-[15px] font-normal'>Weight</p>
                                <h3 className='text-[18px] font-medium '>13kg</h3>
                            </div>

                        </div>
                    </div>
                    <h3 className='text-[#696969] text-[30px] font-semibold mb-4'>
                        N56,000
                    </h3>
                    <div className=''>
                        <div className='flex items-center gap-3 mb-2'>
                            <p className='text-[15px] font-medium '>Description</p>
                            <div className='flex-grow w-full'>
                                <div className="flex items-center w-full">
                                    <div className="h-0.5 bg-brandPrimary w-full"></div>
                                    <div className="h-2 w-2 bg-brandPrimary rounded-full"></div>
                                </div>
                            </div>
                        </div>
                        <p className='text-[12px] font-light '>Lorem ipsum dolor sit amet consectetur. Consequat elit mauris pretium fermentum sed ac dui. Facilisis facilisis nibh turpis libero volutpat maecenas egestas augue bibendum. Ut ac aenean leo tellus ut quis. Posuere magna nunc vitae tempor lorem nisi ultricies. </p>
                    </div>

                </div>

            </ModalManagement>
            <DeleteProduct />
        </>


    )
}

export default ProductDetails