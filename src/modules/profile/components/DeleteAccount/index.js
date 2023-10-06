import React from 'react'
import ModalManagement from '../../../../generalComponents/ModalManagement'
import { close, warning } from '../../../../assets/icons'

const DeleteAccount = () => {
    return (

        <div className='h-[calc(100vh-185px)] flex items-center justify-center '>
            <div className=' bg-white py-10 flex-col w-1/2 mx-auto rounded-lg '>
                <div className='flex items-center justify-center flex-col'>
                    <div className='mb-[16px]'>
                        <img src={warning} alt='icon' />
                    </div>
                    <h3 className='text-[20px] font-medium w-[60%] text-center'>Are you sure you want to delete your account?</h3>
                    <p className='text-[#8B8B8B] text-[12px] font-medium my-[18px] w-[60%] text-center'>This action will permanently delete your account from our database.</p>
                </div>
                <div className='flex items-center gap-2 w-3/4 mx-auto justify-center mt-[10px]'>
                    <button className='text-[15px] rounded-[30px] bg-brandPrimary w-1/2 py-3 hover:opacity-70  transition duration-300'

                    >
                        Yes
                    </button>
                    <button className='text-[15px] rounded-[30px] bg-[#f2f2f2] w-1/2 py-3 hover:opacity-70 transition duration-300'
                    >
                        No
                    </button>

                </div>
            </div>

        </div>

    )
}

export default DeleteAccount