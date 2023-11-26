import usePostManager from "../../../constants/controller_templates/post_controller_template";

export const ReplyTicketManager = () => {
  const { postCaller, isLoading, isSuccess, error, data } = usePostManager(
    `/support/tickets/reply`,
    "ticket_messages"
  );
  const replyTicketController = async (details) => {
    try {
      await postCaller(details);
    } catch (error) {
      // Handle error if necessary
      console.error("post error:", error);
    }
  };
  return {
    replyTicketController,
    data,
    isLoading,
    isSuccess,
    error,
  };
};
