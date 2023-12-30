import React, { useEffect, useState } from "react";
import InputWithFullBoarder from "../../../generalComponents/InputWithFullBoarder";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthenticationBase from "../components/AuthenticationBase";
import OtpInput from "react-otp-input";

import useForgotPasswordManager from "../controllers/forgot_password_controller";
import { MdOutlineVisibilityOff, MdOutlineVisibility } from "react-icons/md";
import { toast } from "react-toastify";
import useResetPasswordManager from "../controllers/reset_password_controller copy";

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get("email");
  const [viewPassword, setViewPassword] = useState(false);

  const [password, setPassword] = useState("");

  const handleOTPChange = (event) => {
    setOtp(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const { postCaller, data, isSuccess, isLoading, error } =
    useResetPasswordManager();

  const {
    postCaller: callForgotPassword,
    data: forgotPasswordDate,
    isSuccess: forgotpasswordSuccessful,
    isLoading: forgotPasswordIsLoading,
    error: forgotPasswordError,
  } = useForgotPasswordManager(email, true);

  const handleSubmission = async () => {
    const details = {
      token: otp,
      password: password,
    };

    await postCaller(details);
    //console.log(details);
    setOtp("");
    setPassword("");
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(data.message);
    }
    if (error) {
      toast.error(error.message);
    }
  }, [isSuccess, data, error]);

  useEffect(() => {
    if (forgotpasswordSuccessful) {
      toast.success(forgotPasswordDate.message);
    }
    if (forgotPasswordError) {
      toast.error(forgotPasswordError.message);
    }
  }, [forgotPasswordError, forgotpasswordSuccessful]);

  const resendPassword = async () => {
    const details = {
      email: email,
    };

    await callForgotPassword(details);
  };

  return (
    <AuthenticationBase
      title={"Reset your password"}
      subtitle={`Enter token and password`}
      inputFields={
        <div>
          <label
            className="text-13px md:text-16px font-semibold mb-2"
            htmlFor={"otp"}
          >
            Token
          </label>
          <OtpInput
            containerStyle="w-full items-center justify-start mt-2 flex mb-10"
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
          <InputWithFullBoarder
            label={"Password"}
            type={viewPassword ? "text" : "password"}
            hasSuffix={true}
            icon={
              viewPassword ? (
                <MdOutlineVisibilityOff
                  size={22}
                  onClick={() => setViewPassword(!viewPassword)}
                />
              ) : (
                <MdOutlineVisibility
                  size={22}
                  onClick={() => setViewPassword(!viewPassword)}
                />
              )
            }
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
      }
      buttonText={"Submit"}
      isLoading={isLoading}
      onClick={handleSubmission}
      afterElements={
        <div>
          <p className="text-[14px] mmd:text-[20px] font-semibold text-white text-center mt-10">
            Didn't get an OTP?{" "}
            <strong onClick={resendPassword}>
              {forgotPasswordIsLoading ? " Resending..." : " Resend"}
            </strong>
          </p>
        </div>
      }
    />
  );
};

export default ResetPasswordPage;
