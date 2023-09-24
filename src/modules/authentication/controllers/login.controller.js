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
      localStorage.setItem("token", token);
      toast.success(data.message);
      await new Promise((resolve) => {
        // Check for token in localStorage every 100 milliseconds
        const intervalId = setInterval(() => {
          if (localStorage.getItem("token") === token) {
            clearInterval(intervalId);
            resolve();
          }
        }, 100);
      });
      console.log(`this is the token ${localStorage.getItem("token")} `);
      navigate(
        data.data.user.role.name === "admin"
          ? `/admin/dashboard`
          : data.data.user.fullname === "" ||
            data.data.user.sex === "" ||
            data.data.user.phone === ""
          ? `/dashboard/settings`
          : `/dashboard`
      );
    },

    onError: (error) => {
      // Handle error if necessary
      toast.success(error.message);
      console.log(`this is the status code for error: ${statusCode}`);
      if (statusCode === 402) {
        navigate(`/registration-confirmation?email=${email}`);
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
