import React from 'react';
import { ViewStyle } from 'react-native';
import { Circle, Path, Svg, SvgProps } from 'react-native-svg';


declare module 'react-native-svg' {
  interface SvgProps {
    cx?: number;
    cy?: number;
    r?: number;
    fillRule?: string;
    clipRule?: string;
  }
}

type SvgAddButtonProps = SvgProps & {
  backgroundColor?: string;
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
  style?: ViewStyle;
  d?: string;
};

const SvgAddButton: React.FC<SvgAddButtonProps> = ({
  backgroundColor = '#ffffff',
  width = 25,
  height = 25,
  fill = '#ff6c00',
  stroke = '#ff6c00',
  style,
}) => {
  return (
    <Svg width={width} height={height} fill="none" style={style as any}>
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
      d={`M${width / 2} ${height / 4}h-${width / 4}v${height / 2}h${width / 2}v-${height / 2}h-${width / 4}Z`}
      clipRule="evenodd"
    />
    </Svg>
  );
};

export default SvgAddButton;
