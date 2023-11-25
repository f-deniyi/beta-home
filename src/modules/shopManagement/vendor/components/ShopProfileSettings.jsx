import React, { useEffect, useState } from "react";
import useGetUserDetailsManager from "../../../settings/controllers/get_UserDetails_controller";
import { camera, user } from "../../../../assets/icons";
import useFileUpload from "../../../fileupload/fileUploadController";
import InputWithFullBoarder from "../../../../generalComponents/InputWithFullBoarder";
import CustomButton from "../../../../generalComponents/Button";
import Loader from "../../../../generalComponents/Loader";
import { CreateShopManager } from "../controller/create_shop_controller";
import { UpdateShopManager } from "../controller/update_shop_controller";

import { formatAddress } from "../../../../utils/format_address";
import useGetShopsQuery from "../../../shopManagement/controllers/get_shops";
import { shop as shopIcon } from "../../../../assets/icons";
import useGetAllCategoriesQuery from "../../../shopManagement/controllers/get_all_categories";
import SelectInput from "../../../../generalComponents/SelectInput";
import { ca } from "date-fns/locale";
import useGetAllServiceCategoriesQuery from "../../controllers/get_all_service_categories";

const ShopProfileSettings = ({ hasShop }) => {
  const {
    data,
    isSuccess,
    isLoading: userLoading,
  } = useGetUserDetailsManager();
  const { categories } = useGetAllServiceCategoriesQuery({ enabled: true });

  const {
    data: userShop,
    isError,
    error,
    isLoading: fetchingShop,
  } = useGetShopsQuery({
    enabled: Boolean(data?.data?.user),
    owner_id: data?.data?.user?.id,
  });

  const [image, setUploadedImage] = useState(null);
  const [banner, setBanner] = useState(null);

  const [shopName, setShopName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [categoryIds, setCategoryIds] = useState([]);

  const {
    handleFileUpload: uploadFile,
    isLoading: fileLoading,
    data: uploadUrl,
  } = useFileUpload();

  const { isLoading, createShopController } = CreateShopManager();
  const { isLoading: updating, editPackageController } = UpdateShopManager(
    userShop?.shops[0]?._id
  );

  const handleFileUpload = (e, type) => {
    const file = e.target.files[0];
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const newImage = { url: reader.result, file };
        if (type === "banner") {
          setBanner(newImage);
        } else {
          setUploadedImage(newImage);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfileUpdate = async () => {
    const profilePicture = image
      ? await uploadFile(image?.file)
      : userShop?.shops[0]?.logo?.original;
    const banner_ = banner
      ? await uploadFile(banner?.file)
      : userShop?.shops[0]?.cover_image?.original;
    const data = {
      name: shopName.length > 0 ? shopName : userShop?.shops[0]?.name,
      description:
        description.length > 0 ? description : userShop?.shops[0].description,
      cover_image: {
        original: banner_,
        thumbnail: banner_,
      },
      logo: {
        original: profilePicture,
        thumbnail: profilePicture,
      },
      // is_active: true,
      address: {
        zip: zip.length > 0 ? zip : userShop?.shops[0]?.address?.zip,
        city: city.length > 0 ? city : userShop?.shops[0]?.address?.city,
        state: state.length > 0 ? state : userShop?.shops[0]?.address?.state,
        country:
          country.length > 0 ? country : userShop?.shops[0]?.address?.country,
        street_address:
          address.length > 0
            ? address
            : userShop?.shops[0]?.address?.street_address,
        lng: 0,
        lat: 0,
      },
      categories:
        categoryIds.length > 0 ? categoryIds : userShop?.shops[0]?.categories,
    };
    // console.log(data)
    hasShop ? editPackageController(data) : createShopController(data);

    // ;
  };

  return !userLoading ? (
    <>
      {!fetchingShop ? (
        <>
          <div className="">
            <div className="relative w-full">
              <div
                className="bg-cover bg-center h-[179px]  rounded-bl-[10px] rounded-br-[10px] w-full bg-white flex items-center justify-center"
                style={{
                  backgroundImage: `url(${
                    banner
                      ? banner?.url
                      : userShop?.shops[0]?.cover_image?.original
                  })`,
                }}
              >
                <div className="bg-brandPrimary h-[50px] w-[50px] rounded-[50%] flex items-center justify-center">
                  {/* <img src={camera} alt="icon" /> */}
                  <label className="cursor-pointer block">
                    <img src={camera} alt="icon" className="cursor-pointer" />
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => handleFileUpload(e, "banner")}
                    />
                  </label>
                </div>
              </div>
              <div className="absolute bottom-[0px] left-[80px]">
                <div className="relative transform -translate-x-1/2 translate-y-1/2">
                  <div className=" h-[135px] w-[135px]  rounded-full overflow-hidden border-4 border-brandPrimary bg-white flex justify-center items-center">
                    <img
                      className="object-cover h-full w-full"
                      src={
                        image
                          ? image?.url
                          : userShop?.shops[0]?.logo?.original ?? shopIcon
                      }
                      // src={image ? image?.url : user}
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
                        onChange={(e) => handleFileUpload(e, "cover_image")}
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
                {/* <p>{userShop?.shops[0]?.name}</p> */}
                {/* <label className='w-full text-[15px] font-medium mb-3'>Name</label> */}
                <InputWithFullBoarder
                  label={"Shop Name"}
                  className="input !bg-white  w-full  placeholder:text-[12px] text-[#121212] placeholder:font-light"
                  placeholder="Enter your shop name"
                  defaultValue={userShop?.shops[0]?.name}
                  onChange={(e) => {
                    setShopName(e.target.value);
                  }}
                />
              </div>
              <div className="mb-[17px]">
                <SelectInput
                  isMulti={true}
                  label={"Categories"}
                  options={categories}
                  backgroundColor={"#fff"}
                  // de
                  onChange={(e, opt) => {
                    console.log(e, opt.value);
                    const categoryIds = e.map((el) => el?._id);
                    console.log("idss", categoryIds);
                    setCategoryIds(categoryIds);
                  }}
                  defaultValue={userShop?.shops[0]?.categories}
                />
                {/* {console.log('shops--->>>',userShop?.shops[0])} */}
              </div>

              <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-x-2">
                <div className="mb-[17px]">
                  <InputWithFullBoarder
                    label={"Country"}
                    className="input !bg-white  w-full  placeholder:text-[12px] text-[#121212] placeholder:font-light"
                    placeholder="Enter your address"
                    defaultValue={userShop?.shops[0]?.address?.country}
                    onChange={(e) => {
                      setCountry(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-[17px]">
                  <InputWithFullBoarder
                    label={"State"}
                    className="input !bg-white  w-full  placeholder:text-[12px] text-[#121212] placeholder:font-light"
                    placeholder="Enter your address"
                    defaultValue={userShop?.shops[0]?.address?.state}
                    onChange={(e) => {
                      setState(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-x-2">
                <div className="mb-[17px]">
                  <InputWithFullBoarder
                    label={"City"}
                    className="input !bg-white  w-full  placeholder:text-[12px] text-[#121212] placeholder:font-light"
                    placeholder="Enter your address"
                    defaultValue={userShop?.shops[0]?.address?.city}
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-[17px]">
                  <InputWithFullBoarder
                    label={"Street Address"}
                    className="input !bg-white  w-full  placeholder:text-[12px] text-[#121212] placeholder:font-light"
                    placeholder="Enter your address"
                    defaultValue={userShop?.shops[0]?.address?.street_address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="mb-[17px]">
                <InputWithFullBoarder
                  label={"Zip code"}
                  className="input !bg-white  w-full  placeholder:text-[12px] text-[#121212] placeholder:font-light"
                  placeholder="Enter your address"
                  defaultValue={userShop?.shops[0]?.address?.zip}
                  onChange={(e) => {
                    setZip(e.target.value);
                  }}
                />
              </div>

              <div className="mb-[17px]">
                <InputWithFullBoarder
                  label={"Description"}
                  cols={"5"}
                  rows={"20"}
                  isTextArea={true}
                  className="input !bg-white  !h-[200px] w-full  placeholder:text-[12px] text-[#121212] placeholder:font-light"
                  placeholder="Describe your shop"
                  defaultValue={userShop?.shops[0]?.description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </div>
              <div className="w-full">
                <CustomButton
                  isLoading={fileLoading || isLoading || updating}
                  disabled={fileLoading || isLoading || updating}
                  buttonText={hasShop ? "Update Shop" : "Create Shop"}
                  className="text-[15px] font-medium w-full !bg-brandPrimary rounded-full !py-4 mt-[30px]"
                  onClick={(e) => {
                    e.preventDefault();
                    handleProfileUpdate();
                  }}
                />
              </div>
            </form>
          </div>
        </>
      ) : null}
    </>
  ) : (
    <Loader />
  );
};

export default ShopProfileSettings;
