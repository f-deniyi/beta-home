import { useQuery } from "react-query";

import AxiosWithToken from "../../../constants/api_management/MyHttpHelperWithToken";

const useGetCustomerServiceRequests = ({ enabled, filter = "" }) => {
  const query = filter ? `?customer=${filter}` : "";
  console.log(query);
  return useQuery(
    ["customer_service_request", enabled],
    async () => {
      try {
        const [response] = [
          await AxiosWithToken.get(`/service-center/requests/customer${query}`),
        ];
        return response.data;
      } catch (error) {
        console.log(error.response.data);
        throw new Error(`Sorry: ${error.response.data.message}`);
      }
    },
    { enabled: enabled }
  );
  // console.log("provider_service_request", data)
  //   return {
  //     requests: data?.requests ?? [],
  //     isLoading,
  //     pagination: data?.pagination ?? {},
  //   };
};

export default useGetCustomerServiceRequests;
