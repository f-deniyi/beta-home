import { useQuery } from "react-query";

import AxiosWithToken from "../../../constants/api_management/MyHttpHelperWithToken";


const useGetChannelMessage = ({ channelId, enabled }) => {

    const { data, isLoading, isSuccess } = useQuery(
        ["channel_messages", channelId],
        async () => {
            try {
                const [response] = [await AxiosWithToken.get(`/chat/${channelId}/fetch-messages`)];
                return response.data;
            } catch (error) {
                //console.log(error.response.data);
                throw new Error(`Sorry: ${error.response.data.message}`);
            }
        },
        { enabled: enabled }
    );
    return {
        channel_messages: data?.channel_messages ?? [],
        isLoading,
        isSuccess,
        pagination: data?.pagination ?? {},
    };
};

export default useGetChannelMessage;
