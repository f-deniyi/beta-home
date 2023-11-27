import { useQuery } from "react-query";
import AxiosWithToken from "../../../constants/api_management/MyHttpHelperWithToken";


const useGetSupportQuery = ({ isAdmin, ...params }) => {
    const { data, isLoading, isSuccess } = useQuery(["all_supports", params.page],
        async () => {
            try {
                const [response] = [await AxiosWithToken.get(isAdmin ? `/support/tickets` : `/support/user/tickets`, { params })];
                // console.log(`this is the current subscription status ${response}`);
                return response.data;
            } catch (error) {
                console.log(error.response.data);
                throw new Error(`Sorry: ${error.response.data.message}`);
            }
        },
        // { enabled: enabled }
    );

    return {
        supports: data?.tickets ?? [],
        isLoading: isLoading,
        pagination: data?.pagination ?? {}
    }
};

export default useGetSupportQuery;
