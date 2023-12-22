import usePostManager from "../../../constants/controller_templates/post_controller_template";

export const CreateTicketMutation = () => {
    const { postCaller, isLoading, isSuccess, error, data } = usePostManager('/support/create', 'all_supports');
    const CreateTicketCaller = async (details) => {
        try {
            await postCaller(details);
        } catch (error) {
            // Handle error if necessary
            console.error("fund wallet error:", error);
        }
    };
    return {
        CreateTicketCaller,
        data,
        isLoading,
        isSuccess,
        error
    };
};