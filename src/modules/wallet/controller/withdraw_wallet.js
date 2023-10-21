import usePutManager from "../../../constants/controller_templates/put_controller_template";

export const WithdrawWalletMutation = () => {
    const isMultiKey = true
    const { updateCaller, isLoading, isSuccess, error, data } = usePutManager('/wallet/withdraw', ['wallet_balance', 'transactions_history'], isMultiKey);
    const withdrawWalletCaller = async (details) => {
        try {
            await updateCaller(details);
        } catch (error) {
            // Handle error if necessary
            console.error("fund wallet error:", error);
        }
    };
    return {
        withdrawWalletCaller,
        data,
        isLoading,
        isSuccess,
        error
    };
};