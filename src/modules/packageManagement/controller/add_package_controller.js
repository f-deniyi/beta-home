import usePostManager from "../../../constants/controller_templates/post_controller_template";

export const AddPackageManager = () => {
  const { postCaller, isLoading, isSuccess, error, data } = usePostManager(
    `/packages`,
    ["all_packages"]
  );
  const addPackageController = async (details) => {
    try {
      await postCaller(details);
    } catch (error) {
      // Handle error if necessary
      console.error("post error:", error);
    }
  };
  return {
    addPackageController,
    data,
    isLoading,
    isSuccess,
    error,
  };
};
