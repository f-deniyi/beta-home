import useUpdateManager from "../../../constants/controller_templates/put_controller_template";

export const UpdateProfile = () => {
    const { updateCaller, isLoading, isSuccess, error } = useUpdateManager('/user/profile/update', 'userDetails');
    const updateProfileCaller = async (details) => {
        try {
            await updateCaller(details);
        } catch (error) {
            // Handle error if necessary
            console.error("Update error:", error);
        }
    };
    return {
        updateProfileCaller,
        isLoading,
        isSuccess,
        error
    };
};

export const ChangePassword = () => {
    const { updateCaller, isLoading, isSuccess, error } = useUpdateManager('user/profile/reset-password', '');
    const changePasswordCaller = async (details) => {
        try {
            await updateCaller(details);
        } catch (error) {
            // Handle error if necessary
            console.error("Update error:", error);
        }
    };
    return {
        changePasswordCaller,
        isLoading,
        isSuccess,
        error
    };
};