import useDeleteManager from "../../../constants/controller_templates/delete_controller_template";
export const DeleteUserManager = (userId) => {
  const isMultiKey = false;
  const { deleteCaller, isLoading, isSuccess, error, data } = useDeleteManager(
    `/user/${userId}`,
    ["all_users"],
    isMultiKey
  );
  const deleteUserController = async () => {
    try {
      await deleteCaller();
    } catch (error) {
      // Handle error if necessary
      console.error("delete error:", error);
    }
  };
  return {
    deleteUserController,
    data,
    isLoading,
    isSuccess,
    error,
  };
};
