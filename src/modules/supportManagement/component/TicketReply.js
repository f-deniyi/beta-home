import React, { useEffect, useState } from "react";
import ModalManagement from "../../../generalComponents/ModalManagement";
import CustomButton from "../../../generalComponents/Button";
import InputWithFullBoarder from "../../../generalComponents/InputWithFullBoarder";
import { close } from "../../../assets/icons";
import { AiOutlinePlus } from "react-icons/ai";
// import { AddPackageManager } from "../controller/add_package_controller";
import useFileUpload from "../../fileupload/fileUploadController";
import { ReplyTicketManager } from "../controller/reply_ticket";

const ReplyTicket = ({ ticketId }) => {
    const [count, setCount] = useState(1);

    const items = [...Array(count).keys()];
    const [message, setMessage] = useState("");
    const [amount, setAmount] = useState("");
    const [uploadedImages, setUploadedImages] = useState([]);
    const { replyTicketController, isLoading, isSuccess } = ReplyTicketManager()

    // const [packageItems, setPackageItems] = useState([initialItem]);
    const {
        error: fileUploadError,
        handleFileUpload: uploadFile,
        isLoading: fileLoading,
        data: uploadUrl,
    } = useFileUpload();



    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const newImage = { url: reader.result, file };
                setUploadedImages([...uploadedImages, newImage]);
            };
            reader.readAsDataURL(file);
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const attachmentsPromises = uploadedImages.length > 0 ? uploadedImages.map(el => uploadFile(el.file)) : []
        const attachments = uploadedImages.length > 0 ? await Promise.all(attachmentsPromises) : []
        const data = {
            "ticket": ticketId,
            "message": message,
            "attachments": attachments
        }
        replyTicketController(data)
    };

    useEffect(() => {
        if (isSuccess) {
            document.getElementById("reply_ticket").close()
        }

    }, [isSuccess])

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
                        {/* <div>
                            <InputWithFullBoarder
                                value={title}
                                onChange={(e) => setMessage(e.target.value)}
                                label={"Title"}
                                placeholder={"Enter title"}
                                className={"!bg-[#EDEDED] !py-4 !px-[24px]"}
                            />
                        </div> */}
                        <div>
                            <InputWithFullBoarder
                                isTextArea={true}
                                // value={title}

                                onChange={(e) => setMessage(e.target.value)}
                                label={"Message"}
                                placeholder={"Message"}
                                className={"!bg-[#EDEDED] !py-4 !px-[24px] h-[200px]"}
                            />
                        </div>
                        <div className="mb-[13px]">
                            <label className="text-[12px] font-medium mb-2">Attachment (Optional)</label>
                            <div className="flex items-center ">
                                <div className="flex items-center w-full px-4 bg-[#f2f2f2] h-[50px] rounded-l-[5px]">

                                    <div className="flex items-center gap-x-[2px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
                                            <path d="M3.85279 9.708C3.09042 9.70664 2.34553 9.47954 1.71208 9.05534C1.07862 8.63115 0.584978 8.02885 0.293415 7.32444C0.00185285 6.62002 -0.0745691 5.84504 0.0737892 5.09724C0.222148 4.34945 0.588641 3.66234 1.12704 3.12258L3.26403 0.969237C3.36596 0.865137 3.50507 0.805793 3.65076 0.80426C3.72289 0.8035 3.79447 0.816957 3.86141 0.843861C3.92834 0.870764 3.98933 0.910589 4.04087 0.96106C4.09241 1.01153 4.13351 1.07166 4.16182 1.13801C4.19013 1.20437 4.20509 1.27565 4.20585 1.34779C4.20661 1.41992 4.19315 1.4915 4.16625 1.55844C4.13934 1.62537 4.09952 1.68635 4.04905 1.7379L1.8957 3.9185C1.37593 4.43828 1.08392 5.14324 1.08392 5.87832C1.08392 6.61339 1.37593 7.31836 1.8957 7.83813C2.41548 8.35791 3.12044 8.64992 3.85552 8.64992C4.59059 8.64992 5.29556 8.35791 5.81534 7.83813L9.32065 4.33282C9.63295 4.02052 9.8084 3.59695 9.8084 3.15529C9.8084 2.71363 9.63295 2.29006 9.32065 1.97777C9.00836 1.66547 8.58479 1.49002 8.14313 1.49002C7.70147 1.49002 7.2779 1.66547 6.9656 1.97777L3.29129 5.62482C3.23912 5.67595 3.19776 5.73705 3.16967 5.80447C3.14157 5.8719 3.12732 5.94429 3.12774 6.01733C3.12658 6.09129 3.14048 6.16471 3.16859 6.23313C3.19671 6.30154 3.23846 6.36352 3.29129 6.41529C3.34222 6.4689 3.40352 6.51159 3.47146 6.54076C3.53941 6.56993 3.61258 6.58497 3.68652 6.58497C3.76046 6.58497 3.83363 6.56993 3.90158 6.54076C3.96953 6.51159 4.03083 6.4689 4.08176 6.41529L7.92507 2.59924C8.02721 2.4977 8.16538 2.44071 8.3094 2.44071C8.45342 2.44071 8.59159 2.4977 8.69373 2.59924C8.74483 2.64992 8.78538 2.71021 8.81306 2.77664C8.84074 2.84307 8.85499 2.91433 8.85499 2.98629C8.85499 3.05826 8.84074 3.12951 8.81306 3.19595C8.78538 3.26238 8.74483 3.32267 8.69373 3.37335L4.87768 7.18941C4.72536 7.34518 4.54347 7.46895 4.34266 7.55345C4.14185 7.63795 3.92619 7.68147 3.70833 7.68147C3.49047 7.68147 3.2748 7.63795 3.074 7.55345C2.87319 7.46895 2.69129 7.34518 2.53898 7.18941C2.38404 7.03718 2.26097 6.85562 2.17697 6.65532C2.09296 6.45502 2.04969 6.23999 2.04969 6.02278C2.04969 5.80558 2.09296 5.59055 2.17697 5.39025C2.26097 5.18995 2.38404 5.00838 2.53898 4.85616L6.2133 1.18185C6.46521 0.908549 6.76977 0.688983 7.10867 0.536333C7.44756 0.383684 7.81382 0.301099 8.18543 0.293539C8.55705 0.285979 8.92636 0.3536 9.27118 0.49234C9.61601 0.63108 9.92924 0.838078 10.1921 1.1009C10.4549 1.36373 10.6619 1.67696 10.8006 2.02179C10.9394 2.36661 11.007 2.73592 10.9994 3.10754C10.9919 3.47915 10.9093 3.8454 10.7566 4.1843C10.604 4.5232 10.3844 4.82775 10.1111 5.07967L6.6058 8.58499C6.24414 8.94514 5.81454 9.22987 5.34195 9.42265C4.86935 9.61543 4.36317 9.71242 3.85279 9.708Z" fill="#8E8E8E" />
                                        </svg>
                                        <p className="text-[#a8a8a8] text-[10px] ">Attach a file</p>
                                    </div>


                                </div>
                                <label className="inline-flex cursor-pointer block bg-brandPrimary flex items-center justify-center p-[11px] rounded-r-[5px]  h-[50px] w-[50px]">
                                    <div className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <path d="M2 16H30M16 2V30" stroke="black" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <input
                                        type="file"
                                        className="hidden"
                                        accept="image/*"
                                        onChange={(e) => handleFileUpload(e)}
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="w-2/5">
                            <p className="mb-[7px] text-[10px] font-normal">System supports JPG, PNG photo file and PDF, DOCX document files</p>
                            <p className=" text-[10px] font-normal">File size shouldn’t exceed 2mb</p>
                        </div>


                        <CustomButton
                            buttonText={"Send"}
                            isLoading={isLoading || fileLoading}
                            disabled={isLoading || fileLoading || !message.length > 0}
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
