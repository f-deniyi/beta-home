import { useQuery } from "react-query";
import AxiosWithToken from "../../../constants/api_management/MyHttpHelperWithToken";
import { toast } from "react-toastify";


const UseSuspendShop = ({ enabled, shopId, action }) => {
    const { data, isLoading, isSuccess, isError, refetch } = useQuery(["suspend-shop", shopId, enabled, action],
        async () => {
            try {
                const [response] = [await AxiosWithToken.get(`/shops/${shopId}/${action}`)];
                toast.success(response?.data?.message)
                return response.data;

            } catch (error) {
                console.log(error.response.data);
                toast.error(error.response.data.message)
                throw new Error(`Sorry: ${error.response.data.message}`);
            }
        },
        {
            enabled: enabled,
            refetchOnWindowFocus: false,
            retry:false
        }
    );
    console.log(data)
    return {
        // shop: data?.data ?? {},
        isLoading,
        isSuccess,
        isError,
        refetch
    }
};

export default UseSuspendShop;
