import { useNavigate } from "react-router-dom";
import BaseDashboardNavigation from "../../../generalComponents/BaseDashboardNavigation";
import Loader from "../../../generalComponents/Loader";
import { CreateShopManager } from "./controller/create_shop_controller";
import ShopManagementWrapper from "./wrapper";
import { useState } from "react";
import ShopProfileSettings from "./components/ShopProfileSettings";
import PromotionManagement from "../../promotionManagement";

const VendorShopManagement = () => {
  const navigate = useNavigate();
  const { isLoading, createShopController } = CreateShopManager();
  const [title, setTitle] = useState("Shop Profile");
  return (
    <BaseDashboardNavigation title={"Shop Settings"} hideSearch={true}>
      <ShopManagementWrapper title={title} setTitle={setTitle}>
        {title === "Shop Profile" && <ShopProfileSettings />}
        {title === "Promo Banners" && <PromotionManagement isAdmin={false} />}
      </ShopManagementWrapper>
    </BaseDashboardNavigation>
  );
};

export default VendorShopManagement;
