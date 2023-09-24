import { useMutation, useQueryClient } from "react-query";
import Axios from "../../../constants/api_management/MyHttpHelper";
import AxiosWithToken from "../api_management/MyHttpHelperWithToken";
import { toast } from "react-toastify";

const useDeleteManager = () => {
  const queryClient = useQueryClient();

  const deleteController = async (details) => {
    try {
      const [response] = [await AxiosWithToken.delete(`endpoint`, details)];
      console.log(`i am checking this ${response.status}`);

      return response.data;
    } catch (error) {
      console.log(error.response.data);
      throw new Error(`Sorry: ${error.response.data.message}`);
    }
  };

  const mutation = useMutation(deleteController, {
    onSuccess: async (data) => {
      // Update other caches using useQuery
      toast.success(data.message);
      const updateQueryKeys = [];
      if (updateQueryKeys.length) {
        updateQueryKeys.forEach((key) => queryClient.invalidateQueries(key));
      }
    },
    onError: (error) => {
      // Handle error if necessary
      toast.error(error.message);
      console.error("Delete error:", error);
    },
  });

  const deleteCaller = async (details) => {
    try {
      await mutation.mutateAsync(details);
    } catch (error) {
      // Handle error if necessary
      console.error("Delete error:", error);
    }
  };

  return {
    deleteCaller,
    data: mutation.data,
    isLoading: mutation.isLoading,
    isSuccess: mutation.isSuccess,
    error: mutation.error,
  };
};

export default useDeleteManager;
