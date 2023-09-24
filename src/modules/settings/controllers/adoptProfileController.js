import { useMutation, useQueryClient } from "react-query";

import AxiosWithToken from "../../../constants/api_management/MyHttpHelperWithToken";

const useAdoptProfileManager = () => {
  const queryClient = useQueryClient();

  const updateController = async (profileId) => {
    try {
      const [response] = [
        await AxiosWithToken.put(`/user/profiles/${profileId}/adopt`),
      ];
      console.log(`i am checking this ${response.data}`);
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      throw new Error(`Sorry: ${error.response.data.message}`);
    }
  };

  const mutation = useMutation(updateController, {
    onSuccess: async (data) => {
      // Update other caches using useQuery
      const updateQueryKeys = ["personalMeasurementProfile"];
      if (updateQueryKeys.length) {
        updateQueryKeys.forEach((key) => queryClient.invalidateQueries(key));
      }
    },
    onError: (error) => {
      // Handle error if necessary
      console.error("Update error:", error);
    },
  });

  const updateCaller = async (profileId) => {
    try {
      await mutation.mutateAsync(profileId);
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

export default useAdoptProfileManager;
