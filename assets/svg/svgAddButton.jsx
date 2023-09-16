import * as React from "react";
import { ViewStyle } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";

interface SvgAddButtonProps {
  style?: ViewStyle;
}

const SvgAddButton: React.FC<SvgAddButtonProps> = ({
  style = {},
}) => {
  const {
    fill = "#ff6c00",
    stroke = "#ff6c00",
    backgroundColor = "#ffffff",
  } = style;

  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="none" style={style}>
      <Circle cx={12.5} cy={12.5} r={12} fill={backgroundColor} stroke={stroke} />
      <Path
        fill={fill}
        fillRule="evenodd"
        d="M13 6h-1v6H6v1h6v6h1v-6h6v-1h-6V6Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default SvgAddButton;
