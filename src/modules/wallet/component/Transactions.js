import React from 'react'
import provider from '../../../assets/images/provider.png'
import { miniMenu as menu, withdrawIcon, depositIcon } from '../../../assets/icons'


const TransactionsTable = () => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full  rounded-lg overflow-hidden border-separate border-spacing-y-3">
                <tbody>
                    <tr
                        className="  rounded-lg p-5 relative mb-2 "
                    >
                        <td className="p-2 w-[400px] ">
                            <div className="flex items-center">
                                <img
                                    className="w-[50px] h-[50px] rounded-lg mr-[10px]"
                                    src={withdrawIcon}
                                    alt="Item Image"
                                />
                                <div>
                                    <p className="text-[12px] font-medium">Deposited Funds</p>
                                </div>
                            </div>
                        </td>
                        <td className="p-2 w-[300px] text-[12px] font-medium">
                        7 Aug 2023

                        </td>
                        <td className="p-2 w-[300px] text-[12px] font-medium">N23,000</td>
                        <td className="p-2 w-[150px] text-[12px] font-medium">
                            <div className="flex items-center justify-center w-full h-full">
                                <p className="bg-[#FFA800] px-2 py-1 rounded-full text-center text-white text-[10px] font-medium">
                                    Pending
                                </p>
                            </div>
                        </td>
                        <td className=" p-2 w-[150px] relative text-[12px] font-medium text-right">
                            <div>
                                <button className="flex items-center justify-center text-blue-600 w-full h-full">
                                    <img src={menu} alt="icon" />
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr
                        className="  rounded-lg p-5 relative mb-2 "
                    >
                        <td className="p-2 w-[400px] ">
                            <div className="flex items-center">
                                <img
                                    className="w-[50px] h-[50px] rounded-lg mr-[10px]"
                                    src={depositIcon}
                                    alt="Item Image"
                                />
                                <div>
                                    <p className="text-[12px] font-medium">Withdraw Funds</p>
                                </div>
                            </div>
                        </td>
                        <td className="p-2 w-[300px] text-[12px] font-medium">
                        7 Aug 2023

                        </td>
                        <td className="p-2 w-[300px] text-[12px] font-medium">N23,000</td>
                        <td className="p-2 w-[150px] text-[12px] font-medium">
                            <div className="flex items-center justify-center w-full h-full">
                                <p className="bg-[#FFA800] px-2 py-1 rounded-full text-center text-white text-[10px] font-medium">
                                    Pending
                                </p>
                            </div>
                        </td>
                        <td className=" p-2 w-[150px] relative text-[12px] font-medium text-center">
                            <div>
                                <button className="flex items-center justify-center text-blue-600 w-full h-full">
                                    <img src={menu} alt="icon" />
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr
                        className="  rounded-lg p-5 relative mb-2 "
                    >
                        <td className="p-2 w-[400px] ">
                            <div className="flex items-center">
                                <img
                                    className="w-[50px] h-[50px] rounded-lg mr-[10px]"
                                    src={withdrawIcon}
                                    alt="Item Image"
                                />
                                <div>
                                    <p className="text-[12px] font-medium">Deposited Funds</p>
                                </div>
                            </div>
                        </td>
                        <td className="p-2 w-[300px] text-[12px] font-medium">
                        7 Aug 2023

                        </td>
                        <td className="p-2 w-[300px] text-[12px] font-medium">N23,000</td>
                        <td className="p-2 w-[150px] text-[12px] font-medium">
                            <div className="flex items-center justify-center w-full h-full">
                                <p className="bg-[#FFA800] px-2 py-1 rounded-full text-center text-white text-[10px] font-medium">
                                    Pending
                                </p>
                            </div>
                        </td>
                        <td className=" p-2 w-[150px] relative text-[12px] font-medium text-center">
                            <div>
                                <button className="flex items-center justify-center text-blue-600 w-full h-full">
                                    <img src={menu} alt="icon" />
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr
                        className="  rounded-lg p-5 relative mb-2 "
                    >
                        <td className="p-2 w-[400px] ">
                            <div className="flex items-center">
                                <img
                                    className="w-[50px] h-[50px] rounded-lg mr-[10px]"
                                    src={depositIcon}
                                    alt="Item Image"
                                />
                                <div>
                                    <p className="text-[12px] font-medium">Withdraw Funds</p>
                                </div>
                            </div>
                        </td>
                        <td className="p-2 w-[300px] text-[12px] font-medium">
                        7 Aug 2023

                        </td>
                        <td className="p-2 w-[300px] text-[12px] font-medium">N23,000</td>
                        <td className="p-2 w-[150px] text-[12px] font-medium">
                            <div className="flex items-center justify-center w-full h-full">
                                <p className="bg-[#FFA800] px-2 py-1 rounded-full text-center text-white text-[10px] font-medium">
                                    Pending
                                </p>
                            </div>
                        </td>
                        <td className=" p-2 w-[150px] relative text-[12px] font-medium text-center">
                            <div>
                                <button className="flex items-center justify-center text-blue-600 w-full h-full">
                                    <img src={menu} alt="icon" />
                                </button>
                            </div>
                        </td>
                    </tr><tr
                        className="  rounded-lg p-5 relative mb-2 "
                    >
                        <td className="p-2 w-[400px] ">
                            <div className="flex items-center">
                                <img
                                    className="w-[50px] h-[50px] rounded-lg mr-[10px]"
                                    src={withdrawIcon}
                                    alt="Item Image"
                                />
                                <div>
                                    <p className="text-[12px] font-medium">Deposited Funds</p>
                                </div>
                            </div>
                        </td>
                        <td className="p-2 w-[300px] text-[12px] font-medium">
                        7 Aug 2023

                        </td>
                        <td className="p-2 w-[300px] text-[12px] font-medium">N23,000</td>
                        <td className="p-2 w-[150px] text-[12px] font-medium">
                            <div className="flex items-center justify-center w-full h-full">
                                <p className="bg-[#FFA800] px-2 py-1 rounded-full text-center text-white text-[10px] font-medium">
                                    Pending
                                </p>
                            </div>
                        </td>
                        <td className=" p-2 w-[150px] relative text-[12px] font-medium text-center">
                            <div>
                                <button className="flex items-center justify-center text-blue-600 w-full h-full">
                                    <img src={menu} alt="icon" />
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr
                        className="  rounded-lg p-5 relative mb-2 "
                    >
                        <td className="p-2 w-[400px] ">
                            <div className="flex items-center">
                                <img
                                    className="w-[50px] h-[50px] rounded-lg mr-[10px]"
                                    src={depositIcon}
                                    alt="Item Image"
                                />
                                <div>
                                    <p className="text-[12px] font-medium">Withdraw Funds</p>
                                </div>
                            </div>
                        </td>
                        <td className="p-2 w-[300px] text-[12px] font-medium">
                        7 Aug 2023

                        </td>
                        <td className="p-2 w-[300px] text-[12px] font-medium">N23,000</td>
                        <td className="p-2 w-[150px] text-[12px] font-medium">
                            <div className="flex items-center justify-center w-full h-full">
                                <p className="bg-[#FFA800] px-2 py-1 rounded-full text-center text-white text-[10px] font-medium">
                                    Pending
                                </p>
                            </div>
                        </td>
                        <td className=" p-2 w-[150px] relative text-[12px] font-medium text-center">
                            <div>
                                <button className="flex items-center justify-center text-blue-600 w-full h-full">
                                    <img src={menu} alt="icon" />
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            
        </div>

    )
}

export default TransactionsTable