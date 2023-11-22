import React, { useState } from "react";
import ModalManagement from "../../../generalComponents/ModalManagement";
import useGetAllCategoriesQuery from "../../shopManagement/controllers/get_all_categories";
import SelectInput from "../../../generalComponents/SelectInput";
import { UpdateShopManager } from "../../shopManagement/vendor/controller/update_shop_controller";
import { close } from "../../../assets/icons";
import CustomButton from "../../../generalComponents/Button";
import useGetAllServiceCategoriesQuery from "../../shopManagement/controllers/get_all_service_categories";

const AddService = () => {
  const shopId = localStorage.getItem("beta-vendor-shop");
  console.log(shopId);
  const { categories } = useGetAllServiceCategoriesQuery({ enabled: true });
  const { isLoading: updating, editPackageController } =
    UpdateShopManager(shopId);

  const [categoryIds, setCategoryIds] = useState([]);

  const handleProfileUpdate = async () => {
    const data = {
      categories: categoryIds,
    };
    editPackageController(data);
  };

  return (
    <ModalManagement id="add_services">
      <div
        style={{
          width: "100%",
        }}
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-[18px] font-medium ">Add Services</p>
            {/* <p className="text-[12px] font-normal ">
                            List of service orders this customer have.
                        </p> */}
          </div>
          <div
            onClick={() => document.getElementById("add_services").close()}
            role="button"
          >
            <img src={close} alt="close-icon" className="h-[23px] w-[23px]" />
          </div>
        </div>
      </div>

      <form className="">
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
          />
          {/* {console.log('shops--->>>',userShop?.shops[0])} */}
        </div>

        <div className="w-full">
          <CustomButton
            isLoading={updating}
            disabled={updating}
            buttonText={"Add Service"}
            className="text-[15px] font-medium w-full !bg-brandPrimary rounded-full !py-4 mt-[30px]"
            onClick={(e) => {
              e.preventDefault();
              handleProfileUpdate();
            }}
          />
        </div>
      </form>
    </ModalManagement>
  );
};

export default AddService;
