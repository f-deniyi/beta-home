import React, { useState } from "react";
import NotificationTiles from "../../generalComponents/NotificationTiles";
import useGetNotifications from "./controllers/getNotificationsController";
import Loader from "../../generalComponents/Loader";
import ErrorManager from "../../generalComponents/ErrorManager";
import { isToday, isYesterday, format } from "date-fns";

const NotificationList = ({ showNotification }) => {
  const notificationList = [1, 2, 3, 4];
  const { data, isLoading, isError, error, isSuccess } = useGetNotifications();
  let groupedNotifications;
  const groupNotificationsByDate = (notifications) => {
    const groupedNotifications = [];

    notifications.forEach((notification) => {
      const createdAt = new Date(notification.createdAt);

      if (isToday(createdAt)) {
        const todayGroup = groupedNotifications.find(
          (group) => group.date === "Today"
        );
        if (todayGroup) {
          todayGroup.notifications.push(notification);
        } else {
          groupedNotifications.push({
            date: "Today",
            notifications: [notification],
          });
        }
      } else if (isYesterday(createdAt)) {
        const yesterdayGroup = groupedNotifications.find(
          (group) => group.date === "Yesterday"
        );
        if (yesterdayGroup) {
          yesterdayGroup.notifications.push(notification);
        } else {
          groupedNotifications.push({
            date: "Yesterday",
            notifications: [notification],
          });
        }
      } else {
        const formattedDate = format(createdAt, "MMM d");
        const existingGroup = groupedNotifications.find(
          (group) => group.date === formattedDate
        );
        if (existingGroup) {
          existingGroup.notifications.push(notification);
        } else {
          groupedNotifications.push({
            date: formattedDate,
            notifications: [notification],
          });
        }
      }
    });

    return groupedNotifications;
  };

  if (isLoading) {
    return <div></div>;
  }
  if (isSuccess) {
    groupedNotifications = groupNotificationsByDate(data.data);
  }

  if (isError) {
    return (
      <div className="m-auto">
        <ErrorManager errorMessage={error.message} />
      </div>
    );
  }
  return (
    <div
      className={`max-w-[465px] rounded-[20px] max-h-[80vh]  bg-whiteColor shadow-lg z-100 p-10 top-28 fixed transition-transform transform-gpu ${
        showNotification ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <p className="text-[30px] font-bold text-blackColor mb-8">
        Notifications
      </p>
      <div className="md:max-h-[55vh]  overflow-y-auto scrollbar-hide">
        {groupedNotifications.map((group) => (
          <div key={group.date}>
            <p className="font-bold text-[20px] mt-8 mb-5">{group.date}</p>

            <div className="bg-lightGrey/30 rounded-[30px] w-full  p-5">
              {group.notifications.map((notification, index) => {
                return <NotificationTiles key={index} details={notification} />;
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationList;
