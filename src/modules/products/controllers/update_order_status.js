import useUpdateManager from "../../../constants/controller_templates/put_controller_template";

export const UpdateOrderStatusManager = (categoryId) => {
  const isMultiKey = false;
  const { updateCaller, isLoading, isSuccess, error, data } = useUpdateManager(
    `/order/update`,
    ["product-order-details"],
    isMultiKey
  );
  const editOrderStatusController = async (details) => {
    try {
      await updateCaller(details);
    } catch (error) {
      // Handle error if necessary
      console.error("update error:", error);
    }
  };
  return {
    editOrderStatusController,
    data,
    isLoading,
    isSuccess,
    error,
  };
};
