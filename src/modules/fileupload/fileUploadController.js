import { useMutation } from "react-query";
import Axios from "../../constants/api_management/MyHttpHelper";
import axios from "axios";

const useFileUpload = () => {
  const uploadFile = async (file) => {
    const fileName = file.name;
    const fileType = file.type;

    // Step 1: Get signed request and URL
    try {
      const [response] = [
        await Axios.post(
          `/services/file/presign-url/?file_name=${fileName}&file_type=${fileType}`
        ),
      ];

      console.log(
        "this is the signedRequest: ",
        response.data.data.signedRequest
      );

      await axios.put(response.data.data.signedRequest, file);

      return response.data.data;
    } catch (error) {
      // console.log(error.response.data);
      throw new Error(`Sorry: ${error}`);
    }
  };

  const mutation = useMutation(uploadFile, {
    onError: (error) => {
      // Handle error if necessary
      console.log("File upload error2:", error);
    },
    onSuccess: (data) => {
      // Update the URL in state
      console.log(data);
      return data;
    },
  });

  const handleFileUpload = async (file) => {
    // let url;
    try {
      const respondins = await mutation.mutateAsync(file);
      console.log(`somethign here. ${respondins.url}`);
      return respondins.url;
    } catch (error) {
      console.log(mutation.error);
      // Handle error if necessary
      console.error("File upload error1:", error);
    }
    // return url;
  };

  return {
    handleFileUpload,
    data: mutation.data,
    isLoading: mutation.isLoading,
    isSuccess: mutation.isSuccess,
    error: mutation.error,
  };
};

export default useFileUpload;
