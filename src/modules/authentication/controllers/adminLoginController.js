import { useMutation, useQueryClient } from "react-query";

import Axios from "../../../constants/api_management/MyHttpHelper";
import { useNavigate } from "react-router-dom";

const useAdminLoginManager = (email) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  let statusCode = null;
  const loginController = async (details) => {
    try {
      const [response] = [await Axios.post(`/auth/admin/login`, details)];
      //console.log(`i am checking this ${response.status}`);

      return response.data;
    } catch (error) {
      //console.log(error.response.data);
      statusCode = error.response.status;
      throw new Error(`Sorry: ${error.response.data.message}`);
    }
  };

  const mutation = useMutation(loginController, {
    onSuccess: async (data) => {
      // Update other caches using useQuery
      navigate(`/admin/verification?email=${email}`);
    },
    onError: (error) => {
      // Handle error if necessary
      console.error("Signup error:", error);
    },
  });

  const postCaller = async (details) => {
    try {
      await mutation.mutateAsync(details);
    } catch (error) {
      // Handle error if necessary
      console.error("signup error:", error);
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

export default useAdminLoginManager;
