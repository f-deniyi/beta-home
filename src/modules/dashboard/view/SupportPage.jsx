import React, { useEffect, useState } from "react";

import useSendSupportManager from "../controller/send_support_controller";
import HeaderFooter from "../../../generalComponents/HeaderFooter";
import InputWithFullBoarder from "../../../generalComponents/InputWithFullBoarder";
import CustomButton from "../../../generalComponents/Button";
import { toast } from "react-toastify";
import { homeBanner } from "../../../assets/images";

const SupportPage = () => {
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [supportRequest, setSupportRequest] = useState("");

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSupportRequestChange = (event) => {
    setSupportRequest(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Add your submit logic here
    const details = {
      email: email,
      title: subject,
      description: supportRequest,
    };
    await sendSupport(details);
    setEmail("");
    setSubject("");
    setSupportRequest("");
  };

  const { data, sendSupport, isLoading, isSuccess, error } =
    useSendSupportManager();

  useEffect(() => {
    if (isSuccess) {
      toast.success(data.message || " Message submitted successfully!");
    }

    if (error) {
      toast.error(error.message);
    }
  }, [isSuccess, error, data]);
  return (
    <HeaderFooter
      children={
        <div className=" text-blackColor py-4  text-center mx-[40px] my-20">
          <div className="flex flex-wrap mx-auto max-w-[1280px] justify-center items-center">
            <div className="w-full md:w-[50%]">
              <img
                src={homeBanner}
                alt="pattern design "
                className="h-[40vh] md:h-[65vh] object-contain w-full  rounded-lg"
              />
            </div>
            <div className="w-full md:w-[45%] px-4 md:px-0 text-left">
              <h2 className="text-2xl font-bold my-7 mb-10">Support Page</h2>
              <p className="mb-9">
                Please fill out the form and submit to reach the support team.
              </p>
              <form onSubmit={handleSubmit}>
                <InputWithFullBoarder
                  id={"title"}
                  label={"Subject"}
                  type={"text"}
                  value={subject}
                  onChange={handleSubjectChange}
                />
                <InputWithFullBoarder
                  id={"email"}
                  label={"Your Email"}
                  type={"text"}
                  value={email}
                  onChange={handleEmailChange}
                />

                {/* <textarea
                  name="Support Request Detail"
                  id="supportRequest"
                  cols="30"
                  rows="10"
                  value={supportRequest}
                  onChange={handleSupportRequestChange}
                ></textarea> */}

                <InputWithFullBoarder
                  id={"supportRequest"}
                  label={"Support Request Detail"}
                  type={"textarea"}
                  value={supportRequest}
                  rows={6}
                  isTextArea={true}
                  onChange={handleSupportRequestChange}
                  className={"h-[200px]"}
                />

                <CustomButton
                  buttonText={`Submit`}
                  type={"submit"}
                  isLoading={isLoading}
                />
              </form>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default SupportPage;
