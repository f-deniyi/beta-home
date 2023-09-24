import { useMutation, useQueryClient } from "react-query";
import Axios from "../../../constants/api_management/MyHttpHelper";

const useSendSupportManager = () => {
  const queryClient = useQueryClient();

  const sendSupportController = async (details) => {
    try {
      const response = await Axios.post(`/support/create`, details);
      console.log(`i am checking this ${response.status}`);
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      throw new Error(`Sorry: ${error.response.data.message}`);
    }
  };

  const mutation = useMutation(sendSupportController, {
    onSuccess: async (data) => {
      // Update other caches using useQuery
      const updateQueryKeys = [];
      if (updateQueryKeys.length) {
        updateQueryKeys.forEach((key) => queryClient.invalidateQueries(key));
      }
    },
    onError: (error) => {
      // Handle error if necessary
      console.error("Post error:", error);
    },
  });

  const sendSupport = async (details) => {
    try {
      await mutation.mutateAsync(details);
    } catch (error) {
      // Handle error if necessary
      console.error("Post error:", error);
    }
  };

  return {
    sendSupport,
    data: mutation.data,
    isLoading: mutation.isLoading,
    isSuccess: mutation.isSuccess,
    error: mutation.error,
  };
};

export default useSendSupportManager;
