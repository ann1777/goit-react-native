declare module "svgAddButton" {
  import React from "react";
  import { ViewStyle } from "react-native";
  import { SvgProps } from "react-native-svg";

  interface SvgAddButtonProps extends SvgProps {
    style?: ViewStyle;
  }

  const SvgAddButton: React.FC<SvgAddButtonProps>;
  export default SvgAddButton;
}
