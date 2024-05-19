import React from "react";
import { FaSpinner } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

const Button = ({
  label,
  leftIcon,
  rightIcon,
  onclick,
  radius,
  classes,
  disable,
}) => {
  return (
    <button
      type="button"
      disabled={disable}
      className={twMerge(
        `inline-flex items-center bg-blue-700 px-5 py-2.5 text-center text-sm font-semibold text-white rounded-${radius} gap-2 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${classes} ${
          disable && "opacity-70"
        }`,
      )}
      onClick={onclick}
    >
      {leftIcon && leftIcon}
      {label}{" "}
      {disable == true && (
        <FaSpinner className="h-4 w-4 animate-spin text-gray-800 dark:text-gray-300" />
      )}
      {rightIcon && rightIcon}
    </button>
  );
};

export default Button;
