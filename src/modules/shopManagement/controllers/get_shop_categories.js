import { useQuery } from "react-query";

import AxiosWithToken from "../../../constants/api_management/MyHttpHelperWithToken";


const useGetSCategoriesQuery = ({ enabled, ...params }) => {
    const { data, isError, isLoading } = useQuery(["categories", enabled, params.page],
        async () => {
            try {
                const [response] = [await AxiosWithToken.get(`/categories`, { params })];
                return response.data;
            } catch (error) {
                //console.log(error.response.data);
                throw new Error(`Sorry: ${error.response.data.message}`);
            }
        },
        { enabled: enabled }
    );
    return {
        categories: data ?? [],
        categoryLoading: isLoading,
        categoryError: isError

    }
};

export default useGetSCategoriesQuery;
