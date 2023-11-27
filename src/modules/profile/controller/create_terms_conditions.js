import usePostManager from "../../../constants/controller_templates/post_controller_template";

const CreateTermsAndCondtionsManager = () => {
    const { postCaller, isLoading, isSuccess, error, data } = usePostManager(
        `/terms/create`,
        ["terms_and_conditions"]
    );
    const createTermsAndCondtionsController = async (details) => {
        try {
            await postCaller(details);
        } catch (error) {
            // Handle error if necessary
            console.error("post error:", error);
        }
    };
    return {
        createTermsAndCondtionsController,
        data,
        isLoading,
        isSuccess,
        error,
    };
};
export default CreateTermsAndCondtionsManager;