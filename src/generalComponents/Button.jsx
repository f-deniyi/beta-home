import React from "react";

const CustomButton = ({
  buttonText,
  textColor,
  className,
  onClick,
  buttonColor,
  radius,
  isLoading,
  type,
  loader,
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-${buttonColor ?? "brandYellow"
        } py-[6px] md:py-[8px] px-[14px] md:px-[25px] font-medium  hover:shadow-xl hover:scale-y-105 duration-300 text-${!textColor ? "blackColor" : textColor
        } rounded-${radius ?? "full"} ${className}`}
      {...props}
    >
      {isLoading ? loader ?? "loading..." : buttonText}
    </button>
  );
};

export default CustomButton;
