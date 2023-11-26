import usePostManager from "../../../constants/controller_templates/post_controller_template";

export const SendMessageManager = () => {
    const { postCaller, isLoading, isSuccess, error, data } = usePostManager(
        `/chat/send-message`,
        ["channel_messages"]
    );
    const sendMessageController = async (details) => {
        try {
            await postCaller(details);
        } catch (error) {
            // Handle error if necessary
            console.error("post error:", error);
        }
    };
    return {
        sendMessageController,
        data,
        isLoading,
        isSuccess,
        error,
    };
};
