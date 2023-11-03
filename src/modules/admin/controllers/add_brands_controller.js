import usePostManager from "../../../constants/controller_templates/post_controller_template";

export const AddBrandsManager = () => {
  const { postCaller, isLoading, isSuccess, error, data } = usePostManager(
    `/products/manufacturers`,
    "brands"
  );
  const addBrandController = async (details) => {
    try {
      await postCaller(details);
    } catch (error) {
      // Handle error if necessary
      console.error("post error:", error);
    }
  };
  return {
    addBrandController,
    data,
    isLoading,
    isSuccess,
    error,
  };
};
