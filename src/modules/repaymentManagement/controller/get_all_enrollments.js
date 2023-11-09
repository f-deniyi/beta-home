import { useQuery } from "react-query";

import AxiosWithToken from "../../../constants/api_management/MyHttpHelperWithToken";

const useGetAllEnrollments = ({ ...params }) => {

    const { data, isLoading, isSuccess } = useQuery(
        ["enrollments", params.page],
        async () => {
            try {
                const [response] = [await AxiosWithToken.get(`/packages/enrollments/list`, { params })];
                return response.data;
            } catch (error) {
                console.log(error.response.data);
                throw new Error(`Sorry: ${error.response.data.message}`);
            }
        },
        // { enabled: enabled }
    );

    return {
        enrollments: data?.data?.enrollments ?? [],
        isLoading,
        isSuccess,
        pagination: data?.data?.pagination ?? {},
    };
};

export default useGetAllEnrollments;
