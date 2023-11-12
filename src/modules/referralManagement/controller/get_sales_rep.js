import { useQuery } from "react-query";

import AxiosWithToken from "../../../constants/api_management/MyHttpHelperWithToken";

const useGetSalesRep = ({ status, ...params }) => {

    const { data, isLoading, isSuccess } = useQuery(
        ["sales_rep", params.page, status],
        async () => {
            try {
                const [response] = [await AxiosWithToken.get(`/user/sales-rep/requests?approved=${status}`, { params })];
                return response.data;
            } catch (error) {
                console.log(error.response.data);
                throw new Error(`Sorry: ${error.response.data.message}`);
            }
        },
        // { enabled: enabled }
    );
    // console.log("-->>data-enrolments<<---", data)

    return {
        requests: data?.requests ?? [],
        isLoading,
        isSuccess,
        pagination: data?.pagination ?? {},
    };
};

export default useGetSalesRep;
