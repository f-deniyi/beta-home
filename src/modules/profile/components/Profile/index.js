import React, { useEffect, useState } from 'react'
import { user, camera } from '../../../../assets/icons'
import { useQueryClient } from 'react-query';
import useGetUserDetailsManager from '../../../settings/controllers/get_UserDetails_controller';
import { formatAddress } from '../../../../utils/format_address';
import InputWithFullBoarder from "../../../../generalComponents/InputWithFullBoarder";
import CustomButton from '../../../../generalComponents/Button';
import useFileUpload from '../../../fileupload/fileUploadController';
import { UpdateProfile } from '../../controller/update_profile';
import Loader from '../../../../generalComponents/Loader';

const Profile = () => {
  const { data, isSuccess, isLoading: userLoading } = useGetUserDetailsManager();
  const [fullname, setFullname] = useState(data?.data?.user?.fullname)
  const [phone, setPhone] = useState(data?.data?.user?.phone ?? '')
  const userProfilePicture = data?.data?.user?.profile_picture;
  const [image, setUploadedImage] = useState(null)

  const {
    updateProfileCaller,
    isLoading,
  } = UpdateProfile()

  const {
    handleFileUpload: uploadFile,
    isLoading: fileLoading,
    data: uploadUrl,
  } = useFileUpload();

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const newImage = { url: reader.result, file };
        setUploadedImage(newImage);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfileUpdate = async () => {
    const profilePicture = image ? await uploadFile(image?.file) : userProfilePicture
    const data = {
      fullname,
      phone,
      // gender,
      // address,
      profile_picture: profilePicture
    }
    // console.log(data)
    updateProfileCaller(data)
  }
  // useEffect(() => {
  //   if (isSuccess) {
  //     setFullname((data?.data?.user?.fullname))
  //     setPhone(data?.data?.user?.phone)
  //   }

  // }, [isSuccess])
  return (
    !userLoading ?
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
                  <img className="object-cover" src={image ? image?.url : userProfilePicture?.length > 0 ? userProfilePicture : user} alt="Profile Picture" />
                </div>
                <div role='button' className='cursor-pointer absolute -right-[15px] bottom-[12%] border-2 border-white bg-brandPrimary h-[50px] w-[50px] rounded-[50%] flex items-center justify-center'>
                  <label className="cursor-pointer block">
                    <img src={camera} alt='icon' className='cursor-pointer' />
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => handleFileUpload(e)}
                    />
                  </label>
                </div>
              </div>
            </div>

          </div>
        </div >


        <div className='p-3 mt-[30px] ml-[160px] h-[calc(100vh-400px)] overflow-auto'>
          <form>
            <div className='mb-[17px]'>
              {/* <label className='w-full text-[15px] font-medium mb-3'>Name</label> */}
              <InputWithFullBoarder
                label={'Name'}
                className="input !bg-white  w-full  placeholder:text-[12px] text-[#121212] placeholder:font-light"
                placeholder='Enter your first name'
                defaultValue={data?.data?.user?.fullname}
                onChange={(e) => {
                  setFullname(e.target.value)
                }}
              />
            </div>
            {/* <div className='mb-[17px]'>
            <label className='w-full text-[15px] font-medium mb-3'>Last Name</label>
            <input className="input !bg-white  w-full  placeholder:text-[12px] text-[#121212] placeholder:font-light" placeholder='Enter your last name' />
          </div> */}
            {/* <div className='mb-[17px]'>
            <label className='text-13px md:text-16px font-semibold mb-2'>Gender</label>
            <div className='flex items-center justify-between w-2/4'>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    className="radio checked:bg-brandPrimary"
                    defaultChecked={data?.data?.user?.gender === 'male'}
                    onChange={(e) => {
                      setGender(e.target.checked ? 'Male' : '')
                    }}
                  />
                  <span className="label-text pl-2">Male</span>

                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    className="radio checked:bg-brandPrimary"
                    defaultChecked={data?.data?.user?.gender === 'female'}
                    onChange={(e) => {
                      setGender(e.target.checked ? 'Female' : '')
                    }}
                  />
                  <span className="label-text pl-2">Female</span>

                </label>
              </div>
            </div>
          </div> */}
            <div className='mb-[17px]'>
              {/* <label className='w-full text-[15px] font-medium mb-3'>Email</label> */}
              <InputWithFullBoarder
                label={'Email'}
                type={'email'}
                className="input !bg-white  w-full  placeholder:text-[12px] text-[#121212] disabled:text-[#8E8E8E] placeholder:font-light"
                placeholder='Enter your Email'
                disabled
                value={data?.data?.user?.email}

              />
            </div>
            <div className='mb-[17px]'>
              {/* <label className='w-full text-[15px] font-medium mb-3'>Phone Number</label> */}
              <InputWithFullBoarder
                label={'Phone Number'}
                className="input !bg-white  w-full  placeholder:text-[12px] text-[#121212] placeholder:font-light"
                placeholder='Enter your phone number'
                defaultValue={data?.data?.user?.phone}
                onChange={(e) => {
                  setPhone(e.target.value)
                }}
              />
            </div>
            <div className='mb-[17px]'>
              {/* <label className='w-full text-[15px] font-medium mb-3'>Address</label> */}
              {/* <InputWithFullBoarder
              label={'Address'}
              className="input !bg-white  w-full  placeholder:text-[12px] text-[#121212] placeholder:font-light"
              placeholder='Enter your address'
              defaultValue={formatAddress(data?.data?.user?.address)}
              onChange={(e) => {
                setAddress(e.target.value)
              }}
            /> */}
            </div>


            <div className='w-full'>
              <CustomButton
                isLoading={fileLoading || isLoading}
                disabled={fileLoading || isLoading}
                buttonText={'Update Profile'}
                className='text-[15px] font-medium w-full !bg-brandPrimary rounded-full !py-4 mt-[30px]'
                onClick={(e) => {
                  e.preventDefault()
                  handleProfileUpdate()
                }}
              />
            </div>

          </form>
        </div>
      </> : <Loader />


  )
}

export default Profile