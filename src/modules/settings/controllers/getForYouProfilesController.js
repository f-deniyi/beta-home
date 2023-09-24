import { useQuery } from "react-query";

import AxiosWithToken from "../../../constants/api_management/MyHttpHelperWithToken";

const useGetForYouProfilesManager = (eventId) => {
  return useQuery(["forYouProfiles"], async () => {
    try {
      const [response] = [await AxiosWithToken.get(`/user/profiles/created`)];
      console.log(`i am checking this ${response.data}`);
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      throw new Error(`Sorry: ${error.response.data.message}`);
    }
  });
};

export default useGetForYouProfilesManager;
