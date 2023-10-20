import { useQuery } from "react-query";
import AxiosWithToken from "../../../constants/api_management/MyHttpHelperWithToken";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const UseVerifyPaymentQuery = ({ enabled, ...params }) => {
    const navigate = useNavigate()
    const { data } = useQuery(["verify_payment", enabled, params.page],
        async () => {
            try {
                const [response] = [await AxiosWithToken.get(`/wallet/confirmation`, { params })];
                // console.log(`this is the current subscription status ${response}`);
                return response.data;
            } catch (error) {
                // console.log(error.response.data, error.response.data.message);
                // toast.error(error.response.data.message)
                throw new Error(`Sorry: ${error.response.data.message}`);
            }
        },
        {
            enabled: enabled,
            retry: false,
            onSettled: (data, error) => {
                navigate('/wallet')
            }
        }
    );
};

export default UseVerifyPaymentQuery;
