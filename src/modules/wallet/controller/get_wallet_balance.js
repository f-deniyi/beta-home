import { useQuery } from "react-query";
import AxiosWithToken from "../../../constants/api_management/MyHttpHelperWithToken";
import { useState } from "react";

const useGetWalletBalanceQuery = ({ enabled, ...params }) => {
    const [lastRefetchTime, setLastRefetchTime] = useState(null); 
    const { data } = useQuery(["wallet_balance", enabled, params.page],
        async () => {
            try {
                const [response] = [await AxiosWithToken.get(`/wallet/balance`, { params })];
                // console.log(`this is the current subscription status ${response}`);
                return response.data;
            } catch (error) {
                console.log(error.response.data);
                throw new Error(`Sorry: ${error.response.data.message}`);
            }
        },
        {
            enabled: enabled,
            onSettled: (data, error) => {
                if (data) {
                    const now = new Date();
                    setLastRefetchTime(now);
                }

            }

        })

    return {
        wallet_balance: data?.data?.wallet?.balance ?? '0.00',
        lastRefetchTime

    }
}

export default useGetWalletBalanceQuery;
