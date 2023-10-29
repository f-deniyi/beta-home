import React, { useState } from "react";
import ModalManagement from "../../../generalComponents/ModalManagement";
import CustomButton from "../../../generalComponents/Button";
import InputWithFullBoarder from "../../../generalComponents/InputWithFullBoarder";
import { close } from "../../../assets/icons";
import { AiOutlinePlus } from "react-icons/ai";
import useFileUpload from "../../fileupload/fileUploadController";

const AddCategory = ({ type }) => {
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

  const handleSubmit = async () => {
    const galleryPromises = uploadedImages.map((el) => uploadFile(el.file));
    const galleries = await Promise.all(galleryPromises);
    console.log(galleries);
    const data = {
      name: name,
      icon: galleries,
      image: {
        original: "",
        thumbnail: "",
      },
      details: details,
      parent: parent,
      type: group,
    };
    // console.log(data)
  };

  return (
    <>
      <ModalManagement id={"add_category"} hideCancel={true}>
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
                <img src={uploadedImages} alt="img" />
              ) : (
                <p className="text-[#A5A5A5] font-medium text-[30px]">SVG</p>
              )}
            </div>
            <div>
              <div className="relative text-center ">
                <label className="cursor-pointer block bg-brandPrimary flex justify-center py-4 shadow-lg px-[25px] rounded-full mb-2">
                  <AiOutlinePlus />
                  <p className="text-[12px] font-normal">Add an icon</p>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e)}
                  />
                </label>
                <p className="text-[12px] font-medium">
                  Icon must be in SVG format
                </p>
              </div>
            </div>
          </div>

          <form>
            <div>
              <InputWithFullBoarder
                label={"Category Name"}
                placeholder={"Enter category name"}
                className={"!bg-[#EDEDED] !py-4 !px-[24px]"}
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
              className={
                "!text-[15px] font-light w-full mt-3 rounded-full mt-[25px] !bg-brandPrimary  !py-[15px]"
              }
            />
          </form>
        </div>
      </ModalManagement>
    </>
  );
};

export default AddCategory;
