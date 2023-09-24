import React, { useState } from "react";
import { authentication, topPattern } from "../../../assets/images";
import InputWithFullBoarder from "../../../generalComponents/InputWithFullBoarder";
import { Link, useNavigate } from "react-router-dom";
import AuthenticationBase from "../components/AuthenticationBase";
import useForgotPasswordManager from "../controllers/forgot_password_controller";

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const { postCaller, data, isSuccess, isLoading, error } =
    useForgotPasswordManager(email);

  const handleSubmission = async () => {
    const details = {
      email: email,
    };

    await postCaller(details);

    setEmail("");
  };
  return (
    <AuthenticationBase
      title={"Forgot your password?"}
      subtitle={"Enter your email registered email address"}
      inputFields={
        <div>
          <InputWithFullBoarder
            label={"Email address"}
            className={"mb-6"}
            type="text"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
          <p className="text-green-600">{isSuccess && `${data.message}`}</p>
          <p className="text-red-700">{error && `${error}`}</p>
        </div>
      }
      buttonText={"Get OTP"}
      isLoading={isLoading}
      onClick={handleSubmission}
    />
  );
};

export default ForgotPasswordPage;
