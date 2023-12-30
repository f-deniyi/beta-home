import { useQuery } from "react-query";

import AxiosWithToken from "../../../constants/api_management/MyHttpHelperWithToken";


const UseGetShopDetailsQuery = ({ enabled, shopId, ...params }) => {
    const { data, isLoading, isSuccess, isError } = useQuery(["shop-details", shopId, enabled],
        async () => {
            try {
                const [response] = [await AxiosWithToken.get(`/shops/${shopId}`, { params })];
                //console.log(`this is the current subscription status ${response}`);
                return response.data;
            } catch (error) {
                //console.log(error.response.data);
                throw new Error(`Sorry: ${error.response.data.message}`);
            }
        },
        { enabled: enabled }
    );
    //console.log(data)
    return {
        shop: data?.data ?? {},
        isLoading,
        isSuccess,
        isError
    }
};

export default UseGetShopDetailsQuery;
