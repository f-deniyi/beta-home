import React, { useState } from 'react'
import supportImage from '../../assets/images/support2.webp'
import InputWithFullBoarder from '../../generalComponents/InputWithFullBoarder'
import CustomButton from '../../generalComponents/Button'
import UseSupportWithoutAuth from './controller'

const Support = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [email, setEmail] = useState('')

    const { isLoading, isSuccess, createTicket } = UseSupportWithoutAuth()

    const handleSupport = (e) => {
        e.preventDefault()
        const data = {
            email,
            title,
            description,
            "type": "service",
            "order": null
        }
        createTicket(data)

    }



    return (
        <div className='bg-gray-200 h-screen'>
            <div className="relative md:h-[52vh] xxl:h-[500px] w-full">
                <div className="absolute inset-0 !bg-cover !bg-center !bg-no-repeat w-full" style={{
                    background: `url(${supportImage})`
                }}></div>

                <div className="absolute inset-0 bg-black opacity-70"></div>

                <div className="absolute inset-0 flex  flex-col items-center justify-center">
                    <h3 className="text-white text-[45px] font-medium shadow-md">Get Support</h3>
                    <p className='text-white'>Please fill out the form and submit to reach the support team.</p>

                </div>
                <div className=' absolute h-full top-[78%] flex items-center justify-center  w-full '>
                    <form className='bg-white rounded-md py-4 px-6 rounded-3 border border-[#f2f2f2]' onSubmit={handleSupport} >
                        <InputWithFullBoarder
                            required
                            label={'Email'}
                            placeholder={'Enter Email'}
                            className={'!bg-[#EDEDED] !py-4 !px-[24px]'}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />

                        <InputWithFullBoarder
                            required
                            label={'Subject'}
                            placeholder={'Enter Subject'}
                            className={'!bg-[#EDEDED] !py-4 !px-[24px]'}
                            onChange={(e) => {
                                setTitle(e.target.value)
                            }}
                        />
                        <InputWithFullBoarder
                            required
                            label={'Description'}
                            placeholder={'Enter Description'}
                            className={'!bg-[#EDEDED] !py-4 !px-[24px] !h-[180px] shadow'}
                            row='40'
                            onChange={(e) => {
                                setDescription(e.target.value)
                            }}
                            isTextArea={true}
                        />

                        <CustomButton
                            className={'bg-brandPrimary !rounded-md w-full mb-3'}
                            buttonText={'Submit'}
                            isLoading={isLoading}
                            type={'submit'}



                        />



                    </form>

                </div>

            </div>
        </div>
    )
}

export default Support