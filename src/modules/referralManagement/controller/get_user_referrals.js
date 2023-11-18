import { useQuery } from "react-query";

import AxiosWithToken from "../../../constants/api_management/MyHttpHelperWithToken";
import { toast } from "react-toastify";

const useGetUseRefferal = ({ userId, enabled }) => {
  //   toast.success(userId);
  const { data, isLoading, isSuccess } = useQuery(
    ["sales_rep", enabled, userId],
    async () => {
      try {
        const [response] = [
          await AxiosWithToken.get(`user/sales-rep/${userId}/referrals`),
        ];
        return response.data;
      } catch (error) {
        console.log(error.response.data);
        throw new Error(`Sorry: ${error.response.data.message}`);
      }
    },
    { enabled: enabled }
  );
  // console.log("-->>data-referrals<<---", data)

  return {
    referrals: data?.data?.referals ?? [],
    isLoading,
    isSuccess,
    pagination: data?.pagination ?? {},
  };
};

export default useGetUseRefferal;
