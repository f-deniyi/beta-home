import React, { useEffect, useState } from "react";
import ModalManagement from "../../../../generalComponents/ModalManagement";
import CustomButton from "../../../../generalComponents/Button";
import InputWithFullBoarder from "../../../../generalComponents/InputWithFullBoarder";
import { close, plusIcon } from "../../../../assets/icons";
import { AiOutlinePlus } from "react-icons/ai";
// import {  } from '../../../../../assets/icons'
import { IoIosClose } from "react-icons/io";
import { AddAttributeManager } from "../../controllers/add_attributes";
import { SketchPicker } from "react-color";
import { toast } from "react-toastify";

const AddAttribute = ({ shopId }) => {
  const [sizeArray, setSizeArray] = useState([]);
  const [count, setCount] = useState(1);
  const [isColor, setIsColor] = useState(false);
  const [sizeValue, setSizeValue] = useState("");
  const { addAttributeController, isLoading, isSuccess } =
    AddAttributeManager();

  const [title, setTitle] = useState("");
  const handleTitleChange = (newTitle) => {
    const containsColor = /color|colour/i.test(newTitle);

    if (containsColor) {
      setIsColor(true);
      setTitle(newTitle);
    } else {
      // Continue with updating the title state
      setTitle(newTitle);
      setIsColor(false);
    }
  };

  useEffect(() => {
    if (isColor) {
      handleChangeComplete();
    }
  }, [sizeValue, isColor]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const details = {
      shop: shopId,
      list: [
        {
          name: title,
          values: sizeArray,
        },
      ],
    };

    console.log(details);
    addAttributeController(details);
  };

  useEffect(() => {
    if (isSuccess) {
      setSizeArray([]);
      setTitle("");
      document.getElementById("add_attribute").close();
    }
  }, [isSuccess]);

  const handleChangeComplete = () => {
    if (sizeValue.length > 0) {
      setSizeArray((arr) => [...arr, sizeValue]);
    }
  };

  const deleteSize = (size) => {
    const filteredArray = sizeArray.filter((el) => el !== size);
    setSizeArray(filteredArray);
  };

  return (
    <>
      <ModalManagement id={"add_attribute"} hideCancel={true}>
        <div className="flex items-center justify-between mb-6">
          <p className="text-[18px] font-medium ">Add attribute</p>
          <div
            onClick={() => document.getElementById("add_attribute").close()}
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
                onChange={(e) => handleTitleChange(e.target.value)}
                label={"Title"}
                placeholder={"Enter attribute title"}
                className={"!bg-[#EDEDED] !py-4 !px-[24px]"}
              />
            </div>

            <div className="flex items-centr gap-2 w-full">
              <p className="font-semibold">Value: </p>
              <div className="flex-grow">
                <div
                  className={`flex items-center bg-[#EDEDED] rounded-md ${
                    isColor ? "max-w-max " : "w-full"
                  } ml-3`}
                >
                  {isColor ? (
                    <SketchPicker
                      color={sizeValue ?? "#FFFFFF"}
                      onChangeComplete={(color) => {
                        setSizeValue(`${color.hex}`);
                      }}
                    />
                  ) : (
                    <input
                      placeholder="value"
                      id="value_field"
                      className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none h-[60px] flex-1 px-4 py-2 bg-transparent focus:border-none hover:border-none focus:outline-none focus:shadow-none appearance-none"
                      onChange={(e) => {
                        setSizeValue(e.target.value);
                      }}
                    />
                  )}
                  {!isColor && (
                    <button
                      className="px-5 py-2 bg-brandPrimary text-white rounded-r-md text-[#000] h-[60px]"
                      onClick={(e) => {
                        e.preventDefault();
                        const inputElement =
                          document.getElementById("value_field");
                        inputElement.value = "";
                        handleChangeComplete();
                        // setTitle('')
                      }}
                    >
                      <img src={plusIcon} alt="icon" />
                    </button>
                  )}
                </div>
                <div className="mt-[17px] ml-3 flex gap-2 w-full lg:w-[400px] overflow-x-scroll scrollbar-hide">
                  {sizeArray?.map((el) =>
                    isColor ? (
                      <div
                        key={el}
                        style={{
                          backgroundColor: sizeArray.length > 0 ? el : "black",
                        }}
                        className={`flex items-center justify-center p-1 rounded-full `}
                        onClick={() => {
                          deleteSize(el);
                        }}
                      >
                        <IoIosClose
                          color={el === "#ffffff" ? "#000" : "#fff"}
                          size={22}
                        />
                      </div>
                    ) : (
                      <div className="flex items-center bg-black rounded-full  justify-between">
                        <p className="text-[#f2f2f2] py-[5px] px-[10px]  font-medium">{`${el}`}</p>
                        <div
                          className="cursor-pointer ml-auto pr-2"
                          onClick={() => {
                            deleteSize(el);
                          }}
                        >
                          <IoIosClose color="#fff" size={22} />
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
            <CustomButton
              buttonText={"Save"}
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

export default AddAttribute;
