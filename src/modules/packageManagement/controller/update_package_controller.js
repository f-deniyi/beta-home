import useUpdateManager from "../../../constants/controller_templates/put_controller_template";

export const UpdatePackageManager = (packageId) => {
  const isMultiKey = false;
  const { updateCaller, isLoading, isSuccess, error, data } = useUpdateManager(
    `/packages/${packageId}`,
    ["all_packages"],
    isMultiKey
  );
  const editPackageController = async (details) => {
    try {
      await updateCaller(details);
    } catch (error) {
      // Handle error if necessary
      console.error("fund wallet error:", error);
    }
  };
  return {
    editPackageController,
    data,
    isLoading,
    isSuccess,
    error,
  };
};
