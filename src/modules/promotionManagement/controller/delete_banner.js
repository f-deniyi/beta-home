import useDeleteManager from "../../../constants/controller_templates/delete_controller_template";

export const DeletePromotionManager = ({ bannerId }) => {
    const isMultiKey = false;
    const { deleteCaller, isLoading, isSuccess, error, data } = useDeleteManager(
        `/promo/banners/${bannerId}`,
        "promotion_banners"
    );
    const deletePromotionController = async (details) => {
        try {
            await deleteCaller(details);
        } catch (error) {
            // Handle error if necessary
            console.error("delete error:", error);
        }
    };
    return {
        deletePromotionController,
        data,
        isLoading,
        isSuccess,
        error,
    };
};
