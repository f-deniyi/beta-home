import usePutManager from "../../../constants/controller_templates/put_controller_template";

export const AcceptRequestMutation = (requestId ) => {
    const { updateCaller, isLoading, isSuccess, error, data } = usePutManager(`/service-center/${requestId}/accept`, 'order-details');
    const acceptRequestCaller = async (details) => {
        try {
            await updateCaller(details);
        } catch (error) {
            // Handle error if necessary
            console.error("Accept request error:", error);
        }
    };
    return {
        acceptRequestCaller,
        data,
        isLoading,
        isSuccess,
        error
    };
};

export const RejectRequestMutation = ( requestId ) => {
    const { updateCaller, isLoading, isSuccess, error, data } = usePutManager(`/service-center/${requestId}/reject`, 'order-details');
    const rejectRequestCaller = async () => {
        try {
            await updateCaller();
        } catch (error) {
            // Handle error if necessary
            console.error("Reject request error:", error);
        }
    };
    return {
        rejectRequestCaller,
        data,
        isLoading,
        isSuccess,
        error
    };
};