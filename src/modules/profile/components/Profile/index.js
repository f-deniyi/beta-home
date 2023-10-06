import React from 'react'
import { user, camera } from '../../../../assets/icons'

const Profile = () => {
  return (
    <>
      <div className=''>
        <div className="relative w-full">
          <div className="bg-cover bg-center h-[179px]  rounded-bl-[10px] rounded-br-[10px] w-full bg-white flex items-center justify-center" >
            <div className='bg-brandPrimary h-[50px] w-[50px] rounded-[50%] flex items-center justify-center'>
              <img src={camera} alt='icon' />
            </div>
          </div>
          <div className='absolute bottom-[0px] left-[80px]'>
            <div className='relative transform -translate-x-1/2 translate-y-1/2'>
              <div className=" h-[135px] w-[135px]  rounded-full overflow-hidden border-4 border-brandPrimary bg-white flex justify-center items-center">
                <img className="object-cover" src={user} alt="Profile Picture" />
              </div>
              <div className='absolute -right-[15px] bottom-[12%] border-2 border-white bg-brandPrimary h-[50px] w-[50px] rounded-[50%] flex items-center justify-center'>
                <img src={camera} alt='icon' />
              </div>
            </div>

          </div>

        </div>
      </div >


      <div className='p-3 mt-[30px] ml-[160px] h-[calc(100vh-400px)] overflow-auto'>
        <form>
          <div className='mb-[17px]'>
            <label className='w-full text-[15px] font-medium mb-3'>First Name</label>
            <input className="input  w-full  placeholder:text-[12px] text-[#8E8E8E] placeholder:font-light" placeholder='Enter your first name' />
          </div>
          <div className='mb-[17px]'>
            <label className='w-full text-[15px] font-medium mb-3'>Last Name</label>
            <input className="input  w-full  placeholder:text-[12px] text-[#8E8E8E] placeholder:font-light" placeholder='Enter your last name' />
          </div>
          <div className='mb-[17px]'>
            <label className='w-full text-[15px] font-medium mb-3'>Gender</label>
            <div className='flex items-center justify-between w-2/4'>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input type="radio" name="gender" className="radio checked:bg-brandPrimary" checked />
                  <span className="label-text pl-2">Male</span>

                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input type="radio" name="gender" className="radio checked:bg-brandPrimary" checked />
                  <span className="label-text pl-2">Female</span>

                </label>
              </div>
            </div>
          </div>
          <div className='mb-[17px]'>
            <label className='w-full text-[15px] font-medium mb-3'>Email</label>
            <input className="input  w-full  placeholder:text-[12px] text-[#8E8E8E] placeholder:font-light" placeholder='Enter your first name' />
          </div>
          <div className='mb-[17px]'>
            <label className='w-full text-[15px] font-medium mb-3'>Phone Number</label>
            <input className="input  w-full  placeholder:text-[12px] text-[#8E8E8E] placeholder:font-light" placeholder='Enter your phone number' />
          </div>
          <div className='mb-[17px]'>
            <label className='w-full text-[15px] font-medium mb-3'>Address</label>
            <input className="input  w-full  placeholder:text-[12px] text-[#8E8E8E] placeholder:font-light" placeholder='Enter your address' />
          </div>


          <div className='w-full'>
            <button className='text-[15px] font-medium w-full bg-brandPrimary rounded-full py-2 mt-[30px]'>Update Profile</button>
          </div>

        </form>
      </div>
    </>


  )
}

export default Profile