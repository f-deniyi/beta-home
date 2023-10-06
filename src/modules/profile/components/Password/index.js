import React from 'react'

const ChangePassword = () => {
    return (
        <div className='p-3 mt-[30px] ml-[130px] overflow-auto'>
            <form>
                <div className='mb-[17px]'>
                    <label className='w-full text-[15px] font-medium mb-3'>Old Password</label>
                    <input className="input  w-full  placeholder:text-[12px] text-[#8E8E8E] placeholder:font-light" placeholder='Enter your first name' />
                </div>
                <div className='mb-[17px]'>
                    <label className='w-full text-[15px] font-medium mb-3'>New Password</label>
                    <input className="input  w-full  placeholder:text-[12px] text-[#8E8E8E] placeholder:font-light" placeholder='Enter your last name' />
                </div>
                <div className='mb-[17px]'>
                    <label className='w-full text-[15px] font-medium mb-3'>Confirm Password</label>
                    <input className="input  w-full  placeholder:text-[12px] text-[#8E8E8E] placeholder:font-light" placeholder='Enter your first name' />
                </div>

                <div className='w-full mt-[20px]'>
                    <button className='text-[15px] font-medium w-full bg-brandPrimary rounded-full py-2 mt-[30px]'>Change Password</button>
                </div>

            </form>
        </div>
    )
}

export default ChangePassword