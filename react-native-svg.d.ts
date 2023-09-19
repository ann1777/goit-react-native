declare module 'react-native-svg' {
  import {SvgProps} from 'react-native-svg';

  export interface SvgProps {
    style?: ViewStyle;
    fill?: string;
    stroke?: string;
    backgroundColor?: string;
    width?: number;
    height?: number;
  }

  export const Circle: React.FC<SvgProps>;
  export const Path: React.FC<SvgProps>;

  export const Svg: ComponentType<SvgAddButtonProps>;
}
