import useUpdateManager from "../../../constants/controller_templates/put_controller_template";
import useDeleteManager from "../../../constants/controller_templates/delete_controller_template";

export const DeletePackageManager = (packageId) => {
  const isMultiKey = false;
  const { deleteCaller, isLoading, isSuccess, error, data } = useDeleteManager(
    `/packages/${packageId}`,
    ["all_packages"],
    isMultiKey
  );
  const deletePackageController = async () => {
    try {
      await deleteCaller();
    } catch (error) {
      // Handle error if necessary
      console.error("delete error:", error);
    }
  };
  return {
    deletePackageController,
    data,
    isLoading,
    isSuccess,
    error,
  };
};
