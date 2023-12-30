import React, { useEffect, useState } from "react";
import useUpdatePasswordManager from "../controllers/updatePasswordController";
import InputWithFullBoarder from "../../../generalComponents/InputWithFullBoarder";
import CustomButton from "../../../generalComponents/Button";
import { MdOutlineVisibilityOff, MdOutlineVisibility } from "react-icons/md";
import { toast } from "react-toastify";

const UpdatePasswordComponent = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [viewPassword, setViewPassword] = useState(false);
  const { data, isLoading, isError, error, isSuccess, updateCaller } =
    useUpdatePasswordManager();

  const handlePasswordUpdate = async () => {
    if (currentPassword === newPassword) {
      // Display a message that new password is the same as the current password
      //console.log("New password is the same as the current password.");
      return;
    }

    const details = {
      old_password: currentPassword,
      new_password: newPassword,
    };
    await updateCaller(details);
  };
  useEffect(() => {
    if (isSuccess) {
      toast.success(data.message);
    }
    if (isError) {
      toast.error(error.message);
    }
  }, [isSuccess, data, isError, error]);
  return (
    <div className="rounded-[20px] max-w-full md:w-[40%]  mr-7 p-5 py-10 bg-lightGrey/20  overflow-y-auto scrollbar-hide">
      <p className="text-18px mb-10 font-bold">Password Management</p>

      <InputWithFullBoarder
        label={"Current Password"}
        value={currentPassword}
        id={"currentPassword"}
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
        type={viewPassword ? "text" : "password"}
        hasSuffix={true}
        onChange={(e) => setCurrentPassword(e.target.value)}
      />

      <InputWithFullBoarder
        label={"New Password"}
        type={viewPassword ? "text" : "password"}
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
        hasSuffix={true}
        value={newPassword}
        id={"newPassword"}
        onChange={(e) => {
          setNewPassword(e.target.value);
        }}
      />

      <CustomButton
        isLoading={isLoading}
        onClick={handlePasswordUpdate}
        buttonText={"Update Profile"}
        className={"mr-5"}
      />
    </div>
  );
};

export default UpdatePasswordComponent;
