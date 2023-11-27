import {
  profile,
  password,
  terms,
  deleteAccount,
  logout,
} from "../../../../assets/icons";

const profileMenu = [
  {
    icon: profile,
    name: "Shop Profile",
    hasShop: true,
    belongsToAdmin:false
  },
  {
    icon: password,
    name: "Products",
    hasShop: false,
    belongsToAdmin:true
  },
  {
    icon: password,
    name: "Promo Banners",
    hasShop: false,
    belongsToAdmin:false

  },
  
  {
    icon: password,
    name: "Attributes",
    hasShop: false,
    belongsToAdmin:false

  },
];

export default profileMenu;
