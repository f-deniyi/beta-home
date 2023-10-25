import React, { useState } from 'react'
import ModalManagement from '../../../generalComponents/ModalManagement'
import { close } from '../../../assets/icons'
import useGetOrderDetails from '../controller.js/get_order_details'
import { formatAddress } from '../../../utils/format_address'
import moment from 'moment'
import { Carousel } from 'react-responsive-carousel'
import CustomButton from '../../../generalComponents/Button'
import InputWithFullBoarder from '../../../generalComponents/InputWithFullBoarder'
import { AcceptRequestMutation } from '../controller.js/service_request'
import { GenerateInvoicetMutation } from '../controller.js/generate_invoice'



const GenerateInvoice = ({ requestId }) => {
    const [count, setCount] = useState(1)
    const items = [...Array(count).keys()];
    const [price, setPrice] = useState('')
    const [sales_tax, setSalesTax] = useState('')

    const { isLoading: accepting, acceptRequestCaller } = AcceptRequestMutation(requestId)
    const { isLoading: generating, generateInvoiceCaller } = GenerateInvoicetMutation()


    const [formData, setFormData] = useState({
        items: [{
            item: '',
            quantity: '',
            total: '',
        }]
    });

    const handleAddItem = (e) => {
        e.preventDefault();
        setFormData({
            ...formData,
            items: [...formData.items, { item: '', quantity: '', total: '' }]
        });
    }

    const handleItemChange = (e, index) => {
        const { name, value } = e.target;
        const newItems = [...formData.items];
        newItems[index][name] = value;
        setFormData({
            ...formData,
            items: newItems,
        });
    }


    const acceptRequest = async (e) => {
        e.preventDefault();
        const data = {
            title: "Service Request Invoice",
            sales_tax: Number(sales_tax),
            service_request: requestId
        }
        const payload = {
            price: Number(price)
        }
        await acceptRequestCaller(payload)
        data.items = formData.items;
        console.log(data)
        generateInvoiceCaller(data)
    }



    return (
        <ModalManagement
            id='generate_invoice'
        >
            <div style={{
                width: '100%'
            }}>
                <div className='flex items-center flex-wrap justify-between mb-6'>
                    <div>
                        <p className='text-[18px] font-medium '>Create Invoice</p>

                    </div>
                    <div onClick={() => {
                        document.getElementById('generate_invoice').close()
                    }
                    } role='button'>
                        <img src={close} alt='close-icon' className='h-[23px] w-[23px]' />
                    </div>

                </div>
            </div>

            <form onSubmit={acceptRequest}>
                <div>
                    <InputWithFullBoarder
                        label={'Price'}
                        type='Number'
                        placeholder={'Enter price'}
                        className={'!bg-[#EDEDED] !py-4 !px-[24px]'}
                        onChange={(e) => {
                            setPrice(e.target.value)
                        }}
                        required
                    />
                </div>

                <div>
                    <InputWithFullBoarder
                        label={'Sales Tax'}
                        type='Number'
                        placeholder={'Enter sales tax'}
                        className={'!bg-[#EDEDED] !py-4 !px-[24px]'}
                        onChange={(e) => {
                            setSalesTax(e.target.value)
                        }}
                        required
                    />
                </div>

                <div className='mt-3 mb-6'>
                    <div className='flex items-center justify-between'>
                        <label className="text-13px md:text-16px font-semibold mb-2">
                            items
                        </label>
                        <button className="bg-brandPrimary flex  py-3 shadow-lg px-[25px] rounded-full " onClick={(e) => {
                            e.preventDefault()
                            // setCount(count => count + 1)
                            handleAddItem()
                        }}>
                            {/* <AiOutlinePlus /> */}
                            <p className="text-[12px] font-medium">+Add item</p>
                        </button>
                    </div>
                    {
                        formData.items.map((item, i) =>
                            <div className='ml-[43px]' key={i}>
                                <div>
                                    <InputWithFullBoarder
                                        type="text"
                                        name="itemName"
                                        value={item.item}
                                        placeholder={'Enter item name'}
                                        className='!bg-[#EDEDED] !py-4 !px-[24px]'
                                        onChange={(e) => handleItemChange(e, i)}
                                        required
                                    />
                                </div>
                                <div>
                                    <InputWithFullBoarder
                                        type="number"
                                        name="quantity"
                                        value={Number(item.quantity)}
                                        placeholder={'Enter number of items'}
                                        className='!bg-[#EDEDED] !py-4 !px-[24px]'
                                        onChange={(e) => handleItemChange(e, i)}
                                        required
                                    />
                                </div>
                                <div>
                                    <InputWithFullBoarder
                                        type="number"
                                        name="total"
                                        value={Number(item.total)}
                                        placeholder={'Enter total price'}
                                        className='!bg-[#EDEDED] !py-4 !px-[24px]'
                                        onChange={(e) => handleItemChange(e, i)}
                                        required
                                    />
                                </div>
                            </div>
                        )
                    }
                </div>

                <CustomButton
                    isLoading={accepting || generating}
                    disabled={accepting || generating}
                    buttonText={'Proceed'}
                    className={'!text-[15px] font-light w-full mt-3 rounded-full mt-[25px] !bg-brandPrimary  !py-[15px]'}
                />
            </form>

        </ModalManagement>
    )
}

export default GenerateInvoice;