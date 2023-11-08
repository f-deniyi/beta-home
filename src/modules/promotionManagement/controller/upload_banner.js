import usePostManager from "../../../constants/controller_templates/post_controller_template";

export const UploadBannerManager = () => {
  const { postCaller, isLoading, isSuccess, error, data } = usePostManager(
    `/promo/banners`,
    ["promotion_banners"]
  );
  const uploadBannerController = async (details) => {
    try {
      await postCaller(details);
    } catch (error) {
      // Handle error if necessary
      console.error("post error:", error);
    }
  };
  return {
    uploadBannerController,
    data,
    isLoading,
    isSuccess,
    error,
  };
};
