import React, { useEffect, useRef, useState } from "react";
import BaseDashboardNavigation from "../../generalComponents/BaseDashboardNavigation";
import PersonalMeasurementComponent from "./components/PersonalMeasurementComponent";
import SubscriptionManagementComponent from "./components/SubscriptionManagementComponent";
import PersonalAccountComponent from "./components/PersonalAccountComponent";
import UpdatePasswordComponent from "./components/UpdatePasswordComponent";

const SettingsPage = (specificTab) => {
  const [currentIndex, setCurrentIndex] = useState(specificTab ?? 0);

  const menuList = [
    "My Account",
    "Personal Measurements",
    "Manage Subscriptions",
    "Update Password",
  ];

  useEffect(() => {
    // Get the tab index from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const tabIndex = urlParams.get("tab");
    const parsedIndex = parseInt(tabIndex);

    if (
      !isNaN(parsedIndex) &&
      parsedIndex >= 0 &&
      parsedIndex < menuList.length
    ) {
      setCurrentIndex(parsedIndex);
    } else {
      setCurrentIndex(0);
    }
  }, []);
  return (
    <BaseDashboardNavigation title={"Settings"} hideSearch={true}>
      <div className="md:flex md:flex-col md:space-x-[20px] space-y-20 md:space-y-5 relative md:h-[80vh] w-full md:w-[98%]">
        {" "}
        {/* tabs */}
        <nav class="flex -mb-px space-x-10 overflow-x-auto scrollbar-hide">
          {menuList.map((menu, index) => (
            <button
              onClick={() => setCurrentIndex(index)}
              class={`py-4 text-sm font-medium  ${
                currentIndex === index
                  ? "text-brandOrange border-brandOrange border-b-2"
                  : "text-blackColor"
              } transition-all duration-200   whitespace-nowrap`}
            >
              {menu}
            </button>
          ))}
        </nav>
        {/* account */}
        {currentIndex === 0 && <PersonalAccountComponent />}
        {/* personal measurement */}
        {currentIndex === 1 && <PersonalMeasurementComponent />}
        {/* subscription */}
        {currentIndex === 2 && <SubscriptionManagementComponent />}
        {/* update Password */}
        {currentIndex === 3 && <UpdatePasswordComponent />}
      </div>
    </BaseDashboardNavigation>
  );
};

export default SettingsPage;
