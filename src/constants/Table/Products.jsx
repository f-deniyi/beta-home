import React from 'react'
import product from '../../assets/images/product.png'
import { menu } from '../../assets/icons'

const ProductTable = () => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full  rounded-lg overflow-hidden border-separate border-spacing-y-3">
                <tbody>
                    <tr
                        className="bg-[#FAFAFA]  rounded-lg p-5 relative mb-2 "
                    >
                        <td className="p-2 w-[400px] ">
                            <div className="flex items-center">
                                <img
                                    className="w-[80px] h-[80px] rounded-lg mr-[10px]"
                                    src={product}
                                    alt="Item Image"
                                />
                                <div>
                                    <p className="text-[15px] font-medium">Plumber</p>
                                </div>
                            </div>
                        </td>
                        <td className="p-2 w-[300px] text-[14px] font-normal">
                            Furniture

                        </td>
                        <td className="p-2 w-[300px] text-[14px] font-normal">23 Sep 2023</td>
                        <td className="p-2 w-[150px] text-[14px] font-normal">N56,000</td>
                        <td className="p-2 w-[150px] text-[14px] font-normal">
                            <div className="flex items-center justify-center w-full h-full">
                                <p className="bg-brandGreen px-2 py-1 rounded-full text-center text-white text-[10px] font-medium">
                                   Order received
                                </p>
                            </div>
                        </td>
                        <td className=" p-2 w-[150px] relative text-[14px] font-normal text-center">
                            <div>
                                <button className="flex items-center justify-center text-blue-600 w-full h-full">
                                    <img src={menu} alt="icon" />
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr
                        className=" bg-[#FAFAFA] rounded-[10px]  p-5 relative "
                    >
                        <td className="p-2 w-[400px] ">
                            <div className="flex items-center">
                                <img
                                    className="w-[80px] h-[80px] rounded-lg mr-[10px]"
                                    src={product}
                                    alt="Item Image"
                                />
                                <div>
                                    <p className="text-[15px] font-medium">Plumber</p>
                                </div>
                            </div>
                        </td>
                        <td className="p-2 w-[300px] text-[14px] font-normal">
                            Furniture

                        </td>
                        <td className="p-2 w-[300px] text-[14px] font-normal">23 Sep 2023</td>
                        <td className="p-2 w-[150px] text-[14px] font-normal">N56,000</td>
                        <td className="p-2 w-[150px] text-[14px] font-normal">
                            <div className="flex items-center justify-center w-full h-full">
                                <p className="bg-brandYellow px-2 py-1 rounded-full text-center text-white text-[10px] font-medium">
                                    Order Processing
                                </p>
                            </div>
                        </td>
                        <td className=" p-2 w-[150px] relative text-[14px] font-normal text-center">
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

export default ProductTable