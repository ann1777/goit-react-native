import React from 'react';
import { Path, Svg } from 'react-native-svg';

interface IconAddProps {
  width: number;
  height: number;
  fill: string;
  style?: object; // You can use the style prop
}

const IconAdd: React.FC<IconAddProps> = ({ width, height, fill, style }) => {
  return (
    <Svg width={width} height={height} fill="none" style={style}>
      <Path
        fill={fill}
        fillRule="evenodd"
        d="M13 6h-1v6H6v1h6v6h1v-6h6v-1h-6V6Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default IconAdd;
