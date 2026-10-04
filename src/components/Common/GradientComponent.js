import React,{useContext} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useThemeHelper } from '../../helper';
import { useTheme } from "../../theme/ThemeProvider";

const GradientComponent = ({styles={}, setColors = [], start = { x:0, y: 0 }, end = { x: 0, y: 1.4 }, children, onLayout }) => {
  const { colors } = useThemeHelper();
      const { dark } = useContext(useTheme);
  setColors =setColors.length != 0 ? setColors : [dark  ? colors.bg_box_color :colors.gradient_color1, dark  ? colors.bg_box_color : colors.gradient_color2] 
  return (
    <LinearGradient 
      colors={setColors} 
      start={start} 
      end={end} 
      style={styles}
      onLayout={onLayout}
    >
      {children}
    </LinearGradient>
  );
};

export default GradientComponent;
