import { useMutation, useQueryClient } from "react-query";

import Axios from "../../../constants/api_management/MyHttpHelper";
import { useNavigate } from "react-router-dom";

const useSignupManager = (email) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const signupController = async (details) => {
    try {
      const [response] = [await Axios.post(`/auth/register`, details)];
      //console.log(`i am checking this ${response.data}`);
      return response.data;
    } catch (error) {
      //console.log(error.response.data);
      throw new Error(`${error.response.data.message}`);
    }
  };

  const mutation = useMutation(signupController, {
    onSuccess: async (data) => {
      // Update other caches using useQuery
      navigate(`/account-verification?email=${email}`);
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

export default useSignupManager;
