import usePostManager from "../../../constants/controller_templates/post_controller_template";

export const GenerateInvoicetMutation = () => {
    const { postCaller, isLoading, isSuccess, error, data } = usePostManager(`/invoice/service/generate`, '');
    const generateInvoiceCaller = async (details) => {
        try {
            await postCaller(details);
        } catch (error) {
            // Handle error if necessary
            console.error("fund wallet error:", error);
        }
    };
    return {
        generateInvoiceCaller,
        data,
        isLoading,
        isSuccess,
        error
    };
};