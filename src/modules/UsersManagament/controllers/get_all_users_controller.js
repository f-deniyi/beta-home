import { useQuery, useQueryClient } from "react-query";

import AxiosWithToken from "../../../constants/api_management/MyHttpHelperWithToken";

const useGetAllUsersManager = ({ filter, enabled = true, ...params }) => {
  const query = filter === null ? '' : filter === true ? `?isVendor=${filter}` : `?isVendor=${false}`;
  const { data, refetch, isLoading } = useQuery(["all_users", params.fullname, filter], async () => {
    try {
      const [response] = [await AxiosWithToken.get(`/user/list${query}`, { params })];
      //console.log(response.status);
      return response.data;
    } catch (error) {
      //console.log(error.response.data);
      throw new Error(`Sorry: ${error.response.data.message}`);
    }
  }, {
    enabled
  });

  //console.log(data);
  return {
    users: data?.data?.users ?? [],
    pagination: data?.data?.pagination ?? {},
    refetch: refetch,
    isLoading: isLoading,
  };
};

export default useGetAllUsersManager;
