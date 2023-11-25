import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const SupportTable = ({ supports }) => {
    const [activePage, setActivePage] = useState(1);
    const navigate = useNavigate()
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
                            <div class="inline-block min-w-full align-middle md:px-6 lg:px-8">
                                <table class="min-w-full lg:divide-gray-200 lg:divide-y table-auto w-full rounded border-separate border-spacing-y-4">
                                    <thead class="hidden lg:table-header-group">

                                    </thead>

                                    <tbody>
                                        {supports?.map((item, index) => (
                                            <>
                                                <tr class="bg-white">
                                                    <td class="bg-[#F2F2F2] mb-3 px-4 py-4 text-sm font-bold text-gray-900 align-top lg:align-middle whitespace-nowrap sm:block lg:hidden">
                                                        {/* <div class="flex items-center">
                                                                {index + 1}
                                                            </div> */}
                                                        <td class="bg-[#F2F2F2] mb-3 hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                                            <div class="flex items-center">
                                                                <p className='text-[12px] font-medium'>{item?.user?.fullname} <span className='font-normal'>{`${(item?.user?.email)}`}</span></p>
                                                            </div>
                                                        </td>
                                                        <div class="mt-1 space-y-2 font-medium pl-11 lg:hidden">
                                                            <div class="flex items-center">
                                                                <p className='text-[12px] font-semibold capitalize'>{item?.type} <span className='font-light'>{`- ${(item?.title)}`}</span></p>
                                                            </div>

                                                            <p className='text-[12px] font-semibold capitalize'>{moment(item?.createdAt).format('ll')}</p>


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
                                                    <td class="rounded-l rounded-[5px] bg-[#F2F2F2] mb-3 hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                                        <p className='text-[12px] font-medium'>{item?.user?.fullname} <span className='font-normal'>{`${(item?.user?.email)}`}</span></p>
                                                    </td>
                                                    <td class="rounded-l rounded-[5px] bg-[#F2F2F2] mb-3 hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                                        <p className='text-[12px] font-medium'> <span className='font-normal'>{`${(item?.user?.email)}`}</span></p>
                                                    </td>

                                                    <td class="bg-[#F2F2F2] mb-3 hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                                        <div class="flex items-center">
                                                            <p className='text-[12px] font-semibold capitalize'>{item?.type} <span className='font-light'>{`- ${(item?.title)}`}</span></p>
                                                        </div>
                                                    </td>

                                                    <td class=" mb-3 hidden bg-[#F2F2F2] px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                                        <p className='text-[12px] font-semibold capitalize'>{moment(item?.createdAt).format('ll')}</p>
                                                    </td>
                                                    <td class="rounded-r rounded-[5px] bg-[#F2F2F2] mb-3 hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap cursor-pointer">
                                                        <button className="flex items-center justify-center text-blue-600 w-full h-full cursor-pointer">
                                                            <div className="dropdown dropdown-bottom dropdown-end" >
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="23" viewBox="0 0 60 23" fill="none" tabIndex={0}>
                                                                    <path d="M41.25 11C41.25 13.0711 42.9289 14.75 45 14.75C47.0711 14.75 48.75 13.0711 48.75 11C48.75 8.92893 47.0711 7.25 45 7.25C42.9289 7.25 41.25 8.92893 41.25 11Z" fill="#080341" />
                                                                    <path d="M26.25 11C26.25 13.0711 27.9289 14.75 30 14.75C32.0711 14.75 33.75 13.0711 33.75 11C33.75 8.92893 32.0711 7.25 30 7.25C27.9289 7.25 26.25 8.92893 26.25 11Z" fill="#080341" />
                                                                    <path d="M11.25 11C11.25 13.0711 12.9289 14.75 15 14.75C17.0711 14.75 18.75 13.0711 18.75 11C18.75 8.92893 17.0711 7.25 15 7.25C12.9289 7.25 11.25 8.92893 11.25 11Z" fill="#080341" />
                                                                </svg>
                                                                <ul
                                                                    tabIndex={0}
                                                                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                                                                >
                                                                    <li
                                                                        role="button"
                                                                        onClick={() => {
                                                                            navigate(`/admin/support-management/${item?._id}`)
                                                                        }}
                                                                        className="text-[12px] font-normal bg-brandPrimary px-2 py-1 text-center rounded-full mb-2  text-black"
                                                                    >
                                                                        View Details
                                                                    </li>

                                                                </ul>
                                                            </div>
                                                        </button>

                                                    </td>


                                                </tr>
                                            </>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='flex items-center justify-center mt-3'>
                    <PaginationRounded
                        count={pagination?.pageTotal}
                        onChange={handlePage}
                    />
                </div> */}
            </div>

            {/* <RepaymentDetails enrollmentId={selectedEnrollment} /> */}
        </>
    );
};

export default SupportTable;
