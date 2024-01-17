import usePostManager from "../../../constants/controller_templates/post_controller_template";

export const AddServiceCategoryManager = () => {
  const { postCaller, isLoading, isSuccess, error, data } = usePostManager(
    `/service-categories`,
    ["service-categories"]
  );
  const addCategoryController = async (details) => {
    try {
      await postCaller(details);
    } catch (error) {
      // Handle error if necessary
      console.error("post error:", error);
    }
  };
  return {
    addCategoryController,
    data,
    isLoading,
    isSuccess,
    error,
  };
};
