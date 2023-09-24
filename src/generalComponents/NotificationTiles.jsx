import React from "react";

const NotificationTiles = ({ details }) => {
  return (
    <div className="bg-white rounded-[15px] shadow-md flex justify-start w-full items-center p-2 mb-2">
      <p className="h-[57px] w-[57px] aspect-square rounded-[13px] flex items-center justify-center text-[32px] font-extrabold justify-items-center text-white mr-4 bg-offCoffee">
        {details.title.charAt(0)}
      </p>
      <div>
        <p className="text-13px font-bold mb-0.5">{details.title}</p>
        <p className="text-13px leading-tight">{details.message}</p>
      </div>
    </div>
  );
};

export default NotificationTiles;
