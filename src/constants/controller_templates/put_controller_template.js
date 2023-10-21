import { useMutation, useQueryClient } from "react-query";

// import Axios from "../../../constants/api_management/MyHttpHelper";
import AxiosWithToken from "../api_management/MyHttpHelperWithToken";
import { toast } from "react-toastify";

const useUpdateManager = (endpoint, queryKey, isMulti = false) => {
  const queryClient = useQueryClient();

  const updateController = async (data) => {
    try {
      const [response] = [await AxiosWithToken.put(endpoint, data)];
      // console.log(`i am checking this ${response.status}`);
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      throw new Error(`Sorry: ${error.response.data.message}`);
    }
  };

  const mutation = useMutation(updateController, {
    onSuccess: async (data) => {
      // Update other caches using useQuery
      toast.success(data.message);
      const updateQueryKeys = isMulti ? queryKey : [queryKey];
      if (updateQueryKeys.length) {
        updateQueryKeys.forEach((key) => queryClient.invalidateQueries(key));
      }
    },
    onError: (error) => {
      toast.error(error.message);
      // Handle error if necessary
      console.error("Update error:", error);
    },
  });

  const updateCaller = async (details) => {
    try {
      await mutation.mutateAsync(details);
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

export default useUpdateManager;
