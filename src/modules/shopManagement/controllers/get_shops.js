import { useQuery } from "react-query";

import AxiosWithToken from "../../../constants/api_management/MyHttpHelperWithToken";


const useGetShopsQuery = ({ enabled, ...params }) => {
    return useQuery(["all_shop", enabled, params.name],
        async () => {
            try {
                const [response] = [await AxiosWithToken.get(`/shops`, { params })];
                //console.log(`this is the current subscription status ${response}`);
                return response.data;
            } catch (error) {
                //console.log(error.response.data);
                throw new Error(`Sorry: ${error.response.data.message}`);
            }
        },
        { enabled: enabled }
    );
};

export default useGetShopsQuery;
