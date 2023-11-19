import { useQuery } from "react-query";

import AxiosWithToken from "../../../constants/api_management/MyHttpHelperWithToken";


const useGetOrderDetails = ({ enabled, orderId, ...params }) => {
    const { data, isLoading } = useQuery(["product-order-details", enabled, params.page],
        async () => {
            try {
                const [response] = [await AxiosWithToken.get(`/order/${orderId}`)];
                return response.data;
            } catch (error) {
                console.log(error.response.data);
                throw new Error(`Sorry: ${error.response.data.message}`);
            }
        },
        {
            enabled: enabled,
            // refetchOnWindowFocus: false
        }
    );
    // console.log("----->>>order-details<<<----", data)
    return {
        orderDetails: data?.data ?? {},
        isLoading,
        // pagination: data?.pagination ?? {}
    }
};

export default useGetOrderDetails;
