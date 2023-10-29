import { useQuery } from "react-query";

import AxiosWithToken from "../../../constants/api_management/MyHttpHelperWithToken";


const useGetAllServiceRequest = ({ enabled, shopId, ...params }) => {
    const { data, isLoading } = useQuery(["all_service_request", enabled, params.page],
        async () => {
            try {
                const [response] = [await AxiosWithToken.get(`/service-center/requests`, { params })];
                return response.data;
            } catch (error) {
                console.log(error.response.data);
                throw new Error(`Sorry: ${error.response.data.message}`);
            }
        },
        { enabled: enabled }
    );
    return {
        requests: data?.requests ?? [],
        isLoading,
        pagination: data?.pagination ?? {}
    }
};

export default useGetAllServiceRequest;
