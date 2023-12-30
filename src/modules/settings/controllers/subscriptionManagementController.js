import { useMutation, useQueryClient } from "react-query";

import AxiosWithToken from "../../../constants/api_management/MyHttpHelperWithToken";
import { useParams } from "react-router-dom";

const useSubscriptionManager = (subscriptionId, action) => {
  const queryClient = useQueryClient();

  const { confirmDetails } = useParams();

  const handlePaymentResult = async () => {
    const urlString = confirmDetails;

    const url = new URL(urlString);

    // Get the search params from the URL
    const searchParams = new URLSearchParams(url.search);
    // Get the value of the 'status' parameter
    const status = searchParams.get("status");

    // Get the value of the 'tx_ref' parameter
    const txRef = searchParams.get("tx_ref");

    // Get the value of the 'transaction_id' parameter
    const transactionId = searchParams.get("transaction_id");
    try {
      const confirmationResponse = await AxiosWithToken.get(
        `/wallet/confirmation?status=${status}&tx_ref=${txRef}&transaction_id=${transactionId}`
      );
      //console.log(`i am checking this ${confirmationResponse.status}`);
      return confirmationResponse.data;
    } catch (error) {
      //console.log(error.confirmationResponse.data);
      throw new Error(`Sorry: ${error.confirmationResponse.data.message}`);
    }
    // Call the confirmTransaction function
  };

  const updateController = async (details) => {
    //console.log(`subscriptionId:${subscriptionId}`);
    //console.log(`action:${action}`);

    try {
      if (action === "cancel") {
        const [response] = [
          await AxiosWithToken.put(`/subscription/${subscriptionId}/${action}`),
        ];
        //console.log(`i am checking this ${response.data}`);
        return response.data;
      } else {
        const [response] = [
          await AxiosWithToken.put(
            `/subscription/${subscriptionId}/${action}`,
            details
          ),
        ];
        //console.log(`i am checking this ${response.data.data.checkoutUrl}`);

        const checkoutUrl = response.data.data.checkoutUrl;

        const cleanup = () => {
          window.removeEventListener("message", handlePaymentResult);
        };

        window.addEventListener("message", handlePaymentResult);
        // Redirect the user to the checkoutUrl
        window.location.href = checkoutUrl;

        return cleanup;
      }
    } catch (error) {
      //console.log(error.response.data);
      throw new Error(`Sorry: ${error.response.data.message}`);
    }
  };

  const mutation = useMutation(updateController, {
    onSuccess: async (data) => {
      // Update other caches using useQuery
      const updateQueryKeys = ["userSubscription"];
      if (updateQueryKeys.length) {
        updateQueryKeys.forEach((key) => queryClient.invalidateQueries(key));
      }
    },
    onError: (error) => {
      // Handle error if necessary
      console.error("Update error:", error);
    },
  });

  const updateCaller = async (details) => {
    try {
      await mutation.mutateAsync(details);
    } catch (error) {
      // Handle error if necessary
      console.error("Update error:", error);
    }
  };

  return {
    updateCaller,
    data: mutation.data,
    isLoading: mutation.isLoading,
    isSuccess: mutation.isSuccess,
    error: mutation.error,
  };
};

export default useSubscriptionManager;
