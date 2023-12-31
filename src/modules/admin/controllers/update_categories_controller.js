import useUpdateManager from "../../../constants/controller_templates/put_controller_template";

export const UpdateCategoryManager = (categoryId) => {
  const isMultiKey = false;
  const { updateCaller, isLoading, isSuccess, error, data } = useUpdateManager(
    `/categories/${categoryId}`,
    ["product_categories"],
    isMultiKey
  );
  const editCategoryController = async (details) => {
    try {
      await updateCaller(details);
    } catch (error) {
      // Handle error if necessary
      console.error("update error:", error);
    }
  };
  return {
    editCategoryController,
    data,
    isLoading,
    isSuccess,
    error,
  };
};
