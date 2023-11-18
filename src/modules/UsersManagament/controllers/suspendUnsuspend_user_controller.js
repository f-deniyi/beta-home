import useUpdateManager from "../../../constants/controller_templates/put_controller_template";

export const SuspendUnsuspendUserManager = (userId) => {
  const isMultiKey = false;
  const { updateCaller, isLoading, isSuccess, error, data } = useUpdateManager(
    `/user/${userId}/suspend`,
    ["all_users"],
    isMultiKey
  );
  const suspendUnsuspendUserController = async () => {
    try {
      await updateCaller();
    } catch (error) {
      // Handle error if necessary
      console.error("error:", error);
    }
  };
  return {
    suspendUnsuspendUserController,
    data,
    isLoading,
    isSuccess,
    error,
  };
};
