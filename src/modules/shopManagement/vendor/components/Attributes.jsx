import React, { useEffect, useState } from "react";
import useGetShopsAttributesQuery from "../controller/get_shop_attribute.js";
import useGetUserDetailsManager from "../../../settings/controllers/get_UserDetails_controller";
import useGetShopsQuery from "../../../shopManagement/controllers/get_shops";
import EmptyContent from "../../../../generalComponents/EmptyContent.js";
import AddAttribute from "./AddAttribute.jsx";
import { IoIosClose } from "react-icons/io";
import Loader from "../../../../generalComponents/Loader.jsx";
import CustomButton from "../../../../generalComponents/Button.jsx";
import { close, plusIcon } from "../../../../assets/icons";
import InputWithFullBoarder from "../../../../generalComponents/InputWithFullBoarder.jsx";
import { AddAttributeManager } from "../../controllers/add_attributes.js";
import { toast } from "react-toastify";
import { SketchPicker } from "react-color";
import UpdateAttributeManager from "../../controllers/update_attributes.js";

const Attributes = () => {
  const [title, setTitle] = useState("");
  const [sizeArray, setSizeArray] = useState([]);
  const [sizeValue, setSizeValue] = useState("");
  const [selectedAttId, setSelectedAttId] = useState("");
  const [isColor, setIsColor] = useState(false);
  const { addAttributeController, isLoading, isSuccess } =
    AddAttributeManager();
  useEffect(() => {
    if (isSuccess) {
      setSizeArray([]);
      setTitle("");
      //   document.getElementById("add_attribute").close();
    }
  }, [isSuccess]);
  const {
    data,
    isSuccess: gottenUser,
    isLoading: userLoading,
  } = useGetUserDetailsManager();

  const { editAttributeManager, isLoading: updatingAttribute, isSuccess: attributeUpdated } = UpdateAttributeManager(selectedAttId)

  const handleChangeComplete = (attribute, value, action = 'add') => {
    // if (sizeValue.length > 0) {
    //   setSizeArray((arr) => [...arr, sizeValue]);
    // }
    const data = {
      name: attribute.name,
      values: action === 'add' ? [...attribute.values, value] : attribute.values.filter(el => el !== value)
    }
    console.log(data, attribute)
    editAttributeManager(attribute?._id, data)

  };

  const deleteSize = (size) => {
    const filteredArray = sizeArray.filter((el) => el !== size);
    setSizeArray(filteredArray);
  };

  // useEffect(() => {
  //   if (selectedAttId && sizeArray.length > 0) {
  //     toast.success([...sizeArray]);
  //     addAttributeController({
  //       shop: userShop?.shops[0]?.id,
  //       list: [
  //         {
  //           name: title,
  //           values: sizeArray,
  //         },
  //       ],
  //     });
  //   }
  // }, [sizeArray]);

  const {
    data: userShop,
    isError,
    error,
    isLoading: fetchingShop,
  } = useGetShopsQuery({
    enabled: Boolean(data?.data?.user),
    owner_id: data?.data?.user?.id,
  });

  const { attributes, isLoading: gettingShop } = useGetShopsAttributesQuery({
    enabled: Boolean(userShop?.shops[0]?.id),
    shopId: userShop?.shops[0]?.id,
  });

  if (gettingShop || userLoading) {
    return <Loader />;
  }

  return (
    <div>
      {attributes.length > 0 ? (
        <div>
          {/* <div className="flex flex-col items-start">
            {attributes.map((el, i) => (
              <div key={i} className="flex flex-col items-start justify-start">
                <div className="flex items-center mt-[17px]">
                  <div className="bg-brandYellow w-[17px] h-[17px] min-w-[17px] border border-black rounded-full mr-2"></div>
                  <p className="text-[15px] text-black mr-6">{el.name}</p>
                  <div className="ml-3 flex items-center gap-2">
                    <div className=" flex gap-2">
                      {el.values?.map((el) => (
                        <div className="flex items-center bg-black rounded-full  justify-between">
                          <p className="text-[#f2f2f2] py-[5px] px-[10px]  font-medium">{`${el}`}</p>
                          <div
                            className="cursor-pointer ml-auto pr-2"
                            onClick={() => {
                              //   deleteSize(el);
                            }}
                          >
                            <IoIosClose color="#fff" size={22} />
                          </div>
                        </div>
                      ))}
                    </div>
                    <CustomButton buttonText={`Edit Attributes`} />
                  </div>
                </div>
              </div>
            ))}
          </div> */}
          <div className="w-full lg:w-[70%] mt-10">
            {attributes.map((el, i) => {
              const containsColor = /color|colour/i.test(el.name);

              return (
                <div
                  key={i}
                  className={`mb-[26px] ${i === 0 ? "mt-0" : "mt-14 "}`}
                >
                  <form>
                    <div>
                      <p className="text-[15px] font-semibold mb-4">
                        Name:
                        <span className="font-normal ml-5 capitalize">{el?.name}</span>
                      </p>
                    </div>

                    <div className="flex items-start gap-2 w-full">
                      <p className="font-semibold mt-5">Value: </p>
                      <div className="flex-grow">
                        <div
                          className={`flex items-center bg-[#EDEDED] rounded-md ${containsColor ? "max-w-max" : "w-full"
                            } ml-3`}
                        >
                          {containsColor ? (
                            <SketchPicker
                              color={sizeValue ?? "#FFFFFF"}
                              onChangeComplete={(color) => {
                                setSizeValue(`${color.hex}`);
                                handleChangeComplete(el, color.hex)
                              }}
                            />
                          ) : (
                            <input
                              placeholder="add variable"
                              id="value_field"
                              className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none h-[60px] flex-1 px-4 py-2 bg-transparent focus:border-none hover:border-none focus:outline-none focus:shadow-none appearance-none"
                              onChange={(e) => {
                                setSizeValue(e.target.value);
                                // setSelectedAttId(el._id);
                                // setTitle(el.name);
                                // setSizeArray(el.values);

                                // handleChangeComplete();

                              }}
                            />
                          )}
                          {!containsColor && (
                            <button
                              className="px-5 py-2 bg-brandPrimary text-white rounded-r-md text-[#000] h-[60px]"
                              onClick={(e) => {
                                e.preventDefault();
                                const inputElement =
                                  document.getElementById("value_field");
                                inputElement.value = "";
                                setSelectedAttId(el._id);
                                // setTitle(el.name);

                                // setSizeArray(el.values);
                                handleChangeComplete(el, sizeValue);
                                // setTitle('')
                              }}
                              disabled={sizeValue.length === 0 || updatingAttribute}
                            >
                              <img src={plusIcon} alt="icon" />
                            </button>
                          )}
                        </div>
                        <div className="mt-[17px] ml-3 flex gap-2">
                          {el.values?.map((value) =>
                            containsColor ? (
                              <div
                                key={value}
                                style={{
                                  backgroundColor:
                                    el.values.length > 0 ? value : "black",
                                }}
                                className={`flex items-center justify-center p-1 rounded-full `}
                                onClick={() => {
                                  // deleteSize(value);
                                  // setTitle(el.name);
                                  // setSelectedAttId(el._id);
                                  // setSizeArray(el.values);
                                  handleChangeComplete(el, value, 'remove')

                                }}
                              >
                                <IoIosClose
                                  color={value === "#ffffff" ? "#000" : "#fff"}
                                  size={22}
                                />
                              </div>
                            ) : (
                              <div className="flex items-center bg-black rounded-full  justify-between">
                                <p className="text-[#f2f2f2] py-[5px] px-[10px]  font-medium">{`${value}`}</p>
                                <div
                                  className="cursor-pointer ml-auto pr-2"
                                  onClick={() => {
                                    // deleteSize(value);
                                    // setTitle(el.name);
                                    // setSelectedAttId(el._id);
                                    // setSizeArray(el.values);
                                    handleChangeComplete(el, value, 'remove')
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
                  </form>
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-end w-full">
            <button
              className="bg-brandPrimary py-3 px-4 mt-10 rounded-md"
              onClick={() =>
                document.getElementById("add_attribute").showModal()
              }
            >
              Add New Attribute
            </button>
          </div>
        </div>
      ) : (
        <div>
          <EmptyContent
            content={"Your shop has no attribute"}
            className="w-[200px h-[200px] border border-black border-1 rounded-md"
          />
          <div className="flex items-center justify-center">
            <button
              className="bg-brandPrimary py-3 px-4 mt-4 rounded-md"
              onClick={() =>
                document.getElementById("add_attribute").showModal()
              }
            >
              Create Attribute
            </button>
          </div>
        </div>
      )}

      <AddAttribute shopId={userShop?.shops[0]?.id} />
    </div>
  );
};

export default Attributes;
