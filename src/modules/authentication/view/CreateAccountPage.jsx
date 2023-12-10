import React, { useEffect, useState } from "react";

import InputWithFullBoarder from "../../../generalComponents/InputWithFullBoarder";
import { Link, useNavigate } from "react-router-dom";
import AuthenticationBase from "../components/AuthenticationBase";
import useSignupManager from "../controllers/signup_controller";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";

const CreateAccountPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [viewPassword, setViewPassword] = useState(false);

  const { postCaller, data, isSuccess, isLoading, error } =
    useSignupManager(email);

  const handleSubmission = async () => {
    const details = {
      email: email.toLowerCase(),
      password: password,
      username,
      fullname
    };

    await postCaller(details);

    setEmail("");
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

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  return (
    <AuthenticationBase
      title={"Create an account"}
      // subtitle={"Securely create your Raizon account"}
      inputFields={
        <div>
          <InputWithFullBoarder
            label={"Fullname"}
            type="text"
            id="Fullname"
            value={fullname}
            onChange={(e) => {
              setFullname(e.target.value)
            }}
          />
          <InputWithFullBoarder
            label={"Username"}
            type="text"
            id="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value)
            }}
          />
          <InputWithFullBoarder
            label={"Email address"}
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
          {/* <InputWithFullBoarder
            label={"Email address"}
            type="text"
            id="email"
            value={email}
            onChange={handleEmailChange}
          /> */}
          <InputWithFullBoarder
            label={"Password"}
            type={viewPassword ? "text" : "password"}
            hasSuffix={true}
            icon={
              viewPassword ? (
                <AiOutlineEyeInvisible
                  size={22}
                  onClick={() => setViewPassword(!viewPassword)}
                />
              ) : (
                <AiOutlineEye
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
      buttonText={"Sign up"}
      onClick={handleSubmission}
      isLoading={isLoading}
      afterElements={
        <div>
          <p className="text-[14px] md:text-[20px] font-semibold py-5 text-white text-center">
            Already have an account?
            <Link to={"/login"}>
              <span className="hover:text-blackColor/60 hover:scale-110 duration-300 underline md:ml-3 text-blackColor">
                {" "}
                Login
              </span>
            </Link>
          </p>
        </div>
      }
    />
  );
};

export default CreateAccountPage;
