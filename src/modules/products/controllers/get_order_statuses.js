import { useQuery } from "react-query";

import AxiosWithToken from "../../../constants/api_management/MyHttpHelperWithToken";

const useGetOrderStatusManager = () => {
  return useQuery(["orders_statuses"], async () => {
    try {
      const [response] = [await AxiosWithToken.get(`/order/statuses`)];
      console.log(response.status);
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      throw new Error(`Sorry: ${error.response.data.message}`);
    }
  });

  // console.log(data);
  // return {
  //   statuses: data?.data ?? [],
  //   isSuccess: isSuccess,
  //   isLoading: isLoading,
  // };
};

export default useGetOrderStatusManager;
