import React, { useEffect, useState } from "react";
import BaseDashboardNavigation from "../../../generalComponents/BaseDashboardNavigation";
// import MeasurementProfileDetails from "../../../generalComponents/MeasurementProfileDetails";
// import UserInformationBox from "../../../generalComponents/UserInformationBox";
// import FeedTiles from "../../../generalComponents/FeedTiles";
// import { format, formatDistanceToNow } from "date-fns";
// import Loader from "../../../generalComponents/Loader";
// import useGetFeedsManager from "../../admin/feed/controllers/getListOfFeedsController";
// import ErrorManager from "../../../generalComponents/ErrorManager";
// import usePersonalMeasurementManager from "../../settings/controllers/getPersonalMeasurementController";
// import { useNavigate } from "react-router-dom";
// import useGetProfileHistoryManager from "../../admin/profiles/controllers/getProfileHistoryController";

const Dashboard = () => {
  //   function formatDateAgo(date) {
  //     const options = { addSuffix: true };
  //     return formatDistanceToNow(new Date(date), options);
  //   }
  //   const formatDate = (dateString) => {
  //     const date = new Date(dateString);
  //     return format(date, "MMMM d, yyyy");
  //   };
  //   const [currentIndex, setCurrentIndex] = useState(0);
  //   const [historyIndex, setHistoryIndex] = useState(0);
  //   const [currentMetricIndex, setCurrentMetricsIndex] = useState(0);
  //   const [getHistory, setGetHistory] = useState(false);
  //   const [currentProfile, setCurrentProfile] = useState("");
  //   const [historyMode, setHistoryMode] = useState(false);
  //   const navigate = useNavigate();

  //   const {
  //     isLoading: loadingHistory,
  //     data: history,
  //     isError: historyHasError,
  //     error: historyError,
  //   } = useGetProfileHistoryManager(currentProfile, getHistory);
  //   const { isError, data, error, isLoading } = useGetFeedsManager();
  //   const {
  //     isLoading: loadingProfile,
  //     error: profileError,
  //     data: profile,
  //     isSuccess,
  //   } = usePersonalMeasurementManager();
  //   useEffect(() => {
  //     if (!loadingProfile && isSuccess) {
  //       setGetHistory(true);
  //       setCurrentProfile(profile.data.id);
  //     }
  //   }, [profile, loadingProfile, isSuccess]);

  //   if (isLoading || loadingProfile) {
  //     return <Loader />;
  //   }

  //   if (isError || profileError) {
  //     return (
  //       <div>{isError && <ErrorManager errorMessage={error.message} />}</div>
  //     );
  //   }

  return (
    <BaseDashboardNavigation title={"Dashboard"} hideSearch={true}>
      <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-[46px] space-y-10 md:space-y-0 relative h-full">
        {/* left side */}

        <div className="md:h-[80vh] md:overflow-y-scroll scrollbar-hide mr-7 relative md:mr-0">
          {/* analytics */}
          {/* <div className="flex flex-col md:flex-row justify-between  text-white md:space-x-[13px] space-y-[13px] md:space-y-0 py-1 mb-[65px] md:mb-[40px] ">
            <div
              className={`hover:shadow-xl duration-150 h-[127px] rounded-[20px]  bg-offCoffee p-8 w-full  flex flex-col justify-center`}
            >
              <p className="text-30px font-semibold ">
                {profile.data.totalProfiles}
              </p>
              <p className="text-16px font-semibold ">Total Profiles</p>
            </div>
            <div className="hover:shadow-xl duration-150 h-[127px] rounded-[20px] bg-brandOrange p-8  w-full flex flex-col justify-center">
              <p className="text-30px font-semibold ">
                {profile.data.forYouProfiles}
              </p>
              <p className="text-16px font-semibold ">For You Profiles</p>
            </div>
            <div className=" hover:shadow-xl duration-150 h-[127px] rounded-[20px] bg-brandGreen p-8 w-full   flex flex-col justify-center">
              <p className="text-30px font-semibold ">21</p>
              <p className="text-16px font-semibold ">Total Shares</p>
            </div>
          </div> */}
          {/* <UserInformationBox
            userDetails={profile.data}
            onClick={() => navigate("/dashboard/settings?tab=1")}
            inHistoryMode={historyMode}
            onHistoryClick={() => setHistoryMode(!historyMode)}
          /> */}
          {/* <div>
            {historyMode ? (
              loadingHistory ? (
                <Loader />
              ) : history.data.length ? (
                <div>
                  <div className="flex items-center justify-normal carousel rounded-box">
                    {history.data.map((historyItem, index) => (
                      <button
                        onClick={() => setHistoryIndex(index)}
                        className={` p-2 mr-5 mb-5 text-blackColor hover:bg-brandOrange hover:shadow-xl hover:scale-x-110 duration-300 rounded-lg carousel-item ${
                          index === historyIndex
                            ? "bg-brandOrange shadow-xl"
                            : "bg-offCoffee"
                        }`}
                      >
                        {formatDateAgo(historyItem.createdAt)}
                      </button>
                    ))}
                  </div>
                  <MeasurementProfileDetails
                    unitName={history.data[historyIndex].unit}
                    isCM={history.data[historyIndex].unit}
                    measurements={history.data[historyIndex].measurement}
                    onUpdateIndex={(newIndex) =>
                      setCurrentMetricsIndex(newIndex)
                    }
                  />
                </div>
              ) : (
                <p className="text-blackColor">No history found</p>
              )
            ) : (
              <MeasurementProfileDetails
                unitName={profile.data.unit}
                measurements={profile.data.measurement}
                isCM={profile.data.unit}
                onUpdateIndex={() => {}}
              />
            )}
          </div> */}
        </div>

        {/* right side */}
        <div className="md:h-[80vh] md:overflow-y-scroll scrollbar-hide relative ">
          {/* fashion heading */}
          {/* <div className="flex justify-between items-center w-[90%] mb-[39px]">
            <p className="text-[30px] font-bold text-blackColor">
              Fashion Tips
            </p>
            <button
              onClick={() => navigate("/dashboard/feeds")}
              className="text-16px font-medium"
            >
              See All
            </button>
          </div> */}

          {/* fashion horizontal scrolling list */}
          {/* <div className="overflow-y-auto flex scrollbar-hide mb-[39px] ">
            {data.data.map((feed, index) => {
              return (
                <FeedTiles
                  isCurrent={currentIndex === index}
                  feedDetail={feed}
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
            {/* <div className=" rounded-[12px] p-5 md:p-6 mb-[24px] bg-lightGrey/20  mr-0  md:mr-0">
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

export default Dashboard;
