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
  },
  {
    icon: password,
    name: "Promo Banners",
    hasShop: false,
  },
  {
    icon: password,
    name: "Attribute",
    hasShop: false,
  },
];

export default profileMenu;
