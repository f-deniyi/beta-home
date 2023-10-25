import React, { useEffect, useState } from 'react'
import provider from '../../../assets/images/provider.png'
import { menu } from '../../../assets/icons'
import PaginationRounded from '../../../generalComponents/Pagination'
import moment from 'moment'
import { formatStatus } from '../../../utils/fomat_status'
import OrderDetails from './OrderDetails'



const ServicesTable = ({ requests, pagination, selectedOrder }) => {

    const [orderId, setOrderId] = useState(null)


    return (
        <>

            <div className="overflow-x-auto">
                <table className="min-w-full  rounded-lg overflow-hidden border-separate border-spacing-y-3">
                    <tbody>
                        {
                            requests?.filter(request => selectedOrder === 'All' || request.status === selectedOrder.toLowerCase())?.map((request, index) =>
                                <tr
                                    className="bg-[#FAFAFA]  rounded-lg p-5 relative mb-2 "
                                    key={index}
                                >
                                    <td className="p-2 w-[400px] ">
                                        <div className="flex items-center">
                                            <img
                                                className="w-[80px] h-[80px] rounded-lg mr-[10px]"
                                                src={
                                                    request?.customer?.profile_picture !== '' ?
                                                        request?.customer?.profile_picture : `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png`
                                                }
                                                alt="Item Image"
                                            />
                                            <div>
                                                <p className="text-[15px] font-medium">{request?.customer?.fullname}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-2 w-[300px] text-[14px] font-normal">
                                        {
                                            request?.category?.name
                                        }

                                    </td>
                                    <td className="p-2 w-[300px] text-[14px] font-normal">{moment(request?.createdAt).format('MMM Do YYYY')}</td>
                                    <td className="p-2 w-[150px] text-[14px] font-normal">{`N${request?.amount ?? '0.00'}`}</td>
                                    <td className="p-2 w-[150px] text-[14px] font-normal">
                                        <div className="flex items-center justify-center w-full h-full capitalize">
                                            <p
                                                style={{
                                                    background: formatStatus(request?.status)?.toLowerCase()
                                                }}
                                                className={`px-2 py-1 rounded-full text-center text-white text-[10px] font-medium`}>
                                                {request?.status}
                                            </p>
                                        </div>
                                    </td>
                                    <td className=" p-2 w-[150px] relative text-[14px] font-normal text-center">
                                        <div>
                                            <details className="dropdown flex items-center justify-center w-full h-full bg-white">
                                                <summary className="m-1 btn !bg-[#FAFAFA] border-none m-0">
                                                    <img src={menu} alt="icon" />
                                                </summary>
                                                <ul className="px-1 py-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 left">
                                                    <li
                                                        onClick={() => {
                                                            setOrderId(request?.id)
                                                            document.getElementById('order-details').showModal()
                                                        }}
                                                    ><a>View Details</a></li>
                                                    <li><a>Report Dispute</a></li>
                                                </ul>
                                            </details>
                                            {/* <button className="">
                                            <img src={menu} alt="icon" />
                                        </button> */}
                                        </div>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
                <div className='mb-4 mt-3 flex items-center justify-center'>
                    <PaginationRounded count={pagination?.pageTotal} />
                </div>
            </div>

            <OrderDetails
                orderId={orderId}
                setOrderId={setOrderId}
            />
        </>

    )
}

export default ServicesTable