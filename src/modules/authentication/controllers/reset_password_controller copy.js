import { useMutation, useQueryClient } from "react-query";

import Axios from "../../../constants/api_management/MyHttpHelper";
import { useNavigate } from "react-router-dom";

const useResetPasswordManager = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const resetPasswordController = async (details) => {
    try {
      const [response] = [await Axios.put(`/auth/password-reset`, details)];
      console.log(`i am checking this ${response.status}`);
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      throw new Error(`Sorry: ${error.response.data.message}`);
    }
  };

  const mutation = useMutation(resetPasswordController, {
    onSuccess: async (data) => {
      // console.log(data);
      // console.log(data.data.token);
      // console.log(localStorage.getItem("token"));
      // Update other caches using useQuery
      navigate(`/login`);
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

export default useResetPasswordManager;
