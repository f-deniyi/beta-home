import React, { useState, useEffect } from "react";
import ModalManagement from "../../../generalComponents/ModalManagement";
import { close, user, productCategory, brand } from "../../../assets/icons";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import CustomButton from "../../../generalComponents/Button";
// import ProductOrders from "../../products/view/orders";
// import ServicesOrder from "../../services/components/ServicesOrder";
import EditCategory from "./EditCategory";
import { DeleteCategoryManager } from '../controllers/delete_category_controller'
import { DeleteBrandManager } from '../controllers/delete_brands_controller'
import { DeleteServiceCategoryManager } from "../controllers/delete_servicecategory_controller";


const CategoryDetails = ({
  // type,
  icon, image = productCategory, name, details, category }) => {
  const categoryIds = [
    category?._id
  ]
  const { deletePackageController, isLoading: deletingCategory, isSuccess: deletedCategory } = DeleteCategoryManager()
  const { deleteBrandController, isLoading: deletingBrandCategory, isSuccess: deletedBrandCategory } = DeleteBrandManager()
  const { deletePackageController: deleteServicePackage, isLoading, isSuccess } = DeleteServiceCategoryManager()

  const handleCategoryDelete = () => {
    const data = categoryIds
    type === 'brand' ? deleteBrandController(data) : type === 'service' ? deleteServicePackage(data) : deletePackageController(data)
  }

  useEffect(() => {
    if (deletedCategory || deletedBrandCategory || isSuccess) {
      document.getElementById("category_details").close()
    }
  }, [deletedCategory, deletedBrandCategory, isSuccess])

  const [type, setCategoryType] = useState('')

  useEffect(() => {
    if (category) {
      'product_count' in category ? setCategoryType('product') : 'is_service' in category ? setCategoryType('service') : setCategoryType('brand')
    }

  }, [category])
  return (
    <>
      <ModalManagement id={"category_details"} hideCancel={true}>
        <div className="flex items-center justify-between mb-6">
          <p className="text-[18px] font-medium "><span className="capitalize">{type}</span> Category</p>
          <div
            onClick={() => document.getElementById("category_details").close()}
            role="button"
          >
            <img src={close} alt="close-icon" className="h-[23px] w-[23px]" />
          </div>
        </div>
        <div className=" mb-[26px]">
          <div className="flex itens-center justify-center">
            <div className="mb-[10px]">
              <div
                className={`${type !== "brand"
                  ? "bg-brandPrimary"
                  : "bg-white border border-1 border-[#828282] border-solid "
                  } h-[124px] w-[124px] flex justify-center items-center mb-[15px] rounded-lg`}
              >
                <img
                  src={type === "brand" ? image ?? brand : icon}
                  alt={name}
                  className={type === "brand" ? "object-cover h-full w-full" : "object-cover "}
                />
              </div>
            </div>
          </div>
          <h3 className="text-[30px] font-semibold text-center">{name}</h3>
          <p className="text-[20px] font-normal text-center cpitalize">{details ?? ""}</p>
        </div>

        {/* <div className="mb-[17.5px] ">
          <div className="flex w-full">
            <div className="grid  flex-grow text-center">
              <p className="mb-0 text-[#696969] text-[15px] font-medium">
                Percentage Shares
              </p>
              <h3 className="text-[29px] font-semibold ">5%</h3>
            </div>
            <div className="divider divider-horizontal w-[0.3px] bg-[#A5A5A5]" />
            <div className="grid  flex-grow text-center">
              <p className="mb-0 text-[#696969] text-[15px] font-medium">
                Tax Percentage
              </p>
              <h3 className="text-[29px] font-semibold ">2%</h3>
            </div>
          </div>
        </div> */}

        <div className="flex gap-x-2 mb-4">
          <CustomButton
            buttonText={"Edit Category"}
            className={
              "!text-[15px] font-light w-full mt-3 rounded-full mt-[25px] !bg-brandprimary !py-[15px]"

            }
            onClick={() => {
              // console.log('-->>type<<----', type)

              document.getElementById("edit_category").showModal()
            }}
          />
          <CustomButton
            buttonText={"Delete Category"}
            className={
              "!text-[15px] font-light w-full mt-3 rounded-full mt-[25px] !bg-brandRed text-white !py-[15px]"
            }
            disabled={deletingCategory || deletingBrandCategory || isLoading}
            onClick={() => {
              handleCategoryDelete()
            }}
          />
        </div>
      </ModalManagement>
      <EditCategory
        categoryDetails={category}
        type={type}

      />
    </>
  );
};

export default CategoryDetails;
