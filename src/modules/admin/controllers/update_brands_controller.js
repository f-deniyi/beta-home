import useUpdateManager from "../../../constants/controller_templates/put_controller_template";

export const UpdateBrandManager = (brandId) => {
  const isMultiKey = false;
  const { updateCaller, isLoading, isSuccess, error, data } = useUpdateManager(
    `/products/manufacturers/${brandId}`,
    ["brands"],
    isMultiKey
  );
  const editBrandManager = async (details) => {
    try {
      await updateCaller(details);
    } catch (error) {
      // Handle error if necessary
      console.error("update error:", error);
    }
  };
  return {
    editBrandManager,
    data,
    isLoading,
    isSuccess,
    error,
  };
};
