import { useQuery } from "react-query";

import AxiosWithToken from "../../../constants/api_management/MyHttpHelperWithToken";

const usePersonalMeasurementManager = (eventId) => {
  return useQuery(["personMeasurementProfile"], async () => {
    try {
      const [response] = [await AxiosWithToken.get(`/user/profiles/personal`)];
      //console.log(`i am checking data ${response.data.data.phone}`);
      return response.data;
    } catch (error) {
      //console.log(error.response.data);
      throw new Error(`Sorry: ${error.response.data.message}`);
    }
  });
};

export default usePersonalMeasurementManager;
