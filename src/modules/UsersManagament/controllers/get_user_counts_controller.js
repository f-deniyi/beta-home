import { useQuery, useQueryClient } from "react-query";

import AxiosWithToken from "../../../constants/api_management/MyHttpHelperWithToken";

const useGetUserCountManager = () => {
  const { data, refetch, isLoading } = useQuery(["userCounts"], async () => {
    try {
      const [response] = [await AxiosWithToken.get(`/user/role-count`)];
      console.log(response.status);
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      throw new Error(`Sorry: ${error.response.data.message}`);
    }
  });

  console.log(data);
  return {
    users: data?.data,
    refetch: refetch,
    isLoading: isLoading,
  };
};

export default useGetUserCountManager;
