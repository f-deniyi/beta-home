import React, { useEffect, useRef, useState } from "react";
import InputWithFullBoarder from "../../../generalComponents/InputWithFullBoarder";
import CustomButton from "../../../generalComponents/Button";
import Loader from "../../../generalComponents/Loader";
import ErrorManager from "../../../generalComponents/ErrorManager";
import useFileUpload from "../../fileupload/fileUploadController";
import useUpdateProfileManager from "../controllers/updateUserDetailController";
import useGetUserDetailsManager from "../controllers/get_UserDetails_controller";
import { Country, State, City } from "country-state-city";
import { toast } from "react-toastify";
import GlobalVariables from "../../../constants/GlobalVariables";
import useDeleteAccountManager from "../controllers/deleteAccountController";

const PersonalAccountComponent = () => {
  const {
    data: userProfile,
    isError: userLoadError,
    error: userProfileError,
    isLoading: loadingUser,
  } = useGetUserDetailsManager();

  const {
    deleteCaller,
    isLoading: deleting,
    data: deleteData,
    isSuccess: deleted,
    error: deleteError,
  } = useDeleteAccountManager();

  useEffect(() => {
    if (deleted) {
      toast.success(deleteData.message);
    }
    if (deleteError) {
      toast.error(deleteError.message);
    }
  }, [deleteError, deleted, deleteData]);

  const [editProfile, setEditProfile] = useState(true);
  const [fullName, setFullName] = useState(
    userProfile.data.user.fullname ?? ""
  );
  const [username, setUsername] = useState(
    userProfile.data.user.username ?? ""
  );
  const [state, setState] = useState(userProfile.data.user.state ?? "");
  const [phone, setPhone] = useState(userProfile.data.user.phone ?? "");
  const [birthday, setBirthday] = useState(userProfile.data.user.dob.day ?? "");
  const [birthMonth, setBirthMonth] = useState(
    userProfile.data.user.dob.month ?? ""
  );
  const [country, setCountry] = useState(userProfile.data.user.country ?? "");
  const [city, setCity] = useState(userProfile.data.user.city ?? "");

  const [sex, setSex] = useState("male");

  const { isLoading, error, data, isError, isSuccess, updateCaller } =
    useUpdateProfileManager();

  const updateProfile = async () => {
    const details = !userProfile.data.user.username
      ? {
          fullname: fullName,
          username: username,
          phone: phone,
          sex: sex,
          // profile_picture: profile_picture,
          country: country,
          state: state,
          city: city,
          dob: {
            month: birthMonth,
            day: parseInt(birthday),
          },
        }
      : {
          fullname: fullName,
          phone: phone,
          sex: sex,
          // profile_picture: profile_picture,
          country: country,
          state: state,
          city: city,
          dob: {
            month: birthMonth,
            day: parseInt(birthday),
          },
        };
    // await updateCaller(details);
    const areDetailsUpdated = Object.keys(details).some((key) => {
      const updatedValue = details[key];
      const originalValue = userProfile.data.user[key];
      return updatedValue !== originalValue;
    });
    if (areDetailsUpdated) {
      await updateCaller(details);
    } else {
      // Display a message to the user that no changes were made
      console.log("No changes were made.");
    }
  };

  const {
    error: fileUploadError,
    handleFileUpload: uploadFile,
    isLoading: fileLoading,
    data: uploadUrl,
  } = useFileUpload();

  const [selectedFileName, setSelectedFileName] = useState("");
  // Array of days in a month
  const daysInMonth = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  // Array of months
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Now you can use these arrays in your React components

  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    setSelectedFileName(file.name);
    if (file) {
      await handleMainPictureUpload(file);
    }
  };

  const handleMainPictureUpload = (picture) => {
    return new Promise(async (resolve, reject) => {
      try {
        const fileUrl = await uploadFile(picture);
        console.log(`this is the url ${fileUrl}`);

        resolve(fileUrl); // Resolve the promise with the photo value
        setSelectedFileName("");
        await updateCaller({ profile_picture: fileUrl });
        return fileUrl;
      } catch (error) {
        console.error("Photo upload error:", error);

        reject(error); // Reject the promise with the error
      } finally {
      }
    });
  };
  useEffect(() => {
    if (isSuccess) {
      toast.success(data.message);
    }
    if (isError) {
      toast.error(error.message);
    }
  }, [isSuccess, data, isError, error]);

  // Fetch the list of all countries and states
  const [selectedCountryCode, setSelectedCountryCode] = useState("");
  const [selectedStateCode, setSelectedStateCode] = useState("");
  const allCountries = Country.getAllCountries();
  const getStatesByCountryCode = (countryCode) => {
    const states = State.getStatesOfCountry(countryCode);
    return states;
  };
  const states = getStatesByCountryCode(selectedCountryCode);

  const getcitiesOfState = (countryCode, stateCode) => {
    const cities = City.getCitiesOfState(countryCode, stateCode);
    return cities;
  };
  const allcities = getcitiesOfState(selectedCountryCode, selectedStateCode);

  if (loadingUser) {
    return <Loader />;
  }

  if (userLoadError) {
    return (
      <div className="m-auto">
        {userLoadError && (
          <ErrorManager errorMessage={userProfileError.message} />
        )}
      </div>
    );
  }
  return (
    <div className="rounded-[20px] max-w-full md:w-[40%]  mr-7 p-5 py-10 bg-lightGrey/20 md:h-[80vh]  overflow-y-auto scrollbar-hide">
      <p className="text-18px mb-10 font-bold">Account Management</p>

      <div className="flex flex-col md:flex-row items-center mb-6">
        <div className="h-24 w-24 mb-4 md:mb-0">
          <img
            className="aspect-square object-cover rounded-full"
            src={
              userProfile.data.user.profile_picture
                ? userProfile.data.user.profile_picture
                : GlobalVariables.defaultProfilePicture
            }
            alt="profile avatar"
          />
        </div>
        <div className="flex items-center justify-start ml-4 w-full ">
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <CustomButton
            isLoading={fileLoading}
            onClick={handleClick}
            className={"mr-4"}
            buttonText={"Profile Picture"}
          />

          <p className=" text-13px  font-normal">
            {selectedFileName ?? "Upload image"}
          </p>
        </div>
      </div>

      <InputWithFullBoarder
        label={"Full Name"}
        value={fullName || userProfile.data.user.fullname}
        id={"fullname"}
        type={"text"}
        onChange={(e) => setFullName(e.target.value)}
      />
      {!userProfile.data.user.username && (
        <InputWithFullBoarder
          label={"Username"}
          value={username || userProfile.data.user.username}
          id={"username"}
          type={"text"}
          onChange={(e) => setUsername(e.target.value)}
        />
      )}
      <p className="text-13px md:text-16px font-semibold mb-2">Sex</p>
      <select
        className={`border border-lightGrey w-full mb-4 bg-lightGrey/30 p-2 rounded-md outline-none focus:outline-none `}
        onChange={(e) => setSex(e.target.value)}
        value={sex || userProfile.data.user.sex}
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <p className="text-13px md:text-16px font-semibold mb-2">Date of Birth</p>
      <div className="flex items-center justify-normal">
        <select
          className={`border border-lightGrey w-full mr-3 mb-4 bg-lightGrey/30 p-2 rounded-md outline-none focus:outline-none `}
          onChange={(e) => setBirthday(e.target.value)}
          value={birthday || userProfile.data.user.dob.day}
        >
          {daysInMonth.map((day, index) => (
            <option key={index} value={day}>
              {day}
            </option>
          ))}
        </select>
        <select
          className={`border border-lightGrey  w-full mb-4 bg-lightGrey/30 p-2 rounded-md outline-none focus:outline-none `}
          onChange={(e) => setBirthMonth(e.target.value)}
          value={birthMonth || userProfile.data.user.dob.month}
        >
          {months.map((month, index) => (
            <option key={index} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>

      <InputWithFullBoarder
        label={"Phone Number"}
        value={phone || userProfile.data.user.phone}
        id={"phone"}
        type={"number"}
        onChange={(e) => setPhone(e.target.value)}
      />

      {/* Country Dropdown */}
      <div className="flex flex-col mb-1">
        <label
          className="text-13px md:text-16px font-semibold mb-2"
          htmlFor={"country"}
        >
          Country
        </label>
        <select
          className={`border border-lightGrey w-full mb-4 bg-lightGrey/30 p-2 rounded-md outline-none focus:outline-none `}
          onChange={(e) => {
            setCountry(e.target.value);
            // Find the corresponding ISO code based on the selected country name
            const selectedCountryData = allCountries.find(
              (countryData) => countryData.name === e.target.value
            );
            if (selectedCountryData) {
              setSelectedCountryCode(selectedCountryData.isoCode);
            } else {
              setSelectedCountryCode(""); // Reset the ISO code if the country is not found
            }
          }}
          value={country}
        >
          <option value="">Select a country</option>
          {allCountries.map((countryData) => (
            <option key={countryData.isoCode} value={countryData.name}>
              {countryData.name}
            </option>
          ))}
        </select>
      </div>

      {/* State Dropdown */}
      <div className="flex flex-col mb-1">
        <label
          className="text-13px md:text-16px font-semibold mb-2"
          htmlFor={"state"}
        >
          State
        </label>
        <select
          value={state}
          onChange={(e) => {
            setState(e.target.value);
            const selectedState = states.find(
              (state) => state.name === e.target.value
            );
            if (selectedState) {
              setSelectedStateCode(selectedState.isoCode); // Update the selected state code
            } else {
              setSelectedStateCode(""); // Handle the case where no matching state is found
            }
          }}
          className={`border border-lightGrey w-full mb-4 bg-lightGrey/30 p-2 rounded-md outline-none focus:outline-none `}
        >
          <option value="">Select State</option>
          {states.map((state, index) => (
            <option key={index} value={state.name}>
              {state.name}
            </option>
          ))}
        </select>
      </div>

      {/* City Dropdown */}
      <div className="flex flex-col mb-4">
        <label
          className="text-13px md:text-16px font-semibold mb-2"
          htmlFor={"city"}
        >
          City
        </label>
        <select
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          className={`border border-lightGrey w-full mb-4 bg-lightGrey/30 p-2 rounded-md outline-none focus:outline-none `}
        >
          <option value="">Select City</option>
          {allcities.map((city, index) => (
            <option key={index} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </div>

      <CustomButton
        isLoading={isLoading}
        onClick={updateProfile}
        buttonText={"Update Profile"}
        className={"mr-5"}
      />
      <CustomButton
        isLoading={deleting}
        onClick={() => deleteCaller()}
        buttonText={"Delete Account"}
        textColor={"white"}
        buttonColor={"brandRed"}
      />
      {/* <button className="rounded-[20px] py-1.5 px-5 mr-3 mb-32  text-white font-medium">
              Delete Account
            </button> */}
    </div>
  );
};

export default PersonalAccountComponent;
