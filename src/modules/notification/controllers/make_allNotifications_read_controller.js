import { useMutation, useQueryClient } from "react-query";

import AxiosWithToken from "../../../constants/api_management/MyHttpHelperWithToken";

const useMarkAllNotificationManager = () => {
  const queryClient = useQueryClient();

  const updateController = async () => {
    try {
      const response = await AxiosWithToken.put(`/notification/open/all`);
      console.log(`i am checking this ${response.status}`);
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      throw new Error(`Sorry: ${error.response.data.message}`);
    }
  };

  const mutation = useMutation(updateController, {
    onSuccess: async (data) => {
      // Update other caches using useQuery

      const updateQueryKeys = ["allNotifications"];
      if (updateQueryKeys.length > 0) {
        updateQueryKeys.forEach((key) => queryClient.invalidateQueries(key));
      }
    },
    onError: (error) => {
      // Handle error if necessary
      console.error("Update error:", error);
    },
  });

  const updateCaller = async () => {
    try {
      await mutation.mutateAsync();
    } catch (error) {
      // Handle error if necessary
      console.error("Update error:", error);
    }
  };

  return {
    updateCaller,
    data: mutation.data,
    isLoading: mutation.isLoading,
    isSuccess: mutation.isSuccess,
    error: mutation.error,
  };
};

export default useMarkAllNotificationManager;
