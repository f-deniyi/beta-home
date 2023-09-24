import React from "react";

import FAQSection from "../../../generalComponents/FAQSection";
import HeaderFooter from "../../../generalComponents/HeaderFooter";
import { topPattern } from "../../../assets/images";

const FAQPage = () => {
  return (
    <HeaderFooter
      children={
        <div>
          <img
            className="h-3 w-full mt-10 object-cover "
            src={topPattern}
            alt=""
          />
          <FAQSection />
          <img className="h-3 w-full  object-cover " src={topPattern} alt="" />
        </div>
      }
    />
  );
};

export default FAQPage;
