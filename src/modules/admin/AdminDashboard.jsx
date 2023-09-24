import React, { useState } from "react";

import BaseDashboardNavigation from "../../generalComponents/BaseDashboardNavigation";

import { format } from "date-fns";
// import FewDataTable from "../../generalComponents/FewDataTable";

import ErrorManager from "../../generalComponents/ErrorManager";
import Loader from "../../generalComponents/Loader";
// import useGetAnalytics from "./profiles/controllers/getAnalytics";

import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, "MMMM d, yyyy");
  };
  const [currentIndex, setCurrentIndex] = useState(0);

  // const { isError, data, isSuccess, error, isLoading } = useGetFeedsManager();

  // const {
  //   data: analytics,
  //   error: analyticsError,
  //   isError: analyticsHasError,
  //   isLoading: loadingAnalytics,
  // } = useGetAnalytics();

  const navigate = useNavigate();

  // if (isLoading) {
  //   return <Loader />;
  // }

  // if (isSuccess && currentPostId !== data.data[currentIndex].id) {
  //   setCurrentPostId(data.data[currentIndex].id);
  // }

  // if (isError) {
  //   return (
  //     <div>{isError && <ErrorManager errorMessage={error.message} />}</div>
  //   );
  // }
  return (
    <BaseDashboardNavigation title={"Admin Dashboard"} hideSearch={true}>
      <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-[46px] space-y-10 md:space-y-0 relative h-full">
        {/* left side */}

        <div className="md:h-[80vh] md:overflow-y-scroll scrollbar-hide mr-7 relative md:mr-0">
          {/* analytics */}
          {/* <div>
            <div className="flex flex-col md:flex-row justify-between  text-white md:space-x-[13px] space-y-[13px] md:space-y-0 py-1 mb-[45px] md:mb-[10px] ">
              <div className="hover:shadow-xl duration-150 h-[127px] rounded-[20px] bg-offCoffee p-8 w-full  flex flex-col justify-center">
                <p className="text-30px font-semibold ">23</p>
                <p className="text-16px font-semibold ">Total Users</p>
              </div>
              <div className="hover:shadow-xl duration-150 h-[127px] rounded-[20px] bg-brandOrange p-8  w-full flex flex-col justify-center">
                <p className="text-30px font-semibold ">34</p>
                <p className="text-16px font-semibold ">Total Subscriptions</p>
              </div>
              <div className="hover:shadow-xl duration-150 h-[127px] rounded-[20px] bg-brandGreen p-8 w-full   flex flex-col justify-center">
                <p className="text-30px font-semibold ">34</p>
                <p className="text-16px font-semibold ">Total Profiles</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between  text-white md:space-x-[13px] space-y-[13px] md:space-y-0 py-1 mb-[65px] md:mb-[40px] ">
              <div className="hover:shadow-xl duration-150 h-[127px] rounded-[20px] bg-offCoffee p-8 w-full  flex flex-col justify-center">
                <p className="text-30px font-semibold ">23</p>
                <p className="text-16px font-semibold ">Total Feeds</p>
              </div>
              <div className="hover:shadow-xl duration-150 h-[127px] rounded-[20px] bg-brandOrange p-8  w-full flex flex-col justify-center">
                <p className="text-30px font-semibold ">42</p>
                <p className="text-16px font-semibold ">Active Subscriptions</p>
              </div>
              <div className="hover:shadow-xl duration-150 h-[127px] rounded-[20px] bg-brandGreen p-8 w-full   flex flex-col justify-center">
                <p className="text-30px font-semibold ">23</p>
                <p className="text-16px font-semibold ">
                  Expired Subscriptions
                </p>
              </div>
            </div>
          </div> */}

          {/* List of tables */}
          {/* <div className="mb-5 mr-7  md:mr-0 flex w-full items-end justify-between">
            <p className="text-30px font-bold text-blackColor">Profiles</p>
            <button
              onClick={() => navigate("/admin/all-profiles")}
              className=" text-16px font-normal mb-3"
            >
              See All
            </button>
          </div> */}
          {/* Profile List */}
          {/* <FewDataTable /> */}
        </div>

        {/* right side */}
        <div className="md:h-[80vh] md:overflow-y-scroll scrollbar-hide relative text-blackColor">
          {/* fashion heading */}
          {/* <div className="flex justify-between items-center w-[90%] mb-[39px]">
            <p className="text-[30px] font-bold text-blackColor">
              Fashion Tips
            </p>
            <p className="text-16px font-medium">See All</p>
          </div> */}

          {/* fashion horizontal scrolling list */}
          {/* <div className="overflow-y-auto flex scrollbar-hide mb-[39px] ">
            {data.data.map((feed, index) => {
              return (
                <FeedTiles
                  feedDetail={feed}
                  isCurrent={index === currentIndex}
                  onClick={() => setCurrentIndex(index)}
                />
              );
            })}
          </div> */}

          {/* feed details */}
          <div className="w-[90%] mb-[39px] ">
            {/* <div className="mb-5 mr-7  md:mr-0">
              <p className="text-30px font-bold text-blackColor">
                {data.data[currentIndex].title}
              </p>
              <p className=" text-16px font-normal mb-3">
                {formatDate(data.data[currentIndex].schedule)}
              </p>
              <div className="flex space-x-1">
                {data.data[currentIndex].tags.map((tag) => (
                  <p className="bg-offCoffee rounded-[12px] font-medium py-0 px-4 text-blackColor">
                    {tag}
                  </p>
                ))}
              </div>
            </div> */}

            {/* Display media if available */}
            {/* {data.data[currentIndex].media.length > 0 && (
              <div className="carousel w-full ">
                {data.data[currentIndex].media.map((mediaItem) => (
                  <div
                    key={mediaItem._id}
                    className="mb-4 carousel-item w-full "
                  >
                    {mediaItem.type === "image" ? (
                      <img
                        src={mediaItem.url}
                        alt="Feed Media"
                        className="w-full h-auto object-contain rounded-lg"
                      />
                    ) : (
                      <video
                        src={mediaItem.url}
                        controls
                        className="w-full h-auto object-contain"
                      />
                    )}
                  </div>
                ))}
              </div>
            )} */}

            {/* text area */}
            {/* <div className=" rounded-[12px] p-5 md:p-10 mb-[24px] bg-lightGrey/20  mr-0  md:mr-0">
              <p className=" text-16px font-normal mb-3">
                {data.data[currentIndex].description}
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </BaseDashboardNavigation>
  );
};

export default AdminDashboard;
