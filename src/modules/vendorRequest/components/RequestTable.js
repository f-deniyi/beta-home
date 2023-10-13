import React from 'react'
import RequestDetails from './RequestDetails'

const RequestTable = () => {
    return (
        <>

            <div class=" bg-white sm:py-2 lg:py-3 rounded-lg">
                <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

                    <div class="flex flex-col">
                        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <table class="min-w-full lg:divide-gray-200 lg:divide-y">
                                    <thead class="hidden lg:table-header-group">
                                        <tr>
                                            <th class="py-3.5 px-4 text-left  font-medium text-black text-[12px] uppercase tracking-widest">#</th>

                                            <th class="py-3.5 px-4 text-left  font-medium text-black text-[12px] uppercase tracking-widest">Name</th>

                                            <th class="py-3.5 px-4 text-left  uppercase tracking-widest font-medium text-black text-[12px]">Email</th>

                                            <th class="py-3.5 px-4 text-left  uppercase tracking-widest font-medium text-black text-[12px]">Date Created</th>
                                            <th class="py-3.5 px-4 text-left  uppercase tracking-widest font-medium text-black text-[12px]">No. of Order</th>



                                            <th class="py-3.5 px-4 text-left  uppercase tracking-widest font-medium text-black text-[12px]">Status</th>
                                            <th class="py-3.5 px-4 text-left  uppercase tracking-widest font-medium text-black text-[12px]">Actions</th>

                                        </tr>
                                    </thead>

                                    <tbody>
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

                                                    <div class="flex items-center">

                                                        9
                                                    </div>

                                                    <div class="flex items-center pt-3 space-x-4">
                                                        <div class="flex items-center justify-center bg-[#00A3FF] py-[5px] px-[10px] text-center text-white rounded-[20px]">
                                                            Customer
                                                        </div>

                                                        <button
                                                            type="button"
                                                            onClick={() => document.getElementById('vendor_request').showModal()}
                                                            class="bg-brandPrimary inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200  shadow-sm focus:outline-none hover:text-black focus:ring-2 focus:ring-offset-2 focus:ring-[#fff122] px-[20px] py-[15px] rounded-full"
                                                        >
                                                            View Details
                                                        </button>
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

                                            <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                                <div class="flex items-center">
                                                    34
                                                </div>
                                            </td>

                                            <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 xl:table-cell whitespace-nowrap text-center">
                                                <div class="flex items-center justify-center bg-[#00A3FF] py-[5px] px-[10px] text-center text-white rounded-[20px]">
                                                    Customer
                                                </div>
                                            </td>


                                            <td class="hidden px-4 py-4 lg:table-cell whitespace-nowrap">
                                                <div class="flex items-center space-x-4">
                                                    <button
                                                        type="button"
                                                        onClick={() => document.getElementById('vendor_request').showModal()}
                                                        class="bg-brandPrimary inline-flex items-center px-3 py-2 text-[12px] font-medium text-gray-700 transition-all duration-200  shadow-sm focus:outline-none hover:text-black focus:ring-2 focus:ring-offset-2 focus:ring-[#fff122] px-[20px] py-[15px] rounded-full"
                                                    >
                                                        View Details
                                                    </button>

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

                                                    <div class="flex items-center">

                                                        9
                                                    </div>

                                                    <div class="flex items-center pt-3 space-x-4">
                                                        <div class="flex items-center justify-center bg-[#00A3FF] py-[5px] px-[10px] text-center text-white rounded-[20px]">
                                                            Customer
                                                        </div>

                                                        <button
                                                            type="button"
                                                            onClick={() => document.getElementById('vendor_request').showModal()}
                                                            class="bg-brandPrimary inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200  shadow-sm focus:outline-none hover:text-black focus:ring-2 focus:ring-offset-2 focus:ring-[#fff122] px-[20px] py-[15px] rounded-full"
                                                        >
                                                            View Details
                                                        </button>
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

                                            <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                                <div class="flex items-center">
                                                    34
                                                </div>
                                            </td>

                                            <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 xl:table-cell whitespace-nowrap text-center">
                                                <div class="flex items-center justify-center bg-[#00A3FF] py-[5px] px-[10px] text-center text-white rounded-[20px]">
                                                    Customer
                                                </div>
                                            </td>


                                            <td class="hidden px-4 py-4 lg:table-cell whitespace-nowrap">
                                                <div class="flex items-center space-x-4">
                                                    <button
                                                        type="button"
                                                        onClick={() => document.getElementById('vendor_request').showModal()}
                                                        class="bg-brandPrimary inline-flex items-center px-3 py-2 text-[12px] font-medium text-gray-700 transition-all duration-200  shadow-sm focus:outline-none hover:text-black focus:ring-2 focus:ring-offset-2 focus:ring-[#fff122] px-[20px] py-[15px] rounded-full"
                                                    >
                                                        View Details
                                                    </button>

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

                                                    <div class="flex items-center">

                                                        9
                                                    </div>

                                                    <div class="flex items-center pt-3 space-x-4">
                                                        <div class="flex items-center justify-center bg-[#00A3FF] py-[5px] px-[10px] text-center text-white rounded-[20px]">
                                                            Customer
                                                        </div>

                                                        <button
                                                            type="button"
                                                            onClick={() => document.getElementById('vendor_request').showModal()}
                                                            class="bg-brandPrimary inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200  shadow-sm focus:outline-none hover:text-black focus:ring-2 focus:ring-offset-2 focus:ring-[#fff122] px-[20px] py-[15px] rounded-full"
                                                        >
                                                            View Details
                                                        </button>
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

                                            <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                                <div class="flex items-center">
                                                    34
                                                </div>
                                            </td>

                                            <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 xl:table-cell whitespace-nowrap text-center">
                                                <div class="flex items-center justify-center bg-[#00A3FF] py-[5px] px-[10px] text-center text-white rounded-[20px]">
                                                    Customer
                                                </div>
                                            </td>


                                            <td class="hidden px-4 py-4 lg:table-cell whitespace-nowrap">
                                                <div class="flex items-center space-x-4">
                                                    <button
                                                        type="button"
                                                        onClick={() => document.getElementById('vendor_request').showModal()}
                                                        class="bg-brandPrimary inline-flex items-center px-3 py-2 text-[12px] font-medium text-gray-700 transition-all duration-200  shadow-sm focus:outline-none hover:text-black focus:ring-2 focus:ring-offset-2 focus:ring-[#fff122] px-[20px] py-[15px] rounded-full"
                                                    >
                                                        View Details
                                                    </button>

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

                                                    <div class="flex items-center">

                                                        9
                                                    </div>

                                                    <div class="flex items-center pt-3 space-x-4">
                                                        <div class="flex items-center justify-center bg-[#00A3FF] py-[5px] px-[10px] text-center text-white rounded-[20px]">
                                                            Customer
                                                        </div>

                                                        <button
                                                            type="button"
                                                            onClick={() => document.getElementById('vendor_request').showModal()}
                                                            class="bg-brandPrimary inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200  shadow-sm focus:outline-none hover:text-black focus:ring-2 focus:ring-offset-2 focus:ring-[#fff122] px-[20px] py-[15px] rounded-full"
                                                        >
                                                            View Details
                                                        </button>
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

                                            <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                                <div class="flex items-center">
                                                    34
                                                </div>
                                            </td>

                                            <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 xl:table-cell whitespace-nowrap text-center">
                                                <div class="flex items-center justify-center bg-[#00A3FF] py-[5px] px-[10px] text-center text-white rounded-[20px]">
                                                    Customer
                                                </div>
                                            </td>


                                            <td class="hidden px-4 py-4 lg:table-cell whitespace-nowrap">
                                                <div class="flex items-center space-x-4">
                                                    <button
                                                        type="button"
                                                        onClick={() => document.getElementById('vendor_request').showModal()}
                                                        class="bg-brandPrimary inline-flex items-center px-3 py-2 text-[12px] font-medium text-gray-700 transition-all duration-200  shadow-sm focus:outline-none hover:text-black focus:ring-2 focus:ring-offset-2 focus:ring-[#fff122] px-[20px] py-[15px] rounded-full"
                                                    >
                                                        View Details
                                                    </button>

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

                                                    <div class="flex items-center">

                                                        9
                                                    </div>

                                                    <div class="flex items-center pt-3 space-x-4">
                                                        <div class="flex items-center justify-center bg-[#00A3FF] py-[5px] px-[10px] text-center text-white rounded-[20px]">
                                                            Customer
                                                        </div>

                                                        <button
                                                            type="button"
                                                            onClick={() => document.getElementById('vendor_request').showModal()}
                                                            class="bg-brandPrimary inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200  shadow-sm focus:outline-none hover:text-black focus:ring-2 focus:ring-offset-2 focus:ring-[#fff122] px-[20px] py-[15px] rounded-full"
                                                        >
                                                            View Details
                                                        </button>
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

                                            <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                                <div class="flex items-center">
                                                    34
                                                </div>
                                            </td>

                                            <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 xl:table-cell whitespace-nowrap text-center">
                                                <div class="flex items-center justify-center bg-[#00A3FF] py-[5px] px-[10px] text-center text-white rounded-[20px]">
                                                    Customer
                                                </div>
                                            </td>


                                            <td class="hidden px-4 py-4 lg:table-cell whitespace-nowrap">
                                                <div class="flex items-center space-x-4">
                                                    <button
                                                        type="button"
                                                        onClick={() => document.getElementById('vendor_request').showModal()}
                                                        class="bg-brandPrimary inline-flex items-center px-3 py-2 text-[12px] font-medium text-gray-700 transition-all duration-200  shadow-sm focus:outline-none hover:text-black focus:ring-2 focus:ring-offset-2 focus:ring-[#fff122] px-[20px] py-[15px] rounded-full"
                                                    >
                                                        View Details
                                                    </button>

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

                                                    <div class="flex items-center">

                                                        9
                                                    </div>

                                                    <div class="flex items-center pt-3 space-x-4">
                                                        <div class="flex items-center justify-center bg-[#00A3FF] py-[5px] px-[10px] text-center text-white rounded-[20px]">
                                                            Customer
                                                        </div>

                                                        <button
                                                            type="button"
                                                            onClick={() => document.getElementById('vendor_request').showModal()}
                                                            class="bg-brandPrimary inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200  shadow-sm focus:outline-none hover:text-black focus:ring-2 focus:ring-offset-2 focus:ring-[#fff122] px-[20px] py-[15px] rounded-full"
                                                        >
                                                            View Details
                                                        </button>
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

                                            <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                                <div class="flex items-center">
                                                    34
                                                </div>
                                            </td>

                                            <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 xl:table-cell whitespace-nowrap text-center">
                                                <div class="flex items-center justify-center bg-[#00A3FF] py-[5px] px-[10px] text-center text-white rounded-[20px]">
                                                    Customer
                                                </div>
                                            </td>


                                            <td class="hidden px-4 py-4 lg:table-cell whitespace-nowrap">
                                                <div class="flex items-center space-x-4">
                                                    <button
                                                        type="button"
                                                        onClick={() => document.getElementById('vendor_request').showModal()}
                                                        class="bg-brandPrimary inline-flex items-center px-3 py-2 text-[12px] font-medium text-gray-700 transition-all duration-200  shadow-sm focus:outline-none hover:text-black focus:ring-2 focus:ring-offset-2 focus:ring-[#fff122] px-[20px] py-[15px] rounded-full"
                                                    >
                                                        View Details
                                                    </button>

                                                </div>
                                            </td>
                                        </tr>





                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <RequestDetails />
        </>

    )
}

export default RequestTable