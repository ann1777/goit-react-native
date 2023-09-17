import React from "react";
import { ViewStyle } from "react-native";
import { Circle, Path, Svg } from "react-native-svg";

interface SvgAddButtonProps {
  style?: ViewStyle;
  fill?: string;
  stroke?: string;
  backgroundColor?: string;
  width?: number;
  height?: number;
}

const SvgAddButton: React.FC<SvgAddButtonProps> = ({
  style = {},
  fill = "#ff6c00",
  stroke = "#ff6c00",
  backgroundColor = "#ffffff",
  width = 25,
  height = 25,
}) => {
  return (
    <Svg width={width} height={height} fill="none" {...style}>
      <Circle
        cx={width / 2}
        cy={height / 2}
        r={width / 2}
        fill={backgroundColor}
        stroke={stroke}
      />
      <Path
        fill={fill}
        fillRule="evenodd"
        d={`M${width / 2} ${height / 4}h-${width / 4}v${height / 2}h${
          width / 2
        }v-${height / 2}h-${width / 4}Z`}
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default SvgAddButton;
