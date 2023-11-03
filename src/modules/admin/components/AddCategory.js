import React, { useEffect, useState } from "react";
import ModalManagement from "../../../generalComponents/ModalManagement";
import CustomButton from "../../../generalComponents/Button";
import InputWithFullBoarder from "../../../generalComponents/InputWithFullBoarder";
import { close } from "../../../assets/icons";
import { AiOutlinePlus } from "react-icons/ai";
import useFileUpload from "../../fileupload/fileUploadController";
import { AddBrandsManager } from "../controllers/add_brands_controller";
import { AddCategoryManager } from "../controllers/add_category_controller";


const AddCategory = ({ type }) => {
  const { isLoading: addingBrandCategory, isSuccess: brandUploaded, addBrandController } = AddBrandsManager()
  const { isLoading: addingCategory, isSuccess: categoryUploaded, addCategoryController } = AddCategoryManager()

  const [uploadedImages, setUploadedImages] = useState(null);
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const newImage = { url: reader.result, file };
        setUploadedImages(newImage);
      };
      reader.readAsDataURL(file);
    }
  };

  const {
    error: fileUploadError,
    handleFileUpload: uploadFile,
    isLoading: fileLoading,
    data: uploadUrl,
  } = useFileUpload();

  const [name, setName] = useState("");
  const [parent, setParent] = useState(null);
  const [details, setDetails] = useState("");
  const [group, setGroup] = useState("");
  const [imageError, setImageError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (uploadedImages) {
      if (imageError) {
        setImageError(false)
      }
      const gallery = await uploadFile(uploadedImages.file);
      // const gallery = uploadUrl
      // const galleries = await Promise.all(galleryPromises);
      // console.log(gallery);
      const data = {
        name: name,
        icon: type !== 'brand' ? gallery : '',
        image: {
          original: type === 'brand' ? gallery : '',
          thumbnail: type === 'brand' ? gallery : '',
        },
        details: details,
        parent: parent,
        type: null,
      };
      console.log(data)
      type === 'brand' ? addBrandController(data) : addCategoryController(data)

    } else {
      setImageError(true)
    }
  };

  useEffect(() => {
    if (categoryUploaded || brandUploaded) {
      document.getElementById("add_category").close()
    }
  }, [categoryUploaded, brandUploaded])



  return (
    <>
      <ModalManagement id={"add_category"} hideCancel={true}>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-between mb-6">
            <p className="text-[18px] font-medium ">Add category for {type}</p>
            <div
              onClick={() => document.getElementById("add_category").close()}
              role="button"
            >
              <img src={close} alt="close-icon" className="h-[23px] w-[23px]" />
            </div>
          </div>
          <div className=" mb-[26px]">
            <div className="flex items-center gap-x-[39px] mb-[40px]">
              <div className=" h-[120px] w-[120px] rounded-lg flex items-center justify-center mb-1 rounded-lg border-[#A5A5A5] border-2 border border-dashed bg-[#ededed] ">
                {uploadedImages ? (
                  <img src={uploadedImages?.url} alt="img" />
                ) : (
                  <p className="text-[#A5A5A5] font-medium text-[30px]">{type !== 'brand' ? 'SVG' : 'PNG'}</p>
                )}
              </div>
              <div>
                <div className="relative text-center ">
                  <label className="cursor-pointer block bg-brandPrimary flex justify-center py-4 shadow-lg px-[25px] rounded-full mb-2">
                    <AiOutlinePlus />
                    <p className="text-[12px] font-normal">{type !== 'brand' ? 'Add an icon' : 'Add brand Image'}</p>
                    <input
                      type="file"
                      className="hidden"
                      accept={type !== 'brand' ? '.svg' : '.jpeg, .jpg, .png, .gif'}
                      onChange={(e) => handleFileUpload(e)}
                    // required
                    />
                  </label>
                  <p className="text-[12px] font-medium">
                    {type !== 'brand' ? 'Icon must be in SVG format' : 'Image must be in supported format'}

                  </p>
                  {imageError && <p className="text-[12px] font-medium text-red-500">Please upload category image</p>}
                </div>
              </div>
            </div>
            <div>
              <InputWithFullBoarder
                label={"Category Name"}
                placeholder={"Enter category name"}
                className={"!bg-[#EDEDED] !py-4 !px-[24px]"}
                onChange={(e) => {
                  setName(e.target.value)
                }}
                required
              />
            </div>
            <div>
              <InputWithFullBoarder
                label={"Details"}
                isTextArea
                placeholder={"Enter category details"}
                className={"!bg-[#EDEDED] !py-4 !px-[24px] !h-[120px] w-full !resize-none"}
                onChange={(e) => {
                  setDetails(e.target.value)
                }}
                required
              />
            </div>
            {/* <div>
              <InputWithFullBoarder
                label={"Percentage share"}
                placeholder={"Enter percentage share"}
                className={"!bg-[#EDEDED] !py-4 !px-[24px]"}
              />
            </div>

            <div>
              <InputWithFullBoarder
                label={"Tax percentage"}
                placeholder={"Enter tax percentage"}
                className={"!bg-[#EDEDED] !py-4 !px-[24px]"}
              />
            </div> */}

            <CustomButton
              buttonText={"Proceed"}
              disabled={addingBrandCategory || addingCategory || fileLoading}
              isLoading={addingBrandCategory || addingCategory || fileLoading}
              type={'submit'}
              className={
                "!text-[15px] font-light w-full mt-3 rounded-full mt-[25px] !bg-brandPrimary  !py-[15px]"
              }
            />
          </div>
        </form>

      </ModalManagement>
    </>
  );
};

export default AddCategory;
