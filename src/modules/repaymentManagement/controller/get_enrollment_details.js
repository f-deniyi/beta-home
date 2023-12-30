import { useQuery } from "react-query";

import AxiosWithToken from "../../../constants/api_management/MyHttpHelperWithToken";

const useGetEnrollmentDetails = ({ enrollmentId, enabled }) => {

    const { data, isLoading, isSuccess } = useQuery(
        ["enrollments", enrollmentId],
        async () => {
            try {
                const [response] = [await AxiosWithToken.get(`/packages/enrollments/${enrollmentId}`)];
                return response.data;
            } catch (error) {
                //console.log(error.response.data);
                throw new Error(`Sorry: ${error.response.data.message}`);
            }
        },
        { enabled: enabled }
    );
    //console.log(data?.data)
    return {
        enrollment: data?.data ?? {},
        isLoading,
        isSuccess,
        // pagination: data?.data?.pagination ?? {},
    };
};

export default useGetEnrollmentDetails;
