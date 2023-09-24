import React, { useEffect, useState } from "react";
import InputWithFullBoarder from "../../../generalComponents/InputWithFullBoarder";
import MeasurementProfileDetails from "../../../generalComponents/MeasurementProfileDetails";
import UserInformationBoxWithBack from "../../../generalComponents/UserInformationBoxWithBack";
import MeasurementProfilesTiles from "../../../generalComponents/MeasurementProfilesTiles";
import useGetForYouProfilesManager from "../controllers/getForYouProfilesController";
import usePersonalMeasurementManager from "../controllers/getPersonalMeasurementController";
import Loader from "../../../generalComponents/Loader";
import ErrorManager from "../../../generalComponents/ErrorManager";
import useEditMeasurementProfileManager from "../controllers/editMeasurementProfileController";
import CustomButton from "../../../generalComponents/Button";
import useGetListOfMetricsManager from "../../admin/metrics/controllers/getListOfMetricsController";
import MetricsToggle from "../../../generalComponents/MetricsToggle";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for styling

const PersonalMeasurementComponent = () => {
  const [profileId, setProfileId] = useState("");

  const {
    isLoading: loadingForProfiles,
    isSuccess: gotForYouProfiles,
    error: forYouProfileError,
    data: forYouProfiles,
  } = useGetForYouProfilesManager();
  const {
    isError: listhasError,
    data: list,
    error: listError,
    isSuccess: gottenMetrics,
    isLoading: listLoading,
  } = useGetListOfMetricsManager();

  const {
    updateCaller,
    data: updateResponse,
    isLoading: upadateisLoading,
    isSuccess: updateSuccess,
    error: updateError,
  } = useEditMeasurementProfileManager(profileId);

  const { isLoading, isSuccess, error, data } = usePersonalMeasurementManager();
  const [cmMeasurement, setCMMeasurement] = useState(false);
  const [openMeasurement, setOpenMeasurement] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [measurementData, setMeasurementData] = useState([]);
  const [sexIndex, setSexIndex] = useState(0);
  const [currentMetricIndex, setCurrentMetricsIndex] = useState(0);
  const [nameLists, setNameLists] = useState([]);
  // Update measurementData when data is successfully fetched
  useEffect(() => {
    if (isSuccess && gottenMetrics) {
      setCMMeasurement(data.data.unit === "cm");
      const initialMeasurementData = data.data.measurement.map(
        (measurement) => ({
          // name: measurement.name,
          measurement: measurement.id,
          value: measurement.value || "",
        })
      );

      setNameLists(
        data.data.measurement.map((measurement) => ({
          name: measurement.name,
        }))
      );
      setMeasurementData(initialMeasurementData);
      // Store the measurement prop values
      setStoredMeasurement(initialMeasurementData);

      setSexIndex(data.data.sex === "male" ? 1 : 0);
      setProfileId(data.data.id);
    }
  }, [isSuccess, data, list, gottenMetrics]);

  const handleSubmit = async () => {
    const details = {
      fullname: data.data.fullname,
      email: data.data.email,
      sex: data.data.sex,
      phone: data.data.phone,
      allow_edit: false,
      unit: cmMeasurement ? "cm" : "inch",
      measurement: measurementData,
    };
    await updateCaller(details);
  };

  const formatValue = (value) => {
    if (data.data.unit === "cm") {
      if (!cmMeasurement) {
        // Convert from centimeters to inches
        return `${(value / 2.54).toFixed(2)} `;
      } else {
        // Keep the original value in centimeters
        return `${value} `;
      }
    } else {
      if (data.data.unit !== "cm") {
        if (cmMeasurement) {
          // Convert from inches to centimeters
          return `${(value * 2.54).toFixed(2)} `;
        } else {
          // Keep the original value in inches
          return `${value} `;
        }
      }
    }
  };
  const [storedMeasurement, setStoredMeasurement] = useState([]);

  // Function to update measurement values based on the unit of measurement
  const _updateMeasurementControllersValue = (isCM) => {
    const updatedData = storedMeasurement.map((measurement, index) => {
      const newValue = formatValue(measurement.value, !isCM); //now we are checking for inches and not cm anylonger
      return { ...measurement, value: newValue };
    });
    setMeasurementData(updatedData);
  };
  useEffect(() => {
    _updateMeasurementControllersValue(cmMeasurement);
  }, [cmMeasurement]);

  useEffect(() => {
    if (updateSuccess) {
      toast.success(updateResponse.message);
    }
    if (updateError) {
      toast.error(updateError.message);
    }
  }, [updateSuccess, updateError, updateResponse]);

  if (isLoading || loadingForProfiles || listLoading) {
    return <Loader />;
  }

  if (error || forYouProfileError || listhasError) {
    return (
      <div className="m-auto">
        {error && <ErrorManager errorMessage={error.message} />}
        {listhasError && <ErrorManager errorMessage={listError.message} />}
        {forYouProfileError && (
          <ErrorManager errorMessage={forYouProfileError.message} />
        )}
      </div>
    );
  }

  return (
    <div className="md:flex md:h-[70vh]">
      {/* personal profile measurement details */}
      <div className="rounded-[20px] max-w-full md:w-[30%]  mr-7  p-5 py-10 bg-lightGrey/20 md:h-[70vh]  overflow-y-auto scrollbar-hide ">
        <div className="w-full items-center justify-between flex">
          <p className="text-18px mb-10 font-bold">Profile Details</p>
          <MetricsToggle
            cmMeasurement={cmMeasurement}
            turnCMOff={() => setCMMeasurement(false)}
            turnCMOn={() => setCMMeasurement(true)}
          />
        </div>
        {measurementData.map((measurement, index) => (
          <InputWithFullBoarder
            key={index}
            label={`${
              nameLists[index].name.charAt(0).toUpperCase() +
              nameLists[index].name.slice(1)
            }`}
            onClick={() => setCurrentMetricsIndex(index)}
            value={measurement.value}
            onChange={(event) => {
              const updatedData = [...measurementData];
              updatedData[index].value = event.target.value;
              setMeasurementData(updatedData);
            }}
          />
        ))}

        <CustomButton
          onClick={handleSubmit}
          buttonText={"Update Measurement"}
          isLoading={upadateisLoading}
        />
      </div>

      {/* measurement Image */}
      <div className=" hidden md:flex  rounded-[12px] md:w-[20%]  p-5 md:p-10 mb-[24px] bg-lightGrey/20 h-[400px] md:h-[70vh] w-full mr-7 relative md:mr-8 ">
        <img
          className="object-contain h-full w-full"
          src={
            list.data[sexIndex].metric.measurements[currentMetricIndex]
              .measurement.image
          }
          alt=""
        />
      </div>

      {/* profiles scroll */}
      {forYouProfiles.data.profiles.length ? (
        !openMeasurement && (
          <div
            onClick={() => setOpenMeasurement(true)}
            className="overflow-y-hidden md:overflow-y-auto  overflow-x-auto md:overflow-x-hidden flex flex-col md:gap-y-4  md:w-[40%] scrollbar-hide mb-[39px] mt-[20px] relative md:h-[68vh] order-1 md:order-none"
          >
            <p className="text-18px mb-3 mt-10 md:mt-0 font-bold">
              For You Profiles
            </p>
            <div className="flex flex-row md:flex-col overflow-x-auto scrollbar-hide">
              {forYouProfiles.data.profiles.map((profile, index) => {
                return (
                  <MeasurementProfilesTiles
                    key={index}
                    isForYou={true}
                    profiles={profile}
                    onClick={() => setCurrentIndex(index)}
                  />
                );
              })}
            </div>
          </div>
        )
      ) : (
        <div className="md:w-[50%]">
          <p className="text-18px mb-3 mt-10 md:mt-0 font-bold">
            For You Profiles
          </p>

          <p className="w-full h-full text-center my-40 font-medium text-blackColor">
            No profile has been created for you
          </p>
        </div>
      )}

      {/* profiles details */}
      {openMeasurement && (
        <div className="flex flex-col md:h-[80vh] mt-14 md:w-[50%] md:overflow-y-scroll scrollbar-hide mr-7 relative md:mr-0 order-3 md:order-none">
          {/* user profile details sections */}
          <UserInformationBoxWithBack
            profiles={forYouProfiles.data.profiles[currentIndex]}
            onClick={() => setOpenMeasurement(false)}
          />

          {/* profile details */}
          <MeasurementProfileDetails
            isCM={forYouProfiles.data.profiles[currentIndex].unit}
            measurements={
              forYouProfiles.data.profiles[currentIndex].measurement
            }
          />
        </div>
      )}
    </div>
  );
};

export default PersonalMeasurementComponent;
