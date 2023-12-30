import { useMutation, useQueryClient } from "react-query";
import AxiosWithToken from "../../../constants/api_management/MyHttpHelperWithToken";
import { useNavigate } from "react-router-dom";

const useDeleteAccountManager = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const deleteController = async () => {
    try {
      const [response] = [await AxiosWithToken.delete(`/user`)];
      //console.log(`i am checking this ${response.status}`);

      return response.data;
    } catch (error) {
      //console.log(error.response.data);
      throw new Error(`Sorry: ${error.response.data.message}`);
    }
  };

  const mutation = useMutation(deleteController, {
    onSuccess: async (data) => {
      // Update other caches using useQuery
      const updateQueryKeys = [];
      if (updateQueryKeys.length) {
        updateQueryKeys.forEach((key) => queryClient.invalidateQueries(key));
      }
      navigate("/login");
    },
    onError: (error) => {
      // Handle error if necessary
      console.error("Delete error:", error);
    },
  });

  const deleteCaller = async () => {
    try {
      await mutation.mutateAsync();
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

export default useDeleteAccountManager;
