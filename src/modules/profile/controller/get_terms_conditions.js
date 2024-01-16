import { useQuery } from "react-query";
import AxiosWithToken from "../../../constants/api_management/MyHttpHelperWithToken";


const useGetTermsAndConditions = ({ type }) => {
    const { data, isLoading, isSuccess } = useQuery(["terms_and_conditions", type],
        async () => {
            try {
                const [response] = [await AxiosWithToken.get(type === 'general' ? `/terms` : `/terms/${type}`)];
                // //console.log(`this is the current subscription status ${response}`);
                return response.data;
            } catch (error) {
                //console.log(error.response.data);
                throw new Error(`Sorry: ${error.response.data.message}`);
            }
        },
        // { enabled: enabled }
    );
    //console.log('data---->>>', data)
    return {
        terms: data?.data ?? null,
        isLoading: isLoading,
        // pagination: data?.pagination ?? {}
    }
};

export default useGetTermsAndConditions;
