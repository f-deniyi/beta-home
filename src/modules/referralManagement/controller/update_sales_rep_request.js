import usePutManager from "../../../constants/controller_templates/put_controller_template";

export const UpdateSalesRepRequestsMutation = () => {
    const { updateCaller, isLoading, isSuccess, error, data } = usePutManager(`/user/sales-rep/request/update`, 'sales_rep');
    const updateSalesRepRequests = async (details) => {
        try {
            await updateCaller(details);
        } catch (error) {
            // Handle error if necessary
            console.error("update requests:", error);
        }
    };
    return {
        updateSalesRepRequests,
        data,
        isLoading,
        isSuccess,
        error
    };
};