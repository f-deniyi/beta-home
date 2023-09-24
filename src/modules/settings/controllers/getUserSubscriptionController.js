import { useQuery } from "react-query";

import AxiosWithToken from "../../../constants/api_management/MyHttpHelperWithToken";

const useGetUserSubscriptionManager = () => {
  return useQuery(["userSubscription"], async () => {
    try {
      const [response] = [await AxiosWithToken.get(`/subscription`)];
      console.log(`this is the current subscription status ${response.status}`);
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      throw new Error(`Sorry: ${error.response.data.message}`);
    }
  });
};

export default useGetUserSubscriptionManager;
