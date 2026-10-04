import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import { SCREEN_WIDTH } from '../../helper';

const Slider = ({
  data = [],
  width = SCREEN_WIDTH,
  height = SCREEN_WIDTH * 0.35,
  autoPlay = true,
  loop = true,
  renderItem,        // dynamic UI from parent
  mode = "parallax", //parallax
  parallaxScrollingOffset = -10,
  parallaxScrollingScale = 1,
  style={
        width: '100%',
        alignSelf: "center",
      },
      onProgressChange
}) => {
  return (
      <Carousel
        width={width}
        height={height}
        data={data}
        autoPlay={autoPlay}
        loop={loop}
        scrollAnimationDuration={900}
        renderItem={renderItem} // Dynamic Component
        mode={mode}
        modeConfig={{
          parallaxScrollingOffset: parallaxScrollingOffset,  // GAP between items
          parallaxScrollingScale: parallaxScrollingScale,  // scale effect
        }}
        style={style}
        onProgressChange={onProgressChange}
      />
  );
};

export default Slider;
