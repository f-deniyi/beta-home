import { useMutation, useQueryClient } from "react-query";

import Axios from "../../../constants/api_management/MyHttpHelper";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useConfirmAccountManager = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const confirmAccountController = async (token) => {
    try {
      const [response] = [await Axios.get(`/auth/verify/${token}`)];
      // console.log(`i am checking this ${response.data.message}`);
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      throw new Error(`${error.response.data.message}`);
    }
  };

  const mutation = useMutation(confirmAccountController, {
    onSuccess: async (data) => {
      localStorage.setItem("token", data.data.token);
      console.log(data.message);
      toast.success(data.message);
      navigate(`/login`);
    },
    onError: (error) => {
      // Handle error if necessary
      console.error("Confirmation error:", error);
    },
  });

  const postCaller = async (details) => {
    try {
      await mutation.mutateAsync(details);
    } catch (error) {
      // Handle error if necessary
      console.error("confirmation error:", error);
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

export default useConfirmAccountManager;
