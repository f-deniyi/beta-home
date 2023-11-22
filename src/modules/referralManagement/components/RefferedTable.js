import moment from 'moment'
import React, { useState } from 'react'
import LeadDetails from '../../repaymentManagement/components/RepaymentDetails'

const ReferredTable = ({ referrals }) => {
    // console.log(referrals)
    const [selectedEnrollment, setSelectedEnrollment] = useState(null)

    return (
        <>
            <div class=" bg-white sm:py-2 lg:py-3 rounded-lg">
                <div class=" mx-auto max-w-7xl ">
                    <div class="flex flex-col">
                        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <table class="min-w-full lg:divide-gray-200 lg:divide-y">
                                    <thead class="hidden lg:table-header-group">
                                        <tr>
                                            {/* <th class="py-3.5 px-4 text-left  font-medium text-black text-[12px] uppercase tracking-widest">#</th> */}

                                            <th class="py-3.5 px-4 text-left  font-medium text-black text-[12px] uppercase tracking-widest">Name</th>

                                            {/* <th class="py-3.5 px-4 text-left  uppercase tracking-widest font-medium text-black text-[12px]">Email</th> */}

                                            <th class="py-3.5 px-4 text-left  uppercase tracking-widest font-medium text-black text-[12px]">Enrollment</th>

                                            <th class="py-3.5 px-4 text-left  uppercase tracking-widest font-medium text-black text-[12px]">Amount</th>

                                            {/* <th class="py-3.5 px-4 text-left  uppercase tracking-widest font-medium text-black text-[12px]">Date </th> */}
                                            <th class="py-3.5 px-4 text-left  uppercase tracking-widest font-medium text-black text-[12px]">Action </th>

                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            referrals?.map((el, i) =>

                                                <tr class="bg-white">
                                                    <td class="px-4 py-4 text-sm font-bold text-gray-900 align-top lg:align-middle whitespace-nowrap sm:block lg:hidden">
                                                        {/* <div class="flex items-center">
                                                            {i + 1}
                                                        </div> */}
                                                        <div class="mt-1 space-y-2 font-medium pl-11 lg:hidden">
                                                            <div class="flex items-center">

                                                                {el?.user?.fullname}

                                                            </div>

                                                            {/* <div class="flex items-center">

                                                                {el?.user?.email}
                                                            </div> */}

                                                            <div class="flex items-center">

                                                                {el?.user?.enrollments[0]?.title}
                                                            </div>

                                                            <div class="flex items-center">
                                                                {Number(el?.user?.enrollments[0]?.package?.amount)?.toLocaleString()}
                                                            </div>


                                                            <div class="">
                                                                <button
                                                                    type="button"
                                                                    onClick={() => {
                                                                        setSelectedEnrollment(el?.user?.enrollments[0]?._id)
                                                                        document.getElementById('repayment_details').showModal()
                                                                    }
                                                                    }
                                                                    class="bg-brandPrimary inline-flex items-center px-3 py-1 text-[12px] font-medium text-gray-700 transition-all duration-200  shadow-sm focus:outline-none hover:text-black focus:ring-2 focus:ring-offset-2 focus:ring-[#fff122] px-[20px] py-[15px] rounded-full"
                                                                >
                                                                    View Details
                                                                </button>

                                                            </div>


                                                        </div>
                                                    </td>

                                                    <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                                        <div class="flex items-center">
                                                            {el?.user?.fullname}
                                                        </div>
                                                    </td>

                                                    {/* <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                                        <div class="flex items-center">
                                                            {el?.user?.email}
                                                        </div>
                                                    </td> */}


                                                    <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                                        <div class="flex items-center">
                                                            {el?.user?.enrollments[0]?.package?.title}
                                                        </div>
                                                    </td>

                                                    <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                                        <div class="flex items-center">
                                                            {Number(el?.user?.enrollments[0]?.package?.amount)?.toLocaleString()}
                                                        </div>
                                                    </td>


                                                    {/* <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                                        <div class="flex items-center">
                                                            {moment(el?.createdAt).format('ll')}
                                                        </div>
                                                    </td> */}
                                                    <td>
                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                setSelectedEnrollment(el?.user?.enrollments[0]._id)
                                                                document.getElementById('repayment_details').showModal()
                                                            }
                                                            }
                                                            class="bg-brandPrimary inline-flex items-center px-3 py-1 text-[12px] font-medium text-gray-700 transition-all duration-200  shadow-sm focus:outline-none hover:text-black focus:ring-2 focus:ring-offset-2 focus:ring-[#fff122] px-[20px] py-[10px] rounded-full"
                                                        >
                                                            View Details
                                                        </button>

                                                    </td>


                                                </tr>)
                                        }




                                        {/* <tr class="bg-white">
                                            <td class="px-4 py-4 text-sm font-bold text-gray-900 align-top lg:align-middle whitespace-nowrap">
                                                <div class="flex items-center">
                                                    1
                                                </div>
                                                <div class="mt-1 space-y-2 font-medium pl-11 lg:hidden">
                                                    <div class="flex items-center">

                                                        Faith May

                                                    </div>

                                                    <div class="flex items-center">

                                                        faithmay@gmail.com
                                                    </div>

                                                    <div class="flex items-center">

                                                        23 Apr 2023
                                                    </div>


                                                </div>
                                            </td>

                                            <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                                <div class="flex items-center">
                                                    Faith May
                                                </div>
                                            </td>

                                            <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                                <div class="flex items-center">
                                                    faithmay@gmail.com
                                                </div>
                                            </td>

                                            <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                                <div class="flex items-center">
                                                    23 Apr 2023
                                                </div>
                                            </td>


                                        </tr>



                                        <tr class="bg-white">
                                            <td class="px-4 py-4 text-sm font-bold text-gray-900 align-top lg:align-middle whitespace-nowrap">
                                                <div class="flex items-center">
                                                    1
                                                </div>
                                                <div class="mt-1 space-y-2 font-medium pl-11 lg:hidden">
                                                    <div class="flex items-center">

                                                        Faith May

                                                    </div>

                                                    <div class="flex items-center">

                                                        faithmay@gmail.com
                                                    </div>

                                                    <div class="flex items-center">

                                                        23 Apr 2023
                                                    </div>


                                                </div>
                                            </td>

                                            <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                                <div class="flex items-center">
                                                    Faith May
                                                </div>
                                            </td>

                                            <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                                <div class="flex items-center">
                                                    faithmay@gmail.com
                                                </div>
                                            </td>

                                            <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                                <div class="flex items-center">
                                                    23 Apr 2023
                                                </div>
                                            </td>


                                        </tr>

                                        <tr class="bg-white">
                                            <td class="px-4 py-4 text-sm font-bold text-gray-900 align-top lg:align-middle whitespace-nowrap">
                                                <div class="flex items-center">
                                                    1
                                                </div>
                                                <div class="mt-1 space-y-2 font-medium pl-11 lg:hidden">
                                                    <div class="flex items-center">

                                                        Faith May

                                                    </div>

                                                    <div class="flex items-center">

                                                        faithmay@gmail.com
                                                    </div>

                                                    <div class="flex items-center">

                                                        23 Apr 2023
                                                    </div>


                                                </div>
                                            </td>

                                            <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                                <div class="flex items-center">
                                                    Faith May
                                                </div>
                                            </td>

                                            <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                                <div class="flex items-center">
                                                    faithmay@gmail.com
                                                </div>
                                            </td>

                                            <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                                <div class="flex items-center">
                                                    23 Apr 2023
                                                </div>
                                            </td>


                                        </tr>



                                        <tr class="bg-white">
                                            <td class="px-4 py-4 text-sm font-bold text-gray-900 align-top lg:align-middle whitespace-nowrap">
                                                <div class="flex items-center">
                                                    1
                                                </div>
                                                <div class="mt-1 space-y-2 font-medium pl-11 lg:hidden">
                                                    <div class="flex items-center">

                                                        Faith May

                                                    </div>

                                                    <div class="flex items-center">

                                                        faithmay@gmail.com
                                                    </div>

                                                    <div class="flex items-center">

                                                        23 Apr 2023
                                                    </div>


                                                </div>
                                            </td>

                                            <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                                <div class="flex items-center">
                                                    Faith May
                                                </div>
                                            </td>

                                            <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                                <div class="flex items-center">
                                                    faithmay@gmail.com
                                                </div>
                                            </td>

                                            <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                                <div class="flex items-center">
                                                    23 Apr 2023
                                                </div>
                                            </td>


                                        </tr>



                                        <tr class="bg-white">
                                            <td class="px-4 py-4 text-sm font-bold text-gray-900 align-top lg:align-middle whitespace-nowrap">
                                                <div class="flex items-center">
                                                    1
                                                </div>
                                                <div class="mt-1 space-y-2 font-medium pl-11 lg:hidden">
                                                    <div class="flex items-center">

                                                        Faith May

                                                    </div>

                                                    <div class="flex items-center">

                                                        faithmay@gmail.com
                                                    </div>

                                                    <div class="flex items-center">

                                                        23 Apr 2023
                                                    </div>


                                                </div>
                                            </td>

                                            <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                                <div class="flex items-center">
                                                    Faith May
                                                </div>
                                            </td>

                                            <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                                <div class="flex items-center">
                                                    faithmay@gmail.com
                                                </div>
                                            </td>

                                            <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                                <div class="flex items-center">
                                                    23 Apr 2023
                                                </div>
                                            </td>


                                        </tr> */}





                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <LeadDetails enrollmentId={selectedEnrollment} />

        </>

    )
}

export default ReferredTable