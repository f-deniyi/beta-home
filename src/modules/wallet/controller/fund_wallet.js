import usePostManager from "../../../constants/controller_templates/post_controller_template";

export const FundWalletMutation = () => {
    const isMultiKey = true
    const { postCaller, isLoading, isSuccess, error, data } = usePostManager('/wallet/credit', '');
    const fundWalletCaller = async (details) => {
        try {
            await postCaller(details);
        } catch (error) {
            // Handle error if necessary
            console.error("fund wallet error:", error);
        }
    };
    return {
        fundWalletCaller,
        data,
        isLoading,
        isSuccess,
        error
    };
};