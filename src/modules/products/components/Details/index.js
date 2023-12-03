import React from 'react'
import ModalManagement from '../../../../generalComponents/ModalManagement'
import { close, locationIcon, star, edit, deleteIcon } from '../../../../assets/icons'
import { Carousel } from 'react-responsive-carousel'
import product from '../../../../assets/images/product_details.png'
import DeleteProduct from '../DeleteProduct';
import useGetSingleProductQuery from '../../controllers/get_single_product';
import { useLocation } from 'react-router-dom'

const customIndicator = (onClickHandler, isSelected, index, label) => {


    const indicatorStyle = {
        width: '7px',
        height: '7px',
        borderRadius: '50%',
        display: 'inline-block',
        margin: '0 5px',
        cursor: 'pointer',
        background: isSelected ? '#fff122' : '#fff',
        border: !isSelected ? 'solid 1px rgba(0,0,0,0.4)' : "" // Change colors as needed
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


const ProductDetails = ({ productId, setProductId }) => {
    let location = useLocation();
    const isAdmin = location.pathname.includes("/admin");

    const { product } = useGetSingleProductQuery({
        productId,
        enabled: Boolean(productId)
    })


    return (
        <>
            <ModalManagement
                id={"product_details"}
                hideCancel={true}
            >
                <div className='flex items-center justify-between mb-6'>
                    <p className='text-[18px] font-medium '>Product </p>
                    <div onClick={() => {
                        document.getElementById('product_details').close()
                        setProductId(null)
                    }} role='button'>
                        <img src={close} alt='close-icon' className='h-[23px] w-[23px]' />
                    </div>
                </div>
                <div className=''>
                    <Carousel
                        infiniteLoop={true}
                        autoPlay
                        showArrows={false}
                        showStatus={false}
                        showThumbs={false}
                        renderIndicator={customIndicator}
                    >
                        {
                            product?.gallery?.map(el =>
                                <div>
                                    <img src={el?.original} alt='img' className='object-cover rounded-lg h-[263px]' />
                                </div>
                            )
                        }
                    </Carousel>
                    <div className='mt-[21px] mb-[17px] flex items-center justify-between'>
                        <div>
                            <div className="flex items-center mb-[9px]">
                                <p className="font-normal text-[10px] text-[#696969] mb-0 mr-3 capitalize">
                                    {product?.tags?.map(
                                        (element, index) => (
                                            <span key={index}>
                                                {element}
                                                {index !== product?.tags.length - 1 && ', '}
                                            </span>))}
                                </p>
                                <div className="flex items-center">
                                    <img src={star} alt='icon' />
                                    <span className="text-[#696969] text-[10px] ps-1">{product?.rating?.value ?? 0}</span>
                                </div>
                            </div>
                            <p className="font-semibold text-[12px] mb-[9px]">{product?.name}</p>
                            {/* <div className="flex items-center mb-2 mb-[9px]">
                                <img src={locationIcon} className="object-cover  w-[9px] h-[10.74px] p-[0.7px] rounded-full mr-1" />
                                <p className="text-[11px] text-[#696969] font-normal mr-2">Silverline Estate Lekki Lagos</p>
                            </div> */}
                        </div>
                        {
                            !isAdmin && <div className='flex gap-2'>
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
                        }


                    </div>
                    <div className='mb-3 '>

                        <div className="flex w-full">
                            {product?.attributes?.map((attribute, index) => (
                                <React.Fragment key={index}>
                                    <div className="flex flex-col mr-3 flex-grow">
                                        <p className={`text-[#696969] text-[15px] font-normal mb-[10px] capitalize ${attribute?.name !== 'colour' ? 'text-center' : ""}`} >{attribute?.name}</p>
                                        {
                                            /color|colour/i.test(attribute?.name) ? (
                                                <div className='flex gap-1'>
                                                    {attribute?.values?.map((el, subIndex) => (
                                                        <div className='h-[36px] rounded-full w-[36px] bg-[#FF0000]' style={{ background: el?.value }} key={subIndex} />
                                                    ))}
                                                </div>
                                            ) : (
                                                <div className='flex flex-wrap'>
                                                    {attribute?.values?.map((el, subIndex) => (
                                                        <>
                                                            <h3 className='text-[18px] font-medium text-center' key={subIndex}>{el.value}</h3>
                                                            <>
                                                                {
                                                                    subIndex !== attribute?.values.length - 1 && <span className='px-1'>,</span>

                                                                }
                                                            </>

                                                        </>

                                                    ))}
                                                </div>
                                            )
                                        }
                                    </div>
                                    {index !== product?.attributes.length - 1 &&
                                        <div className="divider divider-horizontal w-[0.3px] bg-[#A5A5A5]" />
                                    }
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                    <h3 className='text-[#696969] text-[30px] font-semibold mb-4'>
                        {
                            `N${product?.sale_price ?? product?.price}`
                        }
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
                        <p className='text-[12px] font-light '>
                            {
                                `${product?.description}`
                            }
                        </p>
                    </div>

                </div>

            </ModalManagement>
            <DeleteProduct productId={productId} />
        </>


    )
}

export default ProductDetails