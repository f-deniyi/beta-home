import { useQuery } from "react-query";

import AxiosWithToken from "../../../constants/api_management/MyHttpHelperWithToken";

const useGetUserDetailsManager = (enabled = true) => {
  return useQuery(
    ["userDetails", enabled],
    async () => {
      try {
        const [response] = [await AxiosWithToken.get(`/user`)];
        console.log(`i am checking this ${response.data.data.user.role.name}`);
        return response.data;
      } catch (error) {
        console.log(error.response.data);
        throw new Error(`Sorry: ${error.response.data.message}`);
      }
    },
    {
      enabled: enabled,
      refetchOnWindowFocus: false
    }
  );
};

export default useGetUserDetailsManager;
