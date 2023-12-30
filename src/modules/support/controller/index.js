import { toast } from 'react-toastify'
import { useMutation } from 'react-query';
import Axios from '../../../constants/api_management/MyHttpHelper';

const UseSupportWithoutAuth = () => {
    const { mutate: createTicket, isLoading, isSuccess } = useMutation(async (data) => {
        try {
            const response = await Axios.post('/support/create', data);
            return response.data;
        } catch (error) {
            //console.log(error.response.data?.message);
            toast.error(error?.response?.data?.message)
            throw new Error(`Sorry: ${error.response.data.message}`);
        }
    }
    )
    return {
        createTicket,
        isLoading,
        isSuccess,
    };
};
export default UseSupportWithoutAuth;