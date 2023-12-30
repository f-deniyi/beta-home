import { useNavigate } from "react-router-dom";
import BaseDashboardNavigation from "../../../generalComponents/BaseDashboardNavigation";
import Loader from "../../../generalComponents/Loader";
import { CreateShopManager } from "./controller/create_shop_controller";
import ShopManagementWrapper from "./wrapper";
import { useState } from "react";
import ShopProfileSettings from "./components/ShopProfileSettings";
import PromotionManagement from "../../promotionManagement";
import Attributes from "./components/Attributes";
import useGetUserDetailsManager from "../../settings/controllers/get_UserDetails_controller";
import useGetShopsQuery from "../../shopManagement/controllers/get_shops";
import ProductsManagement from "../../products/view/management";

const VendorShopManagement = () => {
  const navigate = useNavigate();
  const { isLoading, createShopController } = CreateShopManager();
  const [title, setTitle] = useState("Shop Profile");

  const {
    data,
    isSuccess,
    isLoading: userLoading,
  } = useGetUserDetailsManager();

  const {
    data: userShop,
    isError,
    error,
    isLoading: fetchingShop,
  } = useGetShopsQuery({
    enabled: Boolean(data?.data?.user),
    owner_id: data?.data?.user?.id,
  });

  const has_shop = userShop?.shops.length > 0;
  const isAdmin= data?.data?.user?.role?.name==='admin'
  //console.log("has---shop", has_shop);

  return (
    <BaseDashboardNavigation title={"Shop Settings"} hideSearch={true}>
      <ShopManagementWrapper
        title={title}
        setTitle={setTitle}
        hasShop={has_shop}
        isAdmin={isAdmin}
      >
        {title === "Shop Profile" && <ShopProfileSettings hasShop={has_shop} />}
        {title === "Promo Banners" && <PromotionManagement isAdmin={false} />}
        {title === "Attributes" && <Attributes />}
        {title === "Products" && <ProductsManagement />}

      </ShopManagementWrapper>
    </BaseDashboardNavigation>
  );
};

export default VendorShopManagement;
