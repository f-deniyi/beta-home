import { useQuery } from "react-query";

import AxiosWithToken from "../../../constants/api_management/MyHttpHelperWithToken";

const useGetProductOrdersManager = ({ filter = "", enable, ...params }) => {
  // const query = filter ? `?customer=${filter}` : "";
  // //console.log(query);
  return useQuery(
    ["orders", params?.status],
    async () => {
      try {
        const [response] = [await AxiosWithToken.get(`/order/all`, { params })];
        //console.log(response.status);
        return response.data;
      } catch (error) {
        //console.log(error.response.data);
        throw new Error(`Sorry: ${error.response.data.message}`);
      }
    },
    { enabled: enable }
  );

  // //console.log(data);
  // return {
  //   orders: data.orders,
  //   pagination: data?.pagination ?? {},
  //   refetch: refetch,
  //   isLoading: isLoading,
  // };
};

export default useGetProductOrdersManager;
