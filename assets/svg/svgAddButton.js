"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_svg_1 = require("react-native-svg");
const SvgAddButton = ({ backgroundColor = '#ffffff', width = 25, height = 25, fill = '#ff6c00', stroke = '#ff6c00', style, }) => {
    return (<react_native_svg_1.Svg width={width} height={height} fill="none" style={style}>
      <react_native_svg_1.Circle cx={width / 2} cy={height / 2} r={width / 2} fill={backgroundColor} stroke={stroke}/>
      <react_native_svg_1.Path fill={fill} fillRule="evenodd" d={`M${width / 2} ${height / 4}h-${width / 4}v${height / 2}h${width / 2}v-${height / 2}h-${width / 4}Z`} clipRule="evenodd"/>
    </react_native_svg_1.Svg>);
};
exports.default = SvgAddButton;
