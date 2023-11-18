import React, { useState } from "react";
import useGetUserDetailsManager from "../../../settings/controllers/get_UserDetails_controller";
import { camera, user } from "../../../../assets/icons";
import useFileUpload from "../../../fileupload/fileUploadController";
import InputWithFullBoarder from "../../../../generalComponents/InputWithFullBoarder";
import CustomButton from "../../../../generalComponents/Button";
import Loader from "../../../../generalComponents/Loader";
import { CreateShopManager } from "../controller/create_shop_controller";
import { formatAddress } from "../../../../utils/format_address";

const ShopProfileSettings = () => {
  const {
    data,
    isSuccess,
    isLoading: userLoading,
  } = useGetUserDetailsManager();
  const [image, setUploadedImage] = useState(null);
  const [shopName, setShopName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const {
    handleFileUpload: uploadFile,
    isLoading: fileLoading,
    data: uploadUrl,
  } = useFileUpload();

  const { isLoading, createShopController } = CreateShopManager();

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
    const profilePicture = await uploadFile(image?.file);
    const data = {
      name: shopName,
      description: description,
      cover_image: {
        original: profilePicture,
        thumbnail: profilePicture,
      },
      logo: {
        original: profilePicture,
        thumbnail: profilePicture,
      },
      is_active: true,
      address: {
        zip: "930222",
        city: "Jos",
        state: "Plateau",
        country: "Nigeria",
        street_address: address,
        lng: 1.99,
        lat: 2.0,
      },
      categories: ["650c3f203659847217dd9681"],
    };
    // console.log(data)
    createShopController(data);
  };

  return !userLoading ? (
    <>
      <div className="">
        <div className="relative w-full">
          <div className="bg-cover bg-center h-[179px]  rounded-bl-[10px] rounded-br-[10px] w-full bg-white flex items-center justify-center">
            <div className="bg-brandPrimary h-[50px] w-[50px] rounded-[50%] flex items-center justify-center">
              <img src={camera} alt="icon" />
            </div>
          </div>
          <div className="absolute bottom-[0px] left-[80px]">
            <div className="relative transform -translate-x-1/2 translate-y-1/2">
              <div className=" h-[135px] w-[135px]  rounded-full overflow-hidden border-4 border-brandPrimary bg-white flex justify-center items-center">
                <img
                  className="object-cover"
                  src={image ? image?.url : user}
                  alt="Profile avatar"
                />
              </div>
              <div
                role="button"
                className="cursor-pointer absolute -right-[15px] bottom-[12%] border-2 border-white bg-brandPrimary h-[50px] w-[50px] rounded-[50%] flex items-center justify-center"
              >
                <label className="cursor-pointer block">
                  <img src={camera} alt="icon" className="cursor-pointer" />
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
      </div>

      <div className="p-3 mt-[100px]  h-[calc(100vh-400px)] overflow-auto">
        <div className="flex items-end mb-10">
          <p className="w-full max-w-max mr-1">Shop Information</p>
          <div className="border border-transparent w-full border-b-black mb-1 "></div>
        </div>
        <form className="ml-[160px]">
          <div className="mb-[17px]">
            {/* <label className='w-full text-[15px] font-medium mb-3'>Name</label> */}
            <InputWithFullBoarder
              label={"Shop Name"}
              className="input !bg-white  w-full  placeholder:text-[12px] text-[#121212] placeholder:font-light"
              placeholder="Enter your shop name"
              defaultValue={shopName}
              onChange={(e) => {
                setShopName(e.target.value);
              }}
            />
          </div>

          <div className="mb-[17px]">
            {/* <label className='w-full text-[15px] font-medium mb-3'>Phone Number</label> */}
            <InputWithFullBoarder
              label={"Phone Number"}
              className="input !bg-white  w-full  placeholder:text-[12px] text-[#121212] placeholder:font-light"
              placeholder="Enter your phone number"
              defaultValue={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>
          <div className="mb-[17px]">
            <InputWithFullBoarder
              label={"Address"}
              className="input !bg-white  w-full  placeholder:text-[12px] text-[#121212] placeholder:font-light"
              placeholder="Enter your address"
              defaultValue={formatAddress(address)}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </div>
          <div className="mb-[17px]">
            <InputWithFullBoarder
              label={"Description"}
              isTextArea={true}
              className="input !bg-white  w-full  placeholder:text-[12px] text-[#121212] placeholder:font-light"
              placeholder="Describe your shop"
              defaultValue={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <div className="w-full">
            <CustomButton
              isLoading={fileLoading || isLoading}
              disabled={fileLoading || isLoading}
              buttonText={"Update Profile"}
              className="text-[15px] font-medium w-full !bg-brandPrimary rounded-full !py-4 mt-[30px]"
              onClick={(e) => {
                e.preventDefault();
                // handleProfileUpdate();
              }}
            />
          </div>
        </form>
      </div>
    </>
  ) : (
    <Loader />
  );
};

export default ShopProfileSettings;
