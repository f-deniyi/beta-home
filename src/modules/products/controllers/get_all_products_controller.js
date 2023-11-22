import { useQuery } from "react-query";

import AxiosWithToken from "../../../constants/api_management/MyHttpHelperWithToken";

const useGetAllProductsManager = ({ enabled, ...params }) => {
  // const query = filter ? `?customer=${filter}` : "";
  // console.log(query);
  return useQuery(
    ["all_products", enabled, params.page, params.categories],
    async () => {
      try {
        const [response] = [await AxiosWithToken.get(`/products`, { params })];
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

export default useGetAllProductsManager;
