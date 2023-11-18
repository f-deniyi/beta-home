import useUpdateManager from "../../../../constants/controller_templates/put_controller_template";

export const UpdateShopManager = (shopId) => {
  const isMultiKey = true;
  const { updateCaller, isLoading, isSuccess, error, data } = useUpdateManager(
    `/shops/${shopId}`,
    ["all_shops", "shop-details"],
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
