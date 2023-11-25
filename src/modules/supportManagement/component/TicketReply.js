import React, { useState } from "react";
import ModalManagement from "../../../generalComponents/ModalManagement";
import CustomButton from "../../../generalComponents/Button";
import InputWithFullBoarder from "../../../generalComponents/InputWithFullBoarder";
import { close } from "../../../assets/icons";
import { AiOutlinePlus } from "react-icons/ai";
// import { AddPackageManager } from "../controller/add_package_controller";

const ReplyTicket = () => {
    const [count, setCount] = useState(1);
    
    const items = [...Array(count).keys()];
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    // const [packageItems, setPackageItems] = useState([initialItem]);

    const handleSubmit = async (e) => {
        e.preventDefault();

 
    };

    return (
        <>
            <ModalManagement id={"reply_ticket"} hideCancel={true}>
                <div className="flex items-center justify-between mb-6">
                    <p className="text-[18px] font-medium ">Reply</p>
                    <div
                        onClick={() => document.getElementById("reply_ticket").close()}
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
                        <div>
                            <InputWithFullBoarder
                                isTextArea={true}
                                // value={title}

                                onChange={(e) => setTitle(e.target.value)}
                                label={"Description"}
                                placeholder={"Description"}
                                className={"!bg-[#EDEDED] !py-4 !px-[24px] h-[200px]"}
                            />
                        </div>


                        <CustomButton
                            buttonText={"Send"}
                            // isLoading={isLoading}
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

export default ReplyTicket;
