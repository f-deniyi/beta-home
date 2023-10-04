import React, { useState } from 'react'
import ModalManagement from '../../../generalComponents/ModalManagement'
import { close } from '../../../assets/icons'
import OtpInput from 'react-otp-input';

const WithdrawOTP = () => {
    const [otp, setOtp] = useState('');

    return (
        <ModalManagement
            id={"withdraw_otp"}
            hideCancel={true}
        >
            <div className='flex items-center justify-between mb-6'>
                <p className='text-[18px] font-medium '>Enter OTP</p>
                <div onClick={() => document.getElementById('withdraw_otp').close()} role='button'>
                    <img src={close} alt='close-icon' className='h-[23px] w-[23px]' />
                </div>

            </div>
            <div>
                <form>
                    <div className='flex itens-center justify-center'>
                        <OtpInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={4}
                            renderSeparator={<span className='mx-2'></span>}
                            inputStyle={{
                                height:"93px",
                                width:'75px',
                                background:'#f2f2f2',
                                borderRadius:'8px'
                            }}
                            renderInput={(props) => <input {...props} />}
                        />
                    </div>
                    <div className='my-[35px]'>
                        <p className='text-center text-[15px] font-light'>OTP will expire in</p>
                        <h3 className='text-center  text-[18.39px] font-semibold'>00:59</h3>
                    </div>
                    <div className=' mb-6'>
                        <button className="bg-brandPrimary rounded-full text-[15px] py-[12px] w-full  cursor-pointer"
                            onClick={(e) => {
                                e.preventDefault()
                                document.getElementById('withdraw_otp').close()
                            }
                            }
                        >
                            Confirm
                        </button>

                    </div>

                </form>

            </div>

        </ModalManagement>
    )
}

export default WithdrawOTP;