import React, { useState } from 'react'
import ModalManagement from '../../../generalComponents/ModalManagement'
import { close } from '../../../assets/icons'
import ServicesTable from './table'

const ServicesOrder = ({ requests, pagination }) => {
    const [selectedOrder, setSelectedOrder] = useState('All')
    const orderStatus = [
        'All',
        'Requested',
        'Accepted',
        'On-going',
        'Declined',
        'Cancelled',
        'Confirmed'
    ]


    return (
        <ModalManagement
            id='services_request'
            type='large'
        >
            <div style={{
                width: '100%'
            }}>
                <div className='flex items-center justify-between mb-6'>
                    <div>
                        <p className='text-[18px] font-medium '>Service Order</p>
                        <p className='text-[12px] font-normal '>List of service orders this customer have.</p>

                    </div>
                    <div onClick={() => document.getElementById('services_request').close()} role='button'>
                        <img src={close} alt='close-icon' className='h-[23px] w-[23px]' />
                    </div>

                </div>
            </div>
            <div className='flex gap-2 mb-1'>
                {
                    orderStatus.map(el => <p
                        onClick={() => {
                            setSelectedOrder(el)
                        }}
                        className={`py-[10px] px-[20px] text-[#696969] font-medium text-[12px] cursor-pointer ${selectedOrder !== el ? 'bg-[#F2F2F2]' : 'bg-brandPrimary text-black'} rounded-[20px] `}>{el}</p>)
                }
            </div>

            <ServicesTable requests={requests} pagination={pagination} selectedOrder={selectedOrder} />
        </ModalManagement>
    )
}

export default ServicesOrder