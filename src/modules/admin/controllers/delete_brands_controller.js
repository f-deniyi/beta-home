import useUpdateManager from "../../../constants/controller_templates/put_controller_template";
import useDeleteManager from "../../../constants/controller_templates/delete_controller_template";

export const DeleteBrandManager = () => {
  const isMultiKey = false;
  const { deleteCaller, isLoading, isSuccess, error, data } = useDeleteManager(
    `/products/manufacturers`,
    ["brands"]
  );
  const deleteBrandController = async (details) => {
    try {
      await deleteCaller(details);
    } catch (error) {
      // Handle error if necessary
      console.error("delete error:", error);
    }
  };
  return {
    deleteBrandController,
    data,
    isLoading,
    isSuccess,
    error,
  };
};
