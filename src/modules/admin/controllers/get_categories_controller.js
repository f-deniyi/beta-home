import { useQuery } from "react-query";

import AxiosWithToken from "../../../constants/api_management/MyHttpHelperWithToken";

const useGetCategoriesManager = ({ enabled, ...params }) => {
  return useQuery(
    ["product_categories", enabled],
    async () => {
      try {
        const [response] = [
          await AxiosWithToken.get(`/categories`, { params }),
        ];
        console.log(`this is the response: ${response}`);
        return response.data;
      } catch (error) {
        console.log(error.response.data);
        throw new Error(`Sorry: ${error.response.data.message}`);
      }
    },
    { enabled: enabled }
  );
};

export default useGetCategoriesManager;
