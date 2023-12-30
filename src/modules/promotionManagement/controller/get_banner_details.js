import { useQuery } from "react-query";

import AxiosWithToken from "../../../constants/api_management/MyHttpHelperWithToken";

const useGetBannerDetails = ({ enabled, bannerId }) => {
    // const query = filter ? `?customer=${filter}` : "";
    // //console.log(query);
    const { data, isLoading, isSuccess, isFetching, isRefetching } = useQuery(
        [`banner_details`, enabled, bannerId],
        async () => {
            try {
                const [response] = [await AxiosWithToken.get(`/promo/banners/${bannerId}`)];
                return response.data;
            } catch (error) {
                //console.log(error.response.data);
                throw new Error(`Sorry: ${error.response.data.message}`);
            }
        },
        { enabled: enabled }
    );

    // //console.log("-->>new banner details<<---", data)

    return {
        banner: data?.data ?? null,
        isLoading,
        isSuccess,
        isFetching,
        isRefetching
        // pagination: data?.pagination ?? {},
    };
};

export default useGetBannerDetails;
