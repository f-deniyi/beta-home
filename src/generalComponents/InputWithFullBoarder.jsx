import React from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";

const InputWithFullBoarder = ({
  id,
  type,
  value,
  onChange,
  label,
  checked,
  onClick,
  className,
  hasSuffix,
  placeholder,
  row = "10",
  icon,
  accept,
  isTextArea = false,
  ...props
}) => {
  return (
    <div className="flex flex-col mb-4">
      <label className="text-13px md:text-16px font-semibold mb-2" htmlFor={id}>
        {label}
      </label>
      {isTextArea ? (
        <textarea
          id={id}
          className={`border border-lightGrey bg-lightGrey/30 p-2 rounded-md ${className} outline-none focus:outline-none `}
          cols="30"
          rows={row}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...props}
        ></textarea>
      ) : hasSuffix ? (
        <div
          className={`border border-lightGrey bg-lightGrey/30 p-2 rounded-md placeholder:text-[12px] ${className} outline-none focus:outline-none flex items-center justify-between `}
        >
          <input
            onClick={onClick}
            type={type}
            placeholder={placeholder}
            id={id}
            accept={accept}
            checked={checked}
            color="white"
            value={value}
            onChange={onChange}
            {...props}
            className={` bg-transparent outline-none focus:outline-none w-full placeholder:text-[12px] mr-4 `}
          />{" "}
          <div>{icon}</div>
        </div>
      ) : (
        <input
          onClick={onClick}
          type={type}
          id={id}
          accept={accept}
          placeholder={placeholder}
          checked={checked}
          color="white"
          value={value}
          onChange={onChange}
          {...props}
          className={
            type !== "password" &&
            `border border-lightGrey bg-lightGrey/30 p-2 rounded-md ${className} placeholder:text-[12px] outline-none focus:outline-none `
          }
        />
      )}
    </div>
  );
};

export default InputWithFullBoarder;
