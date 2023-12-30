import { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import AxiosWithToken from "../../../constants/api_management/MyHttpHelperWithToken";

const UseGetUserBalance = ({ enabled = true, userId }) => {
    const [lastRefetchTime, setLastRefetchTime] = useState(null);

    const { data, refetch, isLoading } = useQuery(["user_balance", userId], async () => {
        try {
            const [response] = [await AxiosWithToken.get(`/wallet/balance/${userId}`)];
            //console.log(response.status);
            return response.data;
        } catch (error) {
            //console.log(error.response.data);
            throw new Error(`Sorry: ${error.response.data.message}`);
        }
    }, {
        enabled,
        refetchOnWindowFocus: false,
        onSettled: (data, error) => {
            if (data) {
                const now = new Date();
                setLastRefetchTime(now);
            }

        }

    });

    return {
        balance: data?.data?.wallet ?? {},
        lastRefetchTime,
        refetch: refetch,
        isLoading: isLoading,
    };
};

export default UseGetUserBalance;
