import React, { useState } from "react";
import ModalManagement from "../../../generalComponents/ModalManagement";
import CustomButton from "../../../generalComponents/Button";
import InputWithFullBoarder from "../../../generalComponents/InputWithFullBoarder";
import { close } from "../../../assets/icons";
import { AiOutlinePlus } from "react-icons/ai";
import { AddPackageManager } from "../controller/add_package_controller";

const AddCategory = () => {
  const [count, setCount] = useState(1);
  const { addPackageController, isLoading } = AddPackageManager();
  const initialItem = {
    name: "",
    quantity: 1,
  };
  const items = [...Array(count).keys()];
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [packageItems, setPackageItems] = useState([initialItem]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Title:", title);
    console.log("Amount:", amount);
    console.log("Package Items:", packageItems);
    const details = {
      title: title,
      items: packageItems,
      amount: parseInt(amount),
    };
    await addPackageController(details);
    setTitle("");
    setAmount("");
    setPackageItems([initialItem]);
  };

  return (
    <>
      <ModalManagement id={"add_package"} hideCancel={true}>
        <div className="flex items-center justify-between mb-6">
          <p className="text-[18px] font-medium ">Add a Package</p>
          <div
            onClick={() => document.getElementById("add_package").close()}
            role="button"
          >
            <img src={close} alt="close-icon" className="h-[23px] w-[23px]" />
          </div>
        </div>
        <div className=" mb-[26px]">
          <form onSubmit={handleSubmit}>
            <div>
              <InputWithFullBoarder
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                label={"Title"}
                placeholder={"Enter package title"}
                className={"!bg-[#EDEDED] !py-4 !px-[24px]"}
              />
            </div>
            {/* <div>
              <InputWithFullBoarder
                label={"Sub-title"}
                placeholder={"Enter package sub-title"}
                className={"!bg-[#EDEDED] !py-4 !px-[24px]"}
              />
            </div> */}
            <div className="mt-3 mb-6">
              {items.map((el, i) => (
                <div className="ml-[43px]">
                  <div>
                    <InputWithFullBoarder
                      label={`item ${i + 1}`}
                      placeholder={"Enter name"}
                      onChange={(e) => {
                        const updatedItems = [...packageItems];
                        updatedItems[i]["name"] = e.target.value;
                        setPackageItems(updatedItems);
                      }}
                      value={packageItems[i].name}
                      className={"!bg-[#EDEDED] !py-4 !px-[24px]"}
                    />
                  </div>
                  <div>
                    <InputWithFullBoarder
                      label={`No. of item`}
                      value={packageItems[i].quantity}
                      onChange={(e) => {
                        const updatedItems = [...packageItems];
                        updatedItems[i]["quantity"] = e.target.value;
                        setPackageItems(updatedItems);
                      }}
                      placeholder={"Enter number of items"}
                      className={"!bg-[#EDEDED] !py-4 !px-[24px]"}
                    />
                  </div>
                </div>
              ))}
              <div className="flex items-center justify-between">
                <label className="text-13px md:text-16px font-semibold mb-2">
                  items
                </label>
                <button
                  className="bg-brandPrimary flex  py-3 shadow-lg px-[25px] rounded-full "
                  onClick={(e) => {
                    e.preventDefault();
                    setCount((count) => count + 1);
                    setPackageItems([...packageItems, initialItem]);
                  }}
                >
                  {/* <AiOutlinePlus /> */}
                  <p className="text-[12px] font-medium">+Add item</p>
                </button>
              </div>
            </div>

            <div>
              <InputWithFullBoarder
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                label={"Total Amount"}
                placeholder={"Enter package amount"}
                className={"!bg-[#EDEDED] !py-4 !px-[24px]"}
              />
            </div>

            <CustomButton
              buttonText={"Proceed"}
              isLoading={isLoading}
              type="submit"
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
