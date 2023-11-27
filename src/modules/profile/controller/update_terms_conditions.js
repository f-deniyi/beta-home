import useUpdateManager from "../../../constants/controller_templates/put_controller_template";

export const UpdateTermsAndConditions = () => {
    const { updateCaller, isLoading, isSuccess, error } = useUpdateManager('/terms/update', 'terms_and_conditions');
    const updateTermsAndConditionsCaller = async (details) => {
        try {
            await updateCaller(details);
        } catch (error) {
            // Handle error if necessary
            console.error("Update error:", error);
        }
    };
    return {
        updateTermsAndConditionsCaller,
        isLoading,
        isSuccess,
        error
    };
};