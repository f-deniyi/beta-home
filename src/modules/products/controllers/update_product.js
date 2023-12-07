import usePutManager from "../../../constants/controller_templates/put_controller_template";

export const UpdateProductDetailsMutation = (productId) => {
    const { updateCaller, isLoading, isSuccess, error, data } = usePutManager(`/products/${productId}`, 'product_details');
    const updateProductDetails = async (details) => {
        try {
            await updateCaller(details);
        } catch (error) {
            // Handle error if necessary
            console.error("update product error:", error);
        }
    };
    return {
        updateProductDetails,
        data,
        isLoading,
        isSuccess,
        error
    };
};