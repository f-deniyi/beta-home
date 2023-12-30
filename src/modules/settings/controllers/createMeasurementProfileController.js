import { useMutation, useQueryClient } from "react-query";

import AxiosWithToken from "../../../constants/api_management/MyHttpHelperWithToken";

const useCreateMeasurementProfileManager = () => {
  const queryClient = useQueryClient();

  const postController = async (details) => {
    try {
      const [response] = [await AxiosWithToken.post(`/user/update/`, details)];
      //console.log(`i am checking this ${response.status}`);
      return response.data;
    } catch (error) {
      //console.log(error.response.data);
      throw new Error(`Sorry: ${error.response.data.message}`);
    }
  };

  const mutation = useMutation(postController, {
    onSuccess: async (data) => {
      // Update other caches using useQuery
      const updateQueryKeys = ["userDetails"];
      if (updateQueryKeys.length) {
        updateQueryKeys.forEach((key) => queryClient.invalidateQueries(key));
      }
    },
    onError: (error) => {
      // Handle error if necessary
      console.error("Post error:", error);
      throw new Error(`Sorry: ${error.response.data.message}`);
    },
  });

  const postCaller = async (details) => {
    try {
      await mutation.mutateAsync(details);
    } catch (error) {
      // Handle error if necessary
      console.error("Post error:", error);
    }
  };

  return {
    postCaller,
    data: mutation.data,
    isLoading: mutation.isLoading,
    isSuccess: mutation.isSuccess,
    error: mutation.error,
  };
};

export default useCreateMeasurementProfileManager;
