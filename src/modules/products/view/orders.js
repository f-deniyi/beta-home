import React, { useState } from 'react'
import ModalManagement from '../../../generalComponents/ModalManagement'
import product from '../../../assets/images/product.png'
import { menu } from '../../../assets/icons'
import { close } from '../../../assets/icons'


const ProductOrders = () => {
  const [selectedOrder, setSelectedOrder] = useState('All')
  const orderStatus = [
    'All',
    'Order recieved',
    'Order processing',
    'Order dispatched',
    'Order delivered',
    'Order cancelled',
    'Confirmation'
  ]

  return (
    <ModalManagement
      id='product_orders'
      type='large'
    >
      <div style={{
        width: '100%'
      }}>
        <div className='flex items-center justify-between mb-6'>
          <div>
            <p className='text-[18px] font-medium '>Product Order</p>
            <p className='text-[12px] font-normal '>List of product orders you have.</p>

          </div>
          <div onClick={() => document.getElementById('product_orders').close()} role='button'>
            <img src={close} alt='close-icon' className='h-[23px] w-[23px]' />
          </div>

        </div>
        <div className='flex gap-2 mb-3'>
          {
            orderStatus.map(el => <p
              onClick={() => {
                setSelectedOrder(el)
              }}
              className={`py-[10px] px-[20px] text-[#696969] font-medium text-[12px] cursor-pointer ${selectedOrder !== el ? 'bg-[#F2F2F2]' : 'bg-brandPrimary text-black'} rounded-[20px] `}>{el}</p>)
          }
        </div>
        <table className="min-w-full  rounded-lg overflow-hidden border-separate border-spacing-y-3">
          <tbody>
            <tr
              className="bg-[#FAFAFA]  rounded-lg p-5 relative mb-2 "
            >
              <td className="p-2 w-[450px] ">
                <div className="flex items-center">
                  <img
                    className="w-[80px] h-[80px] rounded-lg mr-[10px]"
                    src={product}
                    alt="Item Image"
                  />
                  <div>
                    <p className="text-[15px] font-medium">Single sitter chair</p>
                  </div>
                </div>
              </td>
              <td className="p-2 w-[300px] text-[14px] font-normal">
                Furniture

              </td>
              <td className="p-2 w-[150px] text-[14px] font-normal">
                02
              </td>
              <td className="p-2 w-[300px] text-[14px] font-normal">23 Sep 2023</td>
              <td className="p-2 w-[150px] text-[14px] font-normal">N56,000</td>
              <td className="p-2 w-[150px] text-[14px] font-normal">
                <div className="flex items-center justify-center w-full h-full">
                  <p className="bg-[#FFA800] px-2 py-1 rounded-full text-center text-white text-[10px] font-medium">
                    Order processing
                  </p>
                </div>
              </td>
              <td className=" p-2 w-[150px] relative text-[14px] font-normal text-center">
                <div>
                  <button className="flex items-center justify-center text-blue-600 w-full h-full cursor-pointer">
                    <div className="dropdown dropdown-bottom dropdown-end">
                      {/* <label tabIndex={0} className="btn m-1">Click</label> */}
                      <img src={menu} alt="icon" tabIndex={0} />
                      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='text-[12px] font-normal bg-brandPrimary px-2 py-1 text-center rounded-full mb-2  text-black'>View Order</li>
                        <li className='text-[12px] font-normal bg-[#F2F2F2] px-2 py-1 text-center rounded-full text-black'>Report dispute</li>

                      </ul>
                    </div>

                  </button>
                </div>
              </td>
            </tr>
            <tr
              className="bg-[#FAFAFA]  rounded-lg p-5 relative mb-2 "
            >
              <td className="p-2 w-[450px] ">
                <div className="flex items-center">
                  <img
                    className="w-[80px] h-[80px] rounded-lg mr-[10px]"
                    src={product}
                    alt="Item Image"
                  />
                  <div>
                    <p className="text-[15px] font-medium">Single sitter chair</p>
                  </div>
                </div>
              </td>
              <td className="p-2 w-[300px] text-[14px] font-normal">
                Furniture

              </td>
              <td className="p-2 w-[150px] text-[14px] font-normal">
                02
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
            </tr><tr
              className="bg-[#FAFAFA]  rounded-lg p-5 relative mb-2 "
            >
              <td className="p-2 w-[450px] ">
                <div className="flex items-center">
                  <img
                    className="w-[80px] h-[80px] rounded-lg mr-[10px]"
                    src={product}
                    alt="Item Image"
                  />
                  <div>
                    <p className="text-[15px] font-medium">Single sitter chair</p>
                  </div>
                </div>
              </td>
              <td className="p-2 w-[300px] text-[14px] font-normal">
                Furniture

              </td>
              <td className="p-2 w-[150px] text-[14px] font-normal">
                02
              </td>
              <td className="p-2 w-[300px] text-[14px] font-normal">23 Sep 2023</td>
              <td className="p-2 w-[150px] text-[14px] font-normal">N56,000</td>
              <td className="p-2 w-[150px] text-[14px] font-normal">
                <div className="flex items-center justify-center w-full h-full">
                  <p className="bg-[#F00] px-2 py-1 rounded-full text-center text-white text-[10px] font-medium">
                    Order cancelled
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
            </tr><tr
              className="bg-[#FAFAFA]  rounded-lg p-5 relative mb-2 "
            >
              <td className="p-2 w-[450px] ">
                <div className="flex items-center">
                  <img
                    className="w-[80px] h-[80px] rounded-lg mr-[10px]"
                    src={product}
                    alt="Item Image"
                  />
                  <div>
                    <p className="text-[15px] font-medium">Single sitter chair</p>
                  </div>
                </div>
              </td>
              <td className="p-2 w-[300px] text-[14px] font-normal">
                Furniture

              </td>
              <td className="p-2 w-[150px] text-[14px] font-normal">
                02
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
            </tr><tr
              className="bg-[#FAFAFA]  rounded-lg p-5 relative mb-2 "
            >
              <td className="p-2 w-[450px] ">
                <div className="flex items-center">
                  <img
                    className="w-[80px] h-[80px] rounded-lg mr-[10px]"
                    src={product}
                    alt="Item Image"
                  />
                  <div>
                    <p className="text-[15px] font-medium">Single sitter chair</p>
                  </div>
                </div>
              </td>
              <td className="p-2 w-[300px] text-[14px] font-normal">
                Furniture

              </td>
              <td className="p-2 w-[150px] text-[14px] font-normal">
                02
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
          </tbody>
        </table>
      </div>


    </ModalManagement>
  )
}

export default ProductOrders