import useUpdateManager from "../../../constants/controller_templates/put_controller_template";

export const UpdateOrderStatus = () => {
  const isMultiKey = false;
  const { updateCaller, isLoading, isSuccess, error, data } = useUpdateManager(
    `/order/update`,
    ["orders"],
    isMultiKey
  );
  const updateOrderStatusController = async (details) => {
    try {
      await updateCaller(details);
    } catch (error) {
      // Handle error if necessary
      console.error("error:", error);
    }
  };
  return {
    updateOrderStatusController,
    data,
    isLoading,
    isSuccess,
    error,
  };
};
