import { useQuery } from "react-query";
import AxiosWithToken from "../../../constants/api_management/MyHttpHelperWithToken";


const useGetTransactionsHistoryQuery = ({ enabled, shopId, ...params }) => {
    const { data } = useQuery(["transactions_history", enabled, params.page],
        async () => {
            try {
                const [response] = [await AxiosWithToken.get(`/wallet/transactions`, { params })];
                // console.log(`this is the current subscription status ${response}`);
                return response.data;
            } catch (error) {
                console.log(error.response.data);
                throw new Error(`Sorry: ${error.response.data.message}`);
            }
        },
        { enabled: enabled }
    );
    return {
        transactions: data?.data?.transactions ?? [],
        pagination: data?.data?.pagination ?? {}
    }
};

export default useGetTransactionsHistoryQuery;
