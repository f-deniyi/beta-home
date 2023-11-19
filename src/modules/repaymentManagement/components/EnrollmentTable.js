import React, { useState } from 'react'
import RepaymentDetails from './RepaymentDetails'
import useGetAllEnrollments from "../controller/get_all_enrollments";
import PaginationRounded from '../../../generalComponents/Pagination';
import Loader from '../../../generalComponents/Loader';
import moment from 'moment';


const EnrollmentTable = ({ enrollments }) => {
    console.log('_-->>enrollment<<---', enrollments)
    const [activePage, setActivePage] = useState(1);
    // const [selectedEnrollment, setSelectedEnrollment] = useState(null)
    // const { enrollments, pagination, isLoading } = useGetAllEnrollments({ page: activePage })

    const handlePage = (page) => {
        setActivePage(page);
    };


    return (
        <>

            <div class="">
                <div class="">

                    <div class="flex flex-col">
                        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <table class="min-w-full lg:divide-gray-200 lg:divide-y table-auto w-full rounded border-separate border-spacing-y-4">
                                    <thead class="hidden lg:table-header-group">
                                        <tr>
                                            {/* <th class="py-3.5 px-4 text-left  font-medium text-black text-[12px] uppercase tracking-widest">#</th> */}
                                            <th class="py-3.5 px-4 text-left  uppercase tracking-widest font-medium text-black text-[12px]">Date</th>


                                            <th class="py-3.5 px-4 text-left  font-medium text-black text-[12px] uppercase tracking-widest">Amount</th>

                                            <th class="py-3.5 px-4 text-left  uppercase tracking-widest font-medium text-black text-[12px]">Status</th>
                                            {/* <th class="py-3.5 px-4 text-left  uppercase tracking-widest font-medium text-black text-[12px]">Package</th> */}





                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            enrollments?.map((item, index) =>
                                                <>
                                                    <tr class="bg-white">
                                                        <td class="bg-[#F2F2F2] mb-3 px-4 py-4 text-sm font-bold text-gray-900 align-top lg:align-middle whitespace-nowrap sm:block lg:hidden">
                                                            {/* <div class="flex items-center">
                                                                {index + 1}
                                                            </div> */}
                                                            <td class="bg-[#F2F2F2] mb-3 hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                                                <div class="flex items-center">
                                                                    {moment(item?.createdAt).format('ll')}
                                                                </div>
                                                            </td>
                                                            <div class="mt-1 space-y-2 font-medium pl-11 lg:hidden">
                                                                <div class="flex items-center">

                                                                    {item?.amount?.toLocaleString()}

                                                                </div>


                                                                {
                                                                    item?.paid ? <div class="flex items-center gap-x-2">
                                                                        <p className='h-[15px] w-[15px] bg-[#06E401] rounded-full' />
                                                                        <p className='text-[#828282] text-[10px] font-normal'>Paid</p>
                                                                    </div> :
                                                                        item?.overdue ? <div class="flex items-center gap-x-2">
                                                                            <p className='h-[15px] w-[15px] bg-[#f00] rounded-full' />
                                                                            <p className='text-[#828282] text-[10px] font-normal'>Overdue</p>
                                                                        </div> : <div class="flex items-center gap-x-2">
                                                                            <p className='h-[15px] w-[15px] bg-brandPrimary rounded-full' />
                                                                            <p className='text-[#828282] text-[10px] font-normal'>Upcoming</p>
                                                                        </div>
                                                                }

                                                                {/* <div class="flex items-center">

                                                                    {item?.package?.title}
                                                                </div> */}

                                                                {/* <div class="flex items-center">

                                                                    23 Apr 2023
                                                                </div> */}

                                                                {/* <div class="flex items-center pt-3 space-x-4">
                                                                    <button className='bg-black text-white rounded-full py-2 px-6 capitalize'>{item?.payment_mode}</button>

                                                                    <button
                                                                        type="button"
                                                                        onClick={() => {
                                                                            // setSelectedEnrollment(item?._id)
                                                                            document.getElementById('repayment_details').showModal()
                                                                        }}
                                                                        class="bg-brandPrimary inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200  shadow-sm focus:outline-none hover:text-black focus:ring-2 focus:ring-offset-2 focus:ring-[#fff122] px-[20px] py-[15px] rounded-full"
                                                                    >
                                                                        View Details
                                                                    </button>
                                                                </div> */}
                                                            </div>
                                                        </td>
                                                        <td class="bg-[#F2F2F2] mb-3 hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                                            <div class="flex items-center">
                                                                {moment(item?.createdAt).format('ll')}
                                                            </div>
                                                        </td>

                                                        <td class="bg-[#F2F2F2] mb-3 hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                                            <div class="flex items-center">
                                                                {item?.amount?.toLocaleString()}
                                                            </div>
                                                        </td>

                                                        <td class="bg-[#F2F2F2] mb-3 hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">

                                                            {
                                                                item?.paid ? <div class="flex items-center gap-x-2">
                                                                    <p className='h-[15px] w-[15px] bg-[#06E401] rounded-full' />
                                                                    <p className='text-[#828282] text-[10px] font-normal'>Paid</p>
                                                                </div> : item?.overdue ?
                                                                    <div class="flex items-center gap-x-2">
                                                                        <p className='h-[15px] w-[15px] bg-[#f00] rounded-full' />
                                                                        <p className='text-[#828282] text-[10px] font-normal'>Overdue</p>
                                                                    </div> : <div class="flex items-center gap-x-2">
                                                                        <p className='h-[15px] w-[15px] bg-brandPrimary rounded-full' />
                                                                        <p className='text-[#828282] text-[10px] font-normal'>Upcoming</p>
                                                                    </div>
                                                            }

                                                            {/* {

                                                                !item?.overdue && <div class="flex items-center gap-x-2">
                                                                    <p className='h-[15px] w-[15px] bg-brandPrimary rounded-full' />
                                                                    <p className='text-[#828282] text-[10px] font-normal'>Upcoming</p>
                                                                </div>
                                                            } */}


                                                        </td>
                                                    </tr >



                                                </>
                                            )
                                        }





                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div >
                {/* <div className='flex items-center justify-center mt-3'>
                    <PaginationRounded
                        count={pagination?.pageTotal}
                        onChange={handlePage}
                    />
                </div> */}
            </div >


            {/* <RepaymentDetails enrollmentId={selectedEnrollment} /> */}
        </>

    )
}

export default EnrollmentTable