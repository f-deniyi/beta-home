import React, { useState } from "react";
import { authentication, topPattern } from "../../../assets/images";
import InputWithFullBoarder from "../../../generalComponents/InputWithFullBoarder";
import { Link, useNavigate, useLocation } from "react-router-dom";
import AuthenticationBase from "../components/AuthenticationBase";
import useLoginManager from "../controllers/login.controller";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import useAdminLoginManager from "../controllers/adminLoginController";

const LoginPage = () => {
  const navigate = useNavigate();
  let location = useLocation();
  const isAdmin = location.pathname.includes("/admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [viewPassword, setViewPassword] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const { postCaller, data, isSuccess, isLoading, error } =
    useLoginManager(email);

  const { postCaller: AdminPostCaller } = useAdminLoginManager()

  const handleSubmission = async () => {
    const details = {
      id: email,
      password: password,
    };

    //console.log(email);
    //console.log(password);
    if (isAdmin) {
      await AdminPostCaller(details)
    } else {
      await postCaller(details);

    }

    // setEmail("");
    // setPassword("");
    // navigate('/dashboard')
  };
  return (
    <AuthenticationBase
      title={"Login"}
      subtitle={"Enter your correct credentials to gain access. "}
      inputFields={
        <div>
          <InputWithFullBoarder
            label={"Email address"}
            type="text"
            id="email"
            placeholder={"Enter email address"}
            value={email}
            onChange={handleEmailChange}
          />
          <InputWithFullBoarder
            label={"Password"}
            type={viewPassword ? "text" : "password"}
            hasSuffix={true}
            placeholder={"Enter password"}
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
          <div className="w-full flex items-end justify-end">
            <button
              onClick={() => navigate("/forgot-password")}
              className="text-[12px] md:text-[15px] w-full  text-[#979797] text-right mx-auto hover:scale-125 hover:text-blackColor duration-300"
            >
              Forgot Password?
            </button>
          </div>
        </div>
      }
      buttonText={"Login"}
      isLoading={isLoading}
      onClick={handleSubmission}
      afterElements={
        <div className="flex flex-col items-center ">
          <p className="text-[12px] md:text-[15px]  py-5 text-blackColor text-center">
            Don’t have an account?
            <Link to={"/create-account"}>
              <span className="hover:text-blackColor/60 hover:scale-110 duration-300 underline md:ml-3 text-blackColor">
                {"Register"}
              </span>
            </Link>
          </p>


        </div>
      }
    />
  );
};

export default LoginPage;
