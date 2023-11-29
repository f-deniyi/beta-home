import { useQuery } from "react-query";
import AxiosWithToken from "../../../constants/api_management/MyHttpHelperWithToken";
import { toast } from "react-toastify";


const UseGetVendorRequestsQuery = ({ ...params }) => {
    const { data, isLoading, isSuccess, isError, refetch } = useQuery(["vendor-requests", params.fullname],
        async () => {
            try {
                const [response] = [await AxiosWithToken.get(`/user/vendor/requests`, { params })];
                toast.success(response?.data?.message)
                return response.data;

            } catch (error) {
                console.log(error.response.data);
                toast.error(error.response.data.message)
                throw new Error(`Sorry: ${error.response.data.message}`);
            }
        },
        {
            // enabled: enabled,
            // refetchOnWindowFocus: false,
            // retry: false
        }
    );
    console.log(data)
    return {
        requests: data?.requests,
        pagination: data?.pagination,
        isLoading,
        isSuccess,
        isError,
        refetch
    }
};

export default UseGetVendorRequestsQuery;
