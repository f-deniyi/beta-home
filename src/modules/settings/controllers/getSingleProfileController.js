import { useQuery } from "react-query";

import AxiosWithToken from "../../../constants/api_management/MyHttpHelperWithToken";

const useGetSingleProfileManager = (profileId) => {
  return useQuery(["singleProfile", profileId], async () => {
    try {
      const [response] = [
        await AxiosWithToken.get(`/user/profiles/${profileId}`),
      ];
      //console.log(`i am checking this ${response.data.data}`);
      return response.data;
    } catch (error) {
      //console.log(error.response.data);
      throw new Error(`Sorry: ${error.response.data.message}`);
    }
  });
};

export default useGetSingleProfileManager;
