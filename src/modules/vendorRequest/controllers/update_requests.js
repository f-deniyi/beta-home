import usePutManager from "../../../constants/controller_templates/put_controller_template";

export const UpdateVendorRequestsMutation = () => {
    const { updateCaller, isLoading, isSuccess, error, data } = usePutManager(`/user/vendor/update`, 'vendor-requests');
    const updateVendorRequests = async (details) => {
        try {
            await updateCaller(details);
        } catch (error) {
            // Handle error if necessary
            console.error("verify shop error:", error);
        }
    };
    return {
        updateVendorRequests,
        data,
        isLoading,
        isSuccess,
        error
    };
};