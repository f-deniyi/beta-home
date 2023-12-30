import { useQuery } from "react-query";

import AxiosWithToken from "../../../constants/api_management/MyHttpHelperWithToken";

const useGetShopsProductsQuery = ({ enabled, shopId, ...params }) => {
  const { data, isLoading } = useQuery(
    ["shop_products", enabled, params.page, params.categories],
    async () => {
      try {
        const [response] = [
          await AxiosWithToken.get(`/shops/${shopId}/products`, { params }),
        ];
        //console.log(`this is the current subscription status ${response}`);
        return response.data;
      } catch (error) {
        //console.log(error.response.data);
        throw new Error(`Sorry: ${error.response.data.message}`);
      }
    },
    { enabled: enabled }
  );
  //console.log(data);
  return {
    products: data?.products ?? [],
    isLoading,
    pagination: data?.pagination ?? {},
  };
};

export default useGetShopsProductsQuery;
