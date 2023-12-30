import { useQuery, useQueryClient } from "react-query";

import AxiosWithToken from "../../../constants/api_management/MyHttpHelperWithToken";

const UseGetUserTransactions = ({ enabled = true, userId }) => {
    const { data, isLoading } = useQuery(["user_transactions", userId], async () => {
        try {
            const [response] = [await AxiosWithToken.get(`/wallet/transactions/${userId}`)];
            //console.log(response.status);
            return response.data;
        } catch (error) {
            //console.log(error.response.data);
            throw new Error(`Sorry: ${error.response.data.message}`);
        }
    }, {
        enabled,
        refetchOnWindowFocus: false
    });
    return {
        transactions: data?.data?.transactions ?? [],
        pagination: data?.data?.pagination,
        isLoading: isLoading,
    };
};

export default UseGetUserTransactions;
