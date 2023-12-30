import React, { useEffect, useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthenticationBase from "../components/AuthenticationBase";
import OtpInput from "react-otp-input";
import useConfirmAccountManager from "../controllers/confirm_account_otp_controller";
import useResendAccountVerificationOtpManager from "../controllers/resend_otp_controller";
import { toast } from "react-toastify";

const AccountVerification = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get("email");

  const handleotpChange = (event) => {
    setOtp(event.target.value);
  };

  const { postCaller, data, isSuccess, isLoading, error } =
    useConfirmAccountManager();

  useEffect(() => {
    if (isSuccess) {
      //console.log(
      //   `this is the place i am checking for the feedback ${data.message}`
      // );
      toast.success(data.message);
    }
    if (error) {
      toast.error(error.message);
    }
  }, [isSuccess, data, error, isLoading]);

  const {
    putCaller: callResendOtp,
    data: resendData,
    isSuccess: resendSuccessful,
    isLoading: resendLoading,
    error: resendError,
  } = useResendAccountVerificationOtpManager(email);

  const handleSubmission = async () => {
    await postCaller(otp);

    setOtp("");
  };

  const resendOtp = async () => {
    const details = {
      email: email,
    };

    await callResendOtp(details);
  };

  return (
    <AuthenticationBase
      title={"Verify your account"}
      subtitle={`Email sent to ${email}`}
      inputFields={
        <OtpInput
          containerStyle="w-full items-center justify-center flex mb-10"
          inputStyle={{
            backgroundColor: "#F4F4F4",
            width: 40,
            height: 40,
            borderRadius: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: 1,
            borderColor: "#000000",
          }}
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span className="mr-3"></span>}
          renderInput={(props) => <input {...props} />}
        />
      }
      buttonText={"Verify"}
      isLoading={isLoading}
      onClick={handleSubmission}
      afterElements={
        <div>
          <p className="text-[14px] mmd:text-[20px] font-semibold text-white text-center mt-10">
            Didn't get an OTP?{" "}
            <strong onClick={resendOtp}>
              {resendLoading ? " Resending..." : " Resend OTP"}
            </strong>
          </p>
        </div>
      }
    />
  );
};

export default AccountVerification;
