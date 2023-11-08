import { useQuery } from "react-query";

import AxiosWithToken from "../../../constants/api_management/MyHttpHelperWithToken";

const useGetShopBanners = ({ enabled, shopId, ...params }) => {
    // const query = filter ? `?customer=${filter}` : "";
    // console.log(query);
    const { data, isLoading, isSuccess } = useQuery(
        ["promotion_banners", enabled, params.page],
        async () => {
            try {
                const [response] = [await AxiosWithToken.get(`/promo/banners?shop=${shopId}`, { params })];
                return response.data;
            } catch (error) {
                console.log(error.response.data);
                throw new Error(`Sorry: ${error.response.data.message}`);
            }
        },
        { enabled: enabled }
    );
    // console.log("-->>data-shop-banners<<---", data,data?.banners ,data?.pagination)

    return {
        banners: data?.banners ?? [],
        isLoading,
        isSuccess,
        pagination: data?.pagination ?? {},
    };
};

export default useGetShopBanners;
