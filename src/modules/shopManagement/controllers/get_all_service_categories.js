import { useQuery } from "react-query";

import AxiosWithToken from "../../../constants/api_management/MyHttpHelperWithToken";

const useGetAllServiceCategoriesQuery = ({ enabled, ...params }) => {
  const { data, isError, isLoading } = useQuery(
    ["all_service_categories", enabled, params.page],
    async () => {
      try {
        const [response] = [
          await AxiosWithToken.get(`/service-categories`, { params }),
        ];
        return response.data;
      } catch (error) {
        console.log(error.response.data);
        throw new Error(`Sorry: ${error.response.data.message}`);
      }
    },
    { enabled: enabled }
  );
  // console.log('-----data-order', data)
  return {
    categories: data ?? [],
    categoryLoading: isLoading,
    categoryError: isError,
  };
};

export default useGetAllServiceCategoriesQuery;
