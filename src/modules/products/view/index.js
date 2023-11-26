import React from "react";
import BaseDashboardNavigation from "../../../generalComponents/BaseDashboardNavigation";

import ProductsManagement from "./management";

const Products = () => {
 
  return (
    <BaseDashboardNavigation title={"Product Managment"} hideSearch={false}>
      <ProductsManagement />
    </BaseDashboardNavigation>
  );
};

export default Products;
