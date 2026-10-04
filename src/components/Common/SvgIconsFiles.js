import React from "react";
import SvgIconFiles from "../../images/svg";
import { useThemeHelper } from '../../helper';
const SvgIcons = (props) => {
    const { colors } = useThemeHelper();
  const { name, size = 30, color = colors.primary_color } = props
  const IconComponent = SvgIconFiles[name];
  return IconComponent ? <IconComponent width={size} height={size} color={color} /> : null;
}
export default SvgIcons;