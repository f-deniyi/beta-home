import usePutManager from "../../../constants/controller_templates/put_controller_template";

export const UpdateBannerDetailsMutation = ({ bannerId }) => {
    const isMultiKey = false
    const { updateCaller, isLoading, isSuccess, error, data } = usePutManager(`/promo/banners/${bannerId}`, 'banner_details', isMultiKey);
    const updateBannerCaller = async (details) => {
        try {
            await updateCaller(details);
        } catch (error) {
            // Handle error if necessary
            console.error("update details error:", error);
        }
    };
    return {
        updateBannerCaller,
        data,
        isLoading,
        isSuccess,
        error
    };
};