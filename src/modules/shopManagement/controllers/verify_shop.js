import usePutManager from "../../../constants/controller_templates/put_controller_template";

export const VerifyShopMutation = ({ shopId }) => {
    const { updateCaller, isLoading, isSuccess, error, data } = usePutManager(`/shops/${shopId}/verify`, 'shop-details');
    const verifyShop = async (details) => {
        try {
            await updateCaller(details);
        } catch (error) {
            // Handle error if necessary
            console.error("verify shop error:", error);
        }
    };
    return {
        verifyShop,
        data,
        isLoading,
        isSuccess,
        error
    };
};