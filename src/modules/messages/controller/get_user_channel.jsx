import { useQuery } from "react-query";

import AxiosWithToken from "../../../constants/api_management/MyHttpHelperWithToken";


const useGetUserChannel = () => {

    const { data, isLoading, isSuccess } = useQuery(
        ["user_channels"],
        async () => {
            try {
                const [response] = [await AxiosWithToken.get(`chat/user/channels`)];
                return response.data;
            } catch (error) {
                //console.log(error.response.data);
                throw new Error(`Sorry: ${error.response.data.message}`);
            }
        },
        // { enabled: enabled }
    );

    return {
        channels: data?.chat_list ?? [],
        isLoading,
        isSuccess,
        pagination: data?.pagination ?? {},
    };
};

export default useGetUserChannel;
