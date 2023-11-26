import { useQuery } from "react-query";
import AxiosWithToken from "../../../constants/api_management/MyHttpHelperWithToken";


const useGetSupportMessageQuery = ({ enabled, ticketId }) => {
    const { data, isLoading, isSuccess } = useQuery(["ticket_messages"],
        async () => {
            try {
                const [response] = [await AxiosWithToken.get(`/support/tickets/${ticketId}/messages`)];
                // console.log(`this is the current subscription status ${response}`);
                return response.data;
            } catch (error) {
                console.log(error.response.data);
                throw new Error(`Sorry: ${error.response.data.message}`);
            }
        },
        { enabled: enabled }
    );
    return {
        messages: data?.data ?? [],
        isLoading: isLoading,
        pagination: data?.pagination ?? {}
    }
};

export default useGetSupportMessageQuery;
