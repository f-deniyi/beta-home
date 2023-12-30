import React, { useEffect, useState } from "react";
import ModalManagement from "../../../generalComponents/ModalManagement";
import CustomButton from "../../../generalComponents/Button";
import InputWithFullBoarder from "../../../generalComponents/InputWithFullBoarder";
import { close } from "../../../assets/icons";
import { AiOutlinePlus } from "react-icons/ai";
import useFileUpload from "../../fileupload/fileUploadController";
import { AddCategoryManager } from "../controllers/add_category_controller";
import { brand } from "../../../assets/icons";
import { UpdateBrandManager } from "../controllers/update_brands_controller";
import { UpdateCategoryManager } from "../controllers/update_categories_controller";

const EditCategory = ({ type, categoryDetails }) => {
    const { isLoading: editingBrandCategory, isSuccess: brandUpdated, editBrandManager } = UpdateBrandManager(categoryDetails?._id)
    const { isLoading: editngCategory, isSuccess: categoryUpdated, editCategoryController } = UpdateCategoryManager(categoryDetails?._id)

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
    // const [parent, setParent] = useState(null);
    const [details, setDetails] = useState("");
    // const [group, setGroup] = useState("");
    // const [imageError, setImageError] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            name: name ? name : categoryDetails?.name,
            icon: type !== 'brand' ? uploadedImages ? await uploadFile(uploadedImages.file) : categoryDetails?.icon : '',
            image: {
                original: type !== 'brand' ? uploadedImages ? await uploadFile(uploadedImages.file) : categoryDetails?.image?.original : '',
                thumbnail: type !== 'brand' ? uploadedImages ? await uploadFile(uploadedImages.file) : categoryDetails?.thumbnail?.original : '',
            },
            details: details ? details : categoryDetails?.details,
        }
        type === 'brand' ? editBrandManager(data) : editCategoryController(data)
        // //console.log(data)
    };

    useEffect(() => {
        if (categoryUpdated || brandUpdated) {
            document.getElementById("edit_category").close()
            document.getElementById("category_details").close()
        }
    }, [categoryUpdated, brandUpdated])



    return (
        <>
            <ModalManagement id={"edit_category"} hideCancel={true}>
                {
                    categoryDetails ? <form onSubmit={handleSubmit}>
                        <div className="flex items-center justify-between mb-6">
                            <p className="text-[18px] font-medium ">Add category for {type}</p>
                            <div
                                onClick={() => document.getElementById("edit_category").close()}
                                role="button"
                            >
                                <img src={close} alt="close-icon" className="h-[23px] w-[23px]" />
                            </div>
                        </div>
                        <div className=" mb-[26px]">
                            <div className="flex items-center gap-x-[39px] mb-[40px]">
                                {
                                    uploadedImages ? <div className=" h-[120px] w-[120px] rounded-lg flex items-center justify-center mb-1 rounded-lg border-[#A5A5A5] border-2 border border-dashed bg-[#ededed] ">
                                        {uploadedImages ? (
                                            <img src={uploadedImages?.url} alt="img" />
                                        ) : (
                                            <p className="text-[#A5A5A5] font-medium text-[30px]">{type !== 'brand' ? 'SVG' : 'PNG'}</p>
                                        )}
                                    </div> :
                                        <div
                                            className={`${type !== "brand"
                                                ? "bg-brandPrimary"
                                                : "bg-white border border-1 border-[#828282] border-solid "
                                                } h-[124px] w-[124px] flex justify-center items-center mb-[15px] rounded-lg`}
                                        >
                                            <img
                                                src={type === "brand" ? categoryDetails?.image?.original ?? brand : categoryDetails?.icon}
                                                alt={categoryDetails?.name}
                                                className="object-cover"
                                            />
                                        </div>
                                }
                                <div>
                                    <div className="relative text-center ">
                                        <label className="cursor-pointer block bg-brandPrimary flex justify-center py-4 shadow-lg px-[25px] rounded-full mb-2">
                                            <AiOutlinePlus />
                                            <p className="text-[12px] font-normal">{type !== 'brand' ? 'Change icon' : 'Change brand Image'}</p>
                                            <input
                                                type="file"
                                                className="hidden"
                                                accept={type !== 'brand' ? '.svg' : '.jpeg, .jpg, .png, .gif'}
                                                onChange={(e) => handleFileUpload(e)}
                                            // 
                                            />
                                        </label>
                                        <p className="text-[12px] font-medium">
                                            {type !== 'brand' ? 'Icon must be in SVG format' : 'Image must be in supported format'}

                                        </p>
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
                                    defaultValue={categoryDetails?.name}

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
                                    defaultValue={categoryDetails?.details}

                                />
                            </div>
                            <CustomButton
                                buttonText={"Proceed"}
                                disabled={editingBrandCategory || editngCategory}
                                isLoading={editingBrandCategory || editngCategory}
                                type={'submit'}
                                className={
                                    "!text-[15px] font-light w-full mt-3 rounded-full mt-[25px] !bg-brandPrimary  !py-[15px]"
                                }
                            />
                        </div>
                    </form> : null
                }


            </ModalManagement>
        </>
    );
};

export default EditCategory;
