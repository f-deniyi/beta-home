import { useQuery, useQueryClient } from "react-query";

import AxiosWithToken from "../../../constants/api_management/MyHttpHelperWithToken";

const useGetAllUsersManager = ({ filter }) => {
  const query = filter ? `?isVendor=${filter}` : "";
  const { data, refetch, isLoading } = useQuery(["all_users"], async () => {
    try {
      const [response] = [await AxiosWithToken.get(`/user/list${query}`)];
      console.log(response.status);
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      throw new Error(`Sorry: ${error.response.data.message}`);
    }
  });

  console.log(data);
  return {
    users: data?.data?.users ?? {},
    pagination: data?.data?.pagination ?? {},
    refetch: refetch,
    isLoading: isLoading,
  };
};

export default useGetAllUsersManager;
