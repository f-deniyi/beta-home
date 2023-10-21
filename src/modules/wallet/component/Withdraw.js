import React, { useEffect, useState, useRef } from 'react'
import ModalManagement from '../../../generalComponents/ModalManagement'
import { close } from '../../../assets/icons'
import { WithdrawWalletMutation } from '../controller/withdraw_wallet'
import InputWithFullBoarder from '../../../generalComponents/InputWithFullBoarder'
import CustomButton from '../../../generalComponents/Button'

const Withdraw = () => {
    const formRef = useRef()
    const [amount, setAmount] = useState(null)


    const { withdrawWalletCaller,
        data,
        isLoading,
        isSuccess,
        error } = WithdrawWalletMutation()


    const handleWalletWithdraw = (e) => {
        e.preventDefault()
        const payload = {
            amount: Number(amount)
        }
        withdrawWalletCaller(payload)

    }

    useEffect(() => {
        if (isSuccess) {
            // console.log('--->>data<<---', data)
            formRef.current.reset()
            document.getElementById('withdraw_fund').close()
        }
    }, [isSuccess])

    return (
        <ModalManagement
            id={"withdraw_fund"}
            hideCancel={true}
        >
            <div className='flex items-center justify-between mb-6'>
                <p className='text-[18px] font-medium '>Withdraw</p>
                <div onClick={() => document.getElementById('withdraw_fund').close()} role='button'>
                    <img src={close} alt='close-icon' className='h-[23px] w-[23px]' />
                </div>

            </div>
            <div>
                <form ref={formRef} onSubmit={handleWalletWithdraw}>
                    <div>
                        <InputWithFullBoarder
                            type='number'
                            label={'Amount'}
                            className="input   w-full  placeholder:text-[12px] text-[#121212] placeholder:font-light [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            placeholder='Enter amount'
                            required
                            onChange={(e) => {
                                setAmount(e.target.value)
                            }}
                        />
                    </div>
                    <div className=' mb-6'>
                        <CustomButton
                            type='submit'
                            isLoading={isLoading}
                            disabled={isLoading}
                            buttonText={'Withdraw'}
                            className='text-[15px] font-medium w-full !bg-brandPrimary rounded-full !py-[12px] mt-[30px]'

                        />


                    </div>

                </form>

            </div>

        </ModalManagement>
    )
}

export default Withdraw