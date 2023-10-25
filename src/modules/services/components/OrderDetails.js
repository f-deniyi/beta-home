import React, { useState } from 'react'
import ModalManagement from '../../../generalComponents/ModalManagement'
import { close } from '../../../assets/icons'
import useGetOrderDetails from '../controller.js/get_order_details'
import { formatAddress } from '../../../utils/format_address'
import moment from 'moment'
import { Carousel } from 'react-responsive-carousel'
import CustomButton from '../../../generalComponents/Button'
import GenerateInvoice from './GenerateInvoice'
import { RejectRequestMutation } from '../controller.js/service_request'


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



const OrderDetails = ({ orderId, setOrderId }) => {

    const { isLoading: rejecting, rejectRequestCaller } = RejectRequestMutation(orderId)


    const { orderDetails } = useGetOrderDetails({
        enabled: Boolean(orderId),
        requestId: orderId
    })

    const rejectRequest = (e) => {
        e.preventDefault()
        rejectRequestCaller()
    }


    return (
        <ModalManagement
            id='order-details'
        >
            <div style={{
                width: '100%'
            }}>
                <div className='flex items-center flex-wrap justify-between mb-6'>
                    <div>
                        <p className='text-[18px] font-medium '>Service Order Details</p>

                    </div>
                    <div onClick={() => {
                        document.getElementById('order-details').close()
                        setOrderId(null)
                    }
                    } role='button'>
                        <img src={close} alt='close-icon' className='h-[23px] w-[23px]' />
                    </div>

                </div>

                <div className='flex items-center flex-wrap justify-between mb-4'>
                    <p className='text-[#8E8E8E] text-[12px] font-medium'>Category</p>
                    <h3 className='text-[#212121] text-[15px] font-semibold'>{orderDetails?.category?.name}</h3>
                </div>

                <div className='flex items-center flex-wrap justify-between mb-4'>
                    <p className='text-[#8E8E8E] text-[12px] font-medium'>Title</p>
                    <h3 className='text-[#212121] text-[15px] font-semibold'>{orderDetails?.title}</h3>
                </div>

                <div className='flex items-center flex-wrap justify-between mb-4'>
                    <p className='text-[#8E8E8E] text-[12px] font-medium'>Requested Date</p>
                    <h3 className='text-[#212121] text-[15px] font-semibold'>{moment(orderDetails?.delivery_date).format('ll')}</h3>
                </div>

                <div className='flex items-center flex-wrap justify-between mb-4'>
                    <p className='text-[#8E8E8E] text-[12px] font-medium'>Requested Time</p>
                    <h3 className='text-[#212121] text-[15px] font-semibold'>{orderDetails?.delivery_time}</h3>
                </div>

                <div className='flex items-center flex-wrap justify-between mb-4'>
                    <p className='text-[#8E8E8E] text-[12px] font-medium'>Location</p>
                    <h3 className='text-[#212121] text-[15px] font-semibold'>{formatAddress(orderDetails?.contact_address)}</h3>
                </div>

                <div className='flex items-center flex-wrap justify-between mb-4'>
                    <p className='text-[#8E8E8E] text-[12px] font-medium'>Price</p>
                    <h3 className='text-[#212121] text-[15px] font-semibold'>{orderDetails?.isPaid ? orderDetails?.price : 'Unpaid'}</h3>
                </div>

                <div className='flex items-center flex-wrap justify-between mb-4'>
                    <p className='text-[#8E8E8E] text-[12px] font-medium'>Description</p>
                    <p className='text-[#212121] text-[12px] font-light'>{orderDetails?.description}</p>
                </div>

                <div className='flex flex-wrap justify-between mb-4'>
                    <p className='text-[#8E8E8E] text-[12px] font-medium'>Attachment</p>
                    <div>
                        <Carousel
                            infiniteLoop={true}
                            autoPlay
                            showArrows={false}
                            showStatus={false}
                            showThumbs={false}
                            renderIndicator={customIndicator}
                        >
                            {
                                orderDetails?.attachments?.map(el =>
                                    <div>
                                        <img src={el} alt='img' className='object-cover rounded-lg h-[120px]' />
                                    </div>
                                )
                            }
                        </Carousel>
                    </div>

                </div>
                {
                   <div className='flex gap-x-2'>
                        <CustomButton
                            buttonText={'Accept'}
                            className={'!text-[15px] font-light w-full mt-3 rounded-full mt-[25px] !bg-brandPrimary !py-[15px]'}
                            onClick={() => {
                                document.getElementById('generate_invoice').showModal()
                            }}
                        />
                        <CustomButton
                            isLoading={rejecting}
                            buttonText={'Reject'}
                            onClick={() => {
                                rejectRequest()
                            }}
                            className={'!text-[15px] font-light w-full mt-3 rounded-full mt-[25px] !bg-brandGrey  !py-[15px]'}
                        />
                    </div>
                }

            </div>
            <GenerateInvoice requestId={orderId} />

        </ModalManagement>
    )
}

export default OrderDetails;