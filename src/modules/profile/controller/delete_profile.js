import useDeleteManager from "../../../constants/controller_templates/delete_controller_template";

export const DeleteProfile = () => {
    const { deleteCaller, isLoading, isSuccess, error } = useDeleteManager('/user', '');
    
    const deleteProfileCaller = async (details) => {
        try {
            await deleteCaller(details);
        } catch (error) {
            // Handle error if necessary
            console.error("delete error:", error);
        }
    };
    return {
        deleteProfileCaller,
        isLoading,
        isSuccess,
        error
    };
};
