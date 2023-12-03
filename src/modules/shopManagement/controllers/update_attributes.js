import { useMutation, useQueryClient } from 'react-query';
import AxiosWithToken from '../../../constants/api_management/MyHttpHelperWithToken';
import { toast } from 'react-toastify';

const UpdateAttributeManager = () => {
  const queryClient = useQueryClient();

  const updateController = async ({ id, data }) => {
    try {
      const response = await AxiosWithToken.put(`/products/attributes/${id}`, data);
      return response.data;
    } catch (error) {
      console.error('Update error:', error);
      throw new Error(`Sorry: ${error.response?.data?.message || 'Unknown error'}`);
    }
  };

  const mutation = useMutation(updateController, {
    onSuccess: async (data, variables) => {
      toast.success(data?.message);
      queryClient.invalidateQueries('shop_attributes');
    },
    onError: (error) => {
      toast.error(error.message);
      console.error('Update error:', error);
    },
  });

  const editAttributeManager = async (id, data) => {
    try {
      await mutation.mutateAsync({ id, data });
    } catch (error) {
      console.error('Update error:', error);
    }
  };

  return {
    editAttributeManager,
    data: mutation.data,
    isLoading: mutation.isLoading,
    isSuccess: mutation.isSuccess,
    error: mutation.error,
  };
};

export default UpdateAttributeManager;