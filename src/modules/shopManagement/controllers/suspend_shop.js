import usePutManager from "../../../constants/controller_templates/put_controller_template";

export const SuspendShopManager = ({ shopId }) => {
  const { updateCaller, isLoading, isSuccess, error, data } = usePutManager(
    `/shops/${shopId}/suspend`,
    "shop-details"
  );
  const suspendShop = async () => {
    try {
      await updateCaller();
    } catch (error) {
      // Handle error if necessary
      console.error("suspend shop error:", error);
    }
  };
  return {
    suspendShop,
    data,
    isLoading,
    isSuccess,
    error,
  };
};
