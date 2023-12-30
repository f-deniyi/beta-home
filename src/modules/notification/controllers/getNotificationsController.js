import { useQuery } from "react-query";
import AxiosWithToken from "../../../constants/api_management/MyHttpHelperWithToken";

const useGetNotifications = () => {
  //console.log(`this is the token ${localStorage.getItem("token")}`);
  return useQuery(["allNotifications"], async () => {
    try {
      const response = await AxiosWithToken.get(`/notification/`);
      //console.log(`i am checking this ${response.data}`);

      return response.data;
    } catch (error) {
      //console.log(error.response.data);
      throw new Error(`Sorry: ${error.response.data.message}`);
    }
  });
};

export default useGetNotifications;
