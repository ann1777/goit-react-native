import React from "react";
import { IoAdd } from 'react-icons/io5';
import { ViewStyle } from "react-native";
import { SvgProps } from "react-native-svg";

interface SvgAddButtonProps extends SvgProps {
  style?: ViewStyle;
}

const SvgAddButton: React.FC<SvgAddButtonProps> = ({
  className,
  onClick,
  width = "24",
  height = "24",
}) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <IoAdd />
    </svg>
  );
};

export default SvgAddButton;
