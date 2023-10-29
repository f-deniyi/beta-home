import { useMutation, useQueryClient } from "react-query";

import Axios from "../../../constants/api_management/MyHttpHelper";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useLoginManager = (email) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  let statusCode = null;
  const loginController = async (details) => {
    try {
      const [response] = [await Axios.post(`/auth/login`, details)];
      console.log(`i am checking this ${response.status}`);

      return response.data;
    } catch (error) {
      console.log(error.response.data);
      statusCode = error.response.status;
      throw new Error(`${error.response.data.message}`);
    }
  };

  const mutation = useMutation(loginController, {
    onSuccess: async (data) => {
      const token = data.data.token;
      const hasShop = data.data.user.shops.length > 0;
      if (hasShop) {
        localStorage.setItem("beta-vendor-shop", data.data.user.shops[0]);
      }
      localStorage.setItem("beta-vendor-token", token);
      toast.success(data.message);
      await new Promise((resolve) => {
        // Check for token in localStorage every 100 milliseconds
        const intervalId = setInterval(() => {
          if (localStorage.getItem("beta-vendor-token") === token) {
            clearInterval(intervalId);
            resolve();
          }
        }, 100);
      });
      console.log(
        `this is the token ${localStorage.getItem("beta-vendor-token")} `
      );
      navigate(`/dashboard`);
    },

    onError: (error) => {
      // Handle error if necessary
      toast.error(error.message);
      console.log(`this is the status code for error: ${statusCode}`);
      if (statusCode === 402) {
        navigate(`/account-verification?email=${email}`);
      }
      console.error("Login error:", error.message);
    },
  });

  const postCaller = async (details) => {
    try {
      await mutation.mutateAsync(details);
    } catch (error) {
      // Handle error if necessary
      console.error("Login error:", error);
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

export default useLoginManager;
