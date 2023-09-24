import { useMutation, useQueryClient } from "react-query";

import Axios from "../../../constants/api_management/MyHttpHelper";
import { useNavigate } from "react-router-dom";

const useForgotPasswordManager = (email, isResend) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const forgotPasswordController = async (details) => {
    try {
      const [response] = [await Axios.post(`auth/password-request`, details)];
      console.log(`i am checking this ${response.status}`);
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      throw new Error(`Sorry: ${error.response.data.message}`);
    }
  };

  const mutation = useMutation(forgotPasswordController, {
    onSuccess: async (data) => {
      // Update other caches using useQuery
      if (!isResend) {
        navigate(`/reset-password?email=${email}`);
      }
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

export default useForgotPasswordManager;
