import { useMutation, useQueryClient } from "react-query";

import Axios from "../../../constants/api_management/MyHttpHelper";
import { useNavigate } from "react-router-dom";

const useResendAccountVerificationOtpManager = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const resetAccountVerificationOtpController = async (details) => {
    try {
      const [response] = [
        await Axios.put(`/auth/resend-verification`, details),
      ];
      //console.log(`i am checking this ${response.status}`);
      return response.data;
    } catch (error) {
      //console.log(error.response.data);
      throw new Error(`Sorry: ${error.response.data.message}`);
    }
  };

  const mutation = useMutation(resetAccountVerificationOtpController, {
    onSuccess: async (data) => {},
    onError: (error) => {
      // Handle error if necessary
      console.error("Resend error:", error);
    },
  });

  const putCaller = async (details) => {
    try {
      await mutation.mutateAsync(details);
    } catch (error) {
      // Handle error if necessary
      console.error("Resend error:", error);
    }
  };

  return {
    putCaller,
    data: mutation.data,
    isLoading: mutation.isLoading,
    isSuccess: mutation.isSuccess,
    error: mutation.error,
  };
};

export default useResendAccountVerificationOtpManager;
