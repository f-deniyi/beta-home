import React, { useEffect, useState } from 'react'
import ModalManagement from '../../../../generalComponents/ModalManagement'
import { close } from '../../../../assets/icons'
import useGetOrderDetails from '../../controllers/get_order_details'
import { formatAddress } from '../../../../utils/format_address'
import moment from 'moment'
import { Carousel } from 'react-responsive-carousel'
import { useLocation } from "react-router-dom";
import StatusHistory from '../../../../generalComponents/StatusHistory'
import SelectInput from '../../../../generalComponents/SelectInput'
import { UpdateOrderStatusManager } from '../../controllers/update_order_status'
import CustomButton from '../../../../generalComponents/Button'

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



const OrderDetails = ({ orderId, setOrderId, statuses }) => {
    const location = useLocation()
    const isAdmin = location.pathname.includes("/admin");
    const [selectedStatus, setSelectedStatus] = useState(null)


    const { orderDetails } = useGetOrderDetails({
        enabled: Boolean(orderId),
        orderId: orderId
    })

    const { editOrderStatusController, isLoading, isSuccess } = UpdateOrderStatusManager();

    const handleStatusUpdate = () => {
        const data = {
            orderId,
            statusId: selectedStatus
        }
        editOrderStatusController(data)
    }

    useEffect(() => {
        if (isSuccess) {
            setSelectedStatus(null)
        }
    }, [isSuccess])

    return (
        <ModalManagement
            id='product_order-details'
        >
            <div style={{
                width: '100%'
            }}>
                <div className='flex items-center flex-wrap justify-between mb-6'>
                    <div>
                        <p className='text-[18px] font-medium '>Order Details</p>

                    </div>
                    <div onClick={() => {
                        document.getElementById('product_order-details').close()
                        setOrderId(null)
                    }
                    } role='button'>
                        <img src={close} alt='close-icon' className='h-[23px] w-[23px]' />
                    </div>

                </div>

                <div className='flex items-center flex-wrap justify-center mb-4'>
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
                                orderDetails?.item?.product?.gallery?.map(el =>
                                    <div >
                                        <img src={el?.original} alt='img' className='object-cover rounded-lg h-[150px] w-[120px] rounded-md' />
                                    </div>
                                )
                            }
                        </Carousel>
                    </div>

                </div>

                <div className='flex items-center flex-wrap justify-between mb-4'>
                    <p className='text-[#8E8E8E] text-[12px] font-medium'>Name</p>
                    <h3 className='text-[#212121] text-[15px] font-semibold'>{orderDetails?.item?.product?.name}</h3>
                </div>

                <div className='flex items-center flex-wrap justify-between mb-4'>
                    <p className='text-[#8E8E8E] text-[12px] font-medium'>Price</p>
                    <h3 className='text-[#212121] text-[15px] font-semibold'>{orderDetails?.isPaid ? orderDetails?.item?.total_price : 'Unpaid'}</h3>
                </div>

                <div className='flex items-center flex-wrap justify-between mb-4'>
                    <p className='text-[#8E8E8E] text-[12px] font-medium'>Customer</p>
                    <h3 className='text-[#212121] text-[15px] font-semibold'>{orderDetails?.customer?.fullname}</h3>
                </div>

                <div className='flex items-center flex-wrap justify-between mb-4'>
                    <p className='text-[#8E8E8E] text-[12px] font-medium'>Date</p>
                    <h3 className='text-[#212121] text-[15px] font-semibold'>{moment(orderDetails?.createdAt).format('ll')}</h3>
                </div>

                <div className='flex items-center flex-wrap justify-between mb-4'>
                    <p className='text-[#8E8E8E] text-[12px] font-medium'>Status</p>
                    <h3 className='text-[#212121] text-[15px] font-semibold'>{orderDetails?.status?.name}</h3>
                </div>

                {/* <div className='flex items-center flex-col flex-wrap justify-between mb-4'>
                    <p className='text-[#8E8E8E] text-[12px] font-medium'>Change Status</p>

                </div> */}
                <div className="mb-[17px]">
                    <SelectInput
                        // isMulti={true}
                        label={'Change Order status'}
                        options={statuses?.data}
                        backgroundColor={'#fdfdfd'}
                        // de
                        onChange={(e, opt) => {
                            //console.log(e?.id)
                            // const categoryIds = e.map(el => el?._id)
                            // //console.log('idss', categoryIds)
                            // setCategoryIds(categoryIds)
                            setSelectedStatus(e.id)

                        }}
                        defaultValue={statuses?.data?.filter(el => el.name === orderDetails?.status?.name)}
                    />
                </div>

                {/* <div>
                    <p className='text-[#8E8E8E] text-[12px] font-medium'>Status</p>
                    <StatusHistory history={statuses?.data}/>
                </div> */}
                {
                    selectedStatus !== null && <div className=" mb-4">
                        <CustomButton
                            buttonText={"Save"}
                            isLoading={isLoading}
                            className={
                                "!text-[15px] font-light w-full mt-3 rounded-full mt-[25px] !bg-brandprimary !py-[15px]"

                            }
                            onClick={(e) => {
                                e.preventDefault()
                                handleStatusUpdate()
                            }}
                        />
                    </div>
                }





            </div>

        </ModalManagement>
    )
}

export default OrderDetails;