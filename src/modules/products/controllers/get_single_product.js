import { useQuery } from "react-query";

import AxiosWithToken from "../../../constants/api_management/MyHttpHelperWithToken";


const useGetSingleProductQuery = ({ enabled, productId, ...params }) => {
    const { data } = useQuery(["product_details", enabled, productId],
        async () => {
            try {
                const [response] = [await AxiosWithToken.get(`products/${productId}`)];
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
        product: data ?? {},
        pagination: data?.pagination ?? {}
    }
};

export default useGetSingleProductQuery;
