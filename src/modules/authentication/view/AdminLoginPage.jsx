import React, { useState } from "react";
import { authentication, topPattern } from "../../../assets/images";
import InputWithFullBoarder from "../../../generalComponents/InputWithFullBoarder";
import { Link, useNavigate } from "react-router-dom";
import AuthenticationBase from "../components/AuthenticationBase";
import useLoginManager from "../controllers/login.controller";
import useAdminLoginManager from "../controllers/adminLoginController";

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const { postCaller, data, isSuccess, isLoading, error } =
    useAdminLoginManager(email);

  const handleSubmission = async () => {
    const details = {
      id: email,
      password: password,
    };

    await postCaller(details);

    setEmail("");
    setPassword("");
  };
  return (
    <AuthenticationBase
      title={"Admin"}
      subtitle={"Securely sign into your Raizon app"}
      inputFields={
        <div>
          <InputWithFullBoarder
            label={"Email address"}
            type="text"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
          <InputWithFullBoarder
            label={"Password"}
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <p className="text-green-600">{isSuccess && `${data.message}`}</p>
          <p className="text-red-700">{error && `${error}`}</p>
        </div>
      }
      buttonText={"Login"}
      isLoading={isLoading}
      onClick={handleSubmission}
    />
  );
};

export default AdminLoginPage;
