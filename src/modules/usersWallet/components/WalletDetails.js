import React from 'react'
import ModalManagement from '../../../generalComponents/ModalManagement'
import { close, walletbg } from '../../../assets/icons'
import TransactionsTable from '../../wallet/component/Transactions'

const CustomerDetails = () => {


    return (
        <>
            <ModalManagement
                id={"customer_details"}
                hideCancel={true}
            >
                <div className='flex items-center justify-between mb-6'>
                    <p className='text-[18px] font-medium '>Customer Wallet</p>
                    <div onClick={() => document.getElementById('customer_details').close()} role='button'>
                        <img src={close} alt='close-icon' className='h-[23px] w-[23px]' />
                    </div>

                </div>
                <div className="w-full h-[230px] mb-1 rounded-[10px] flex items-center justify-center text-center" style={{
                    backgroundImage: `linear-gradient(180deg, rgba(255, 241, 18, 0.83) 0%, #FFF112 100%), url(${walletbg})`,
                    backgroundPosition: 'top,center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: ', cover'
                }}>
                    <div>
                        <p className="text-[20px] font-normal -mb-6">Wallet Balance</p>
                        <h3 className='text-[89.564px] font-semibold mb-0' >N10,400</h3>
                        <p className="text-[13.93px] font-normal mb-0 -mt-5">Last Updated: Today 12:12pm</p>
                    </div>
                </div>


                <TransactionsTable />

            </ModalManagement>



        </>
    )
}

export default CustomerDetails