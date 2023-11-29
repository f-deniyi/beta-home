import { useQuery } from "react-query";

import AxiosWithToken from "../../../constants/api_management/MyHttpHelperWithToken";

const useGetPackagesManager = ({ enabled, ...params }) => {
  return useQuery(
    ["all_packages", enabled, params.title],
    async () => {
      try {
        const [response] = [await AxiosWithToken.get(`/packages`, { params })];
        console.log(`this is the current subscription status ${response}`);
        return response.data;
      } catch (error) {
        console.log(error.response.data);
        throw new Error(`Sorry: ${error.response.data.message}`);
      }
    },
    { enabled: enabled }
  );
};

export default useGetPackagesManager;
