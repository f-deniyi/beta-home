import { useMutation, useQueryClient } from "react-query";

import Axios from "../../../constants/api_management/MyHttpHelper";
import { useNavigate } from "react-router-dom";

const useAdminVerificationManager = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const resetPasswordController = async (details) => {
    try {
      const [response] = [await Axios.get(`/auth/verify-admin/${details}`)];
      //console.log(`i am checking this ${response.status}`);
      return response.data;
    } catch (error) {
      //console.log(error.response.data);
      throw new Error(`Sorry: ${error.response.data.message}`);
    }
  };

  const mutation = useMutation(resetPasswordController, {
    onSuccess: async (data) => {
      const token = data.data.token;
      localStorage.setItem("beta-vendor-token", token);

      await new Promise((resolve) => {
        // Check for token in localStorage every 100 milliseconds
        const intervalId = setInterval(() => {
          if (localStorage.getItem("beta-vendor-token") === token) {
            clearInterval(intervalId);
            resolve();
          }
        }, 100);
      });
      //console.log(`this is the token ${localStorage.getItem("beta-vendor-token")} `);
      navigate(`/admin/dashboard`);
    },

    onError: (error) => {
      // Handle error if necessary

      console.error("Signup error:", error.message);
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

export default useAdminVerificationManager;
