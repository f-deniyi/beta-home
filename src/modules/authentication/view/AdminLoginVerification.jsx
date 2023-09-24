import React, { useState } from "react";
import InputWithFullBoarder from "../../../generalComponents/InputWithFullBoarder";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthenticationBase from "../components/AuthenticationBase";
import OtpInput from "react-otp-input";
import useResetPasswordManager from "../controllers/adminVerificationController";
import useForgotPasswordManager from "../controllers/forgot_password_controller";
import useAdminVerificationManager from "../controllers/adminVerificationController";

const AdminLoginVerification = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get("email");

  const [password, setPassword] = useState("");

  const handleOTPChange = (event) => {
    setOtp(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const { postCaller, data, isSuccess, isLoading, error } =
    useAdminVerificationManager();

  const handleSubmission = async () => {
    await postCaller(otp);

    setOtp("");
    setPassword("");
  };

  return (
    <AuthenticationBase
      title={"Admin Verification"}
      subtitle={`Kindly verify your credentials`}
      inputFields={
        <div>
          <label
            className="text-13px md:text-16px font-semibold mb-2"
            htmlFor={"otp"}
          >
            Token
          </label>
          <OtpInput
            containerStyle="w-full items-center justify-center mt-2 flex mb-10"
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

          <p className="text-red-700">{error && `${error}`}</p>
        </div>
      }
      buttonText={"Submit"}
      isLoading={isLoading}
      onClick={handleSubmission}
    />
  );
};

export default AdminLoginVerification;
