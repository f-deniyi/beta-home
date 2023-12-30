import { useQuery } from "react-query";

import AxiosWithToken from "../../../../constants/api_management/MyHttpHelperWithToken";


const useGetShopsAttributesQuery = ({ enabled, shopId, ...params }) => {
    const { data, isLoading } = useQuery(["shop_attributes", enabled, params.page],
        async () => {
            try {
                const [response] = [await AxiosWithToken.get(`/products/attributes/${shopId}`, { params })];
                return response.data;
            } catch (error) {
                //console.log(error.response.data);
                throw new Error(`Sorry: ${error.response.data.message}`);
            }
        },
        { enabled: enabled }
    );
    //console.log('<<--attr--->>', data)
    return {
        attributes: data?.data ?? [],
        isLoading,
        // pagination: data?.pagination ?? {}
    }
};

export default useGetShopsAttributesQuery;
