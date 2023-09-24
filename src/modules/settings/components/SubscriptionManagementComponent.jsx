import React, { useEffect, useState } from "react";
import useGetListOfPlansManager from "../../admin/pricing/controller/getListOfPlansController";
import Loader from "../../../generalComponents/Loader";
import ErrorManager from "../../../generalComponents/ErrorManager";
import useGetUserSubscriptionManager from "../controllers/getUserSubscriptionController";
import useSubscriptionManager from "../controllers/subscriptionManagementController";
import CustomButton from "../../../generalComponents/Button";
import Switch from "react-switch";
import { toast } from "react-toastify";
import { format } from "date-fns";

const SubscriptionManagementComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isError, data, error, isLoading } = useGetListOfPlansManager();
  const [subscriptionId, setSubscriptionId] = useState("");
  const [subscriptionAction, setSubscriptionAction] = useState("");
  const [yearly, setYearly] = useState(false);
  const [isRenewCancel, setIsRenewCancel] = useState(false);
  const [isUpgrade, setIsUpgrade] = useState(false);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, "MMMM d, yyyy");
  };

  const {
    isError: currentSubHasError,
    data: currentSub,
    error: currentSubError,
    isLoading: loadingCurrentSub,
  } = useGetUserSubscriptionManager();

  useEffect(() => {
    if (!loadingCurrentSub && currentSub.subscriptions.length > 0) {
      setSubscriptionId(currentSub.subscriptions[0].id);

      if (currentSub.subscriptions[0].isExpired) {
        setSubscriptionAction("renew");
      } else {
        setSubscriptionAction("cancel");
      }
    }
  }, [loadingCurrentSub]);

  const handleSubmit = async () => {
    setIsUpgrade(true);
    const details = {
      planId: data.data[currentIndex].id,
      duration: yearly ? 12 : 1,
      path: "dashboard/settings",
    };
    await updateCaller(details);
    setIsUpgrade(false);
  };

  const renewCancelSubmit = async () => {
    setIsRenewCancel(true);
    if (currentSub.subscriptions[0].isExpired) {
      const details = {
        planId: currentSub.subscriptions[0].plan.id,
        duration: yearly ? 12 : 1,
        path: "dashboard/settings",
      };
      await updateCaller(details);
    } else {
      await updateCaller();
    }
    setIsRenewCancel(false);
  };

  const {
    updateCaller,
    data: updateData,
    isLoading: updatingSub,
    error: subUpdateError,
    isSuccess: subupdated,
  } = useSubscriptionManager(subscriptionId, subscriptionAction);
  useEffect(() => {
    if (subUpdateError) {
      toast.error(subUpdateError.message);
    }
    if (subupdated) {
      toast.success(updateData.message);
    }
  }, [subUpdateError, subupdated, updateData]);

  if (isLoading || loadingCurrentSub) {
    return <Loader />;
  }

  if (isError || currentSubHasError) {
    return (
      <div>
        {isError && <ErrorManager errorMessage={error.message} />}
        {currentSubHasError && (
          <ErrorManager errorMessage={currentSubError.message} />
        )}
      </div>
    );
  }
  return (
    <div className="rounded-[20px] max-w-full md:w-[40%]  mr-7 p-5 py-10 bg-lightGrey/20 md:h-[80vh]  overflow-y-auto scrollbar-hide">
      <p className="text-18px mb-10 font-bold">{`Subscription Management (${
        currentSub.subscriptions[0].isExpired
          ? `Expired`
          : currentSub.subscriptions[0].isCancelled
          ? `Ends`
          : `Renews`
      } ${
        currentSub.subscriptions[0].isExpired
          ? ""
          : formatDate(currentSub.subscriptions[0].end_date)
      })`}</p>

      {data.data.map((plan, index) => (
        <div className="flex flex-col items-end">
          <div
            className={` ${
              plan.id === currentSub.subscriptions[0].plan.id ? "" : "hidden"
            }    ${
              index === 0 ? "" : ""
            }  bg-white rounded-full mr-9 z-10 -mb-2.5 text-[10px] font-bold py-0.5 w-[110px]  px-4 text-blackColor  border border-lightGrey`}
          >
            CURRENT PLAN
          </div>
          <div
            onClick={() => {
              setCurrentIndex(index);
              setSubscriptionAction(
                plan.id === currentSub.subscriptions[0].plan.id
                  ? currentSub.subscriptions[0].isExpired
                    ? "renew"
                    : "cancel"
                  : "upgrade"
              );
            }}
            key={index}
            className={`rounded-[20px] p-5 w-full ${
              plan.id === currentSub.subscriptions[0].plan.id
                ? "bg-brandOrange border-lightGrey border-[2px] text-white"
                : `bg-white ${
                    currentIndex === index
                      ? `border-brandOrange`
                      : `border-lightGrey`
                  } text-blackColor`
            } flex items-center  border  shadow-xl mb-4 justify-between`}
          >
            <div>
              <p className="text-16px font-bold ">{plan.name}</p>
              <p className="text-13px ">
                {!plan.isFree
                  ? `₦${(plan.price * 12 - plan.discount / 100).toFixed(
                      2
                    )}  billed yearly`
                  : "Promo"}
              </p>
            </div>
            <p
              className={`text-20px font-bold ${
                plan.id === currentSub.subscriptions[0].plan.id
                  ? "text-white"
                  : "text-brandOrange "
              } `}
            >
              {plan.isFree ? "Free" : `₦${plan.price}`}{" "}
              <span
                className={`${plan.isFree ? "hidden" : ""} text-13px ${
                  plan.id === currentSub.subscriptions[0].plan.id
                    ? "text-white"
                    : "text-blackColor"
                } `}
              >
                /mo
              </span>
            </p>
          </div>
        </div>
      ))}

      <div
        className={`flex items-center justify-start w-full mt-8  ${
          data.data[currentIndex].id === currentSub.subscriptions[0].plan.id
            ? `hidden`
            : ""
        }`}
      >
        <CustomButton
          onClick={handleSubmit}
          buttonText={`Update Subscription`}
          isLoading={updatingSub && isUpgrade}
          className={`mr-3 md:mr-10`}
        />
        <div className={`flex items-center justify-start `}>
          <Switch
            id="yearly"
            checked={yearly}
            onChange={() => setYearly(!yearly)}
            onColor="#F6BD60"
            offColor="#014862"
            checkedIcon={false}
            uncheckedIcon={false}
            checkedHandleIcon={<div className="dot dot-on bg-brandOrange" />}
            uncheckedHandleIcon={<div className="dot dot-off bg-white" />}
          />
          <p className={`ml-3 font-medium `}> Yearly</p>
        </div>
      </div>
      {currentSub.subscriptions[0].isCancelled ? (
        <p className="text-brandRed mt-6 flex flex-col items-start">
          Your subscription is cancelled.{" "}
          <span>
            You can reactivate at the end of your current subscription period.
          </span>
        </p>
      ) : (
        <div
          className={`flex items-center justify-start mt-4 ${
            currentSub.subscriptions[0].plan.name === "Personal" &&
            currentSub.subscriptions[0].plan.isFree
              ? "hidden"
              : ""
          } `}
        >
          <CustomButton
            onClick={renewCancelSubmit}
            isLoading={isRenewCancel && updatingSub}
            buttonText={
              currentSub.subscriptions[0].isExpired
                ? `Renew Subscription`
                : `Cancel Subscription`
            }
            className={"mr-10"}
          />
          <div
            className={`flex items-center justify-start ${
              currentSub.subscriptions[0].isExpired ? `` : `hidden`
            }`}
          >
            <Switch
              id="yearly"
              checked={yearly}
              onChange={() => setYearly(!yearly)}
              onColor="#F6BD60"
              offColor="#014862"
              checkedIcon={false}
              uncheckedIcon={false}
              checkedHandleIcon={<div className="dot dot-on bg-brandOrange" />}
              uncheckedHandleIcon={<div className="dot dot-off bg-white" />}
            />
            <p className={`ml-3 font-medium`}> Yearly</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubscriptionManagementComponent;
