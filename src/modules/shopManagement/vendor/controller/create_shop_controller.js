import usePostManager from "../../../../constants/controller_templates/post_controller_template";

export const CreateShopManager = () => {
  const { postCaller, isLoading, isSuccess, error, data } = usePostManager(
    `/shops`,
    ["all_shop"]
  );
  const createShopController = async (details) => {
    try {
      await postCaller(details);
    } catch (error) {
      // Handle error if necessary
      console.error("post error:", error);
    }
  };
  return {
    createShopController,
    data,
    isLoading,
    isSuccess,
    error,
  };
};
