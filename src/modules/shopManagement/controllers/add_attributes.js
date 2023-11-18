import usePostManager from "../../../constants/controller_templates/post_controller_template";

export const AddAttributeManager = () => {
    const { postCaller, isLoading, isSuccess, error, data } = usePostManager(
        `/products/attributes`,
        ["shop_attributes"]
    );
    const addAttributeController = async (details) => {
        try {
            await postCaller(details);
        } catch (error) {
            // Handle error if necessary
            console.error("post error:", error);
        }
    };
    return {
        addAttributeController,
        data,
        isLoading,
        isSuccess,
        error,
    };
};
