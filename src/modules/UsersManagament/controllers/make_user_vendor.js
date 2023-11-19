import useUpdateManager from "../../../constants/controller_templates/put_controller_template";

export const MakeUserVendorManager = (userId) => {
  const isMultiKey = false;
  const { updateCaller, isLoading, isSuccess, error, data } = useUpdateManager(
    `/user/${userId}/vendor`,
    ["all_users"],
    isMultiKey
  );
  const makeUserVendorController = async (details) => {
    try {
      await updateCaller(details);
    } catch (error) {
      // Handle error if necessary
      console.error("error:", error);
    }
  };
  return {
    makeUserVendorController,
    data,
    isLoading,
    isSuccess,
    error,
  };
};
