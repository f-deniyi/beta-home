import React, { useState, useRef, useEffect } from 'react'
import InputWithFullBoarder from '../../../../generalComponents/InputWithFullBoarder'
import { ChangePassword as ChangePasswordMutationn } from '../../controller/update_profile'
import CustomButton from '../../../../generalComponents/Button'
import { BsEyeFill } from 'react-icons/bs'

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const ChangePassword = () => {
    const [old_password, setOldPassword] = useState('')
    const [new_password, setNewPassword] = useState('')
    const [confirm_password, setConfirmPassword] = useState('')
    const [mismatchPassword, setMismatchPassword] = useState(false)
    const [viewOldPassword, setViewOldPassword] = useState(false)
    const [viewPassword, setViewPassword] = useState(false)
    const [viewConfirmPassword, setViewConfirmPassword] = useState(false)



    const {
        changePasswordCaller,
        isLoading,
        isSuccess
    } = ChangePasswordMutationn()


    const formRef = useRef(null);

    const handlePasswordChange = (e) => {
        e.preventDefault()
        if (new_password !== confirm_password) {
            setMismatchPassword(true)
            return;
        }

        if (new_password === confirm_password && mismatchPassword) {
            setMismatchPassword(false)
        }

        const data = {
            old_password,
            new_password
        }
        changePasswordCaller(data)
    }

    useEffect(() => {
        if (isSuccess) {
            formRef.current.reset();

        }
    }, [isSuccess])

    return (
        <div className='px-2 md:p-3 mt-[10px] md:mt-[30px] md:ml-[130px] overflow-auto'>
            <form onSubmit={handlePasswordChange} ref={formRef}>
                <div className='mb-[17px]'>
                    <InputWithFullBoarder
                        type={viewOldPassword ? 'text' : 'password'}
                        hasSuffix={true}
                        label={'Old Password'}
                        className="input !bg-white  w-full  placeholder:text-[12px] text-[#121212] placeholder:font-light"
                        placeholder='Enter old password'
                        onChange={(e) => {
                            setOldPassword(e.target.value)
                        }}
                        required
                        icon={
                            viewOldPassword ? (
                                <AiOutlineEyeInvisible
                                    size={22}
                                    onClick={() => setViewOldPassword(!viewOldPassword)}
                                />
                            ) : (
                                <AiOutlineEye
                                    size={22}
                                    onClick={() => setViewOldPassword(!viewOldPassword)}
                                />
                            )
                        }
                    />
                </div>
                <div className='mb-[17px]'>
                    <InputWithFullBoarder
                        hasSuffix={true}
                        type={viewPassword ? 'text' : 'password'}
                        label={'New Password'}
                        className="input !bg-white  w-full  placeholder:text-[12px] text-[#121212] placeholder:font-light"
                        placeholder='Enter new password'
                        onChange={(e) => {
                            setNewPassword(e.target.value)
                        }}
                        required
                        icon={
                            viewPassword ? (
                                <AiOutlineEyeInvisible
                                    size={22}
                                    onClick={() => setViewPassword(!viewPassword)}
                                />
                            ) : (
                                <AiOutlineEye
                                    size={22}
                                    onClick={() => setViewPassword(!viewPassword)}
                                />
                            )
                        }

                    />
                </div>
                <div className='mb-[17px]'>
                    <InputWithFullBoarder
                        type={viewConfirmPassword ? 'text' : 'password'}
                        hasSuffix={true}
                        label={'Confirm Password'}
                        className="input !bg-white  w-full  placeholder:text-[12px] text-[#121212] placeholder:font-light"
                        placeholder='Enter new password'
                        onChange={(e) => {
                            setConfirmPassword(e.target.value)
                        }}
                        required
                        icon={
                            viewConfirmPassword ? (
                                <AiOutlineEyeInvisible
                                    size={22}
                                    onClick={() => setViewConfirmPassword(!viewConfirmPassword)}
                                />
                            ) : (
                                <AiOutlineEye
                                    size={22}
                                    onClick={() => setViewConfirmPassword(!viewConfirmPassword)}
                                />
                            )
                        }

                    />
                    {
                        mismatchPassword &&
                        <p className='text-red-500 -mt-3'>Password doesn't match</p>
                    }
                </div>

                <div className='w-full mt-[20px]'>
                    <CustomButton
                        isLoading={isLoading}
                        disabled={isLoading}
                        buttonText={'Change Password'}
                        type='submit'
                        className='text-[15px] font-medium w-full !bg-brandPrimary rounded-full !py-4 mt-[30px]'
                    // onClick={(e) => {
                    //     e.preventDefault()
                    // }}
                    />
                </div>

            </form>
        </div>
    )
}

export default ChangePassword