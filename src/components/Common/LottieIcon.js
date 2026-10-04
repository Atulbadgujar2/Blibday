import React from 'react';
import Lottie from 'lottie-react-native';

function LottieIcon(props) {
  const { style, source, loop = true, colorFilters = [] } = props;
  // colorFilters exp : [{ keypath: "Shape Layer 2", color: colors.forest_green }]
  return (
    <Lottie
      style={style}
      source={source}
      autoPlay
      loop={loop}
      colorFilters={colorFilters}
    />
  );
}

export default LottieIcon;
