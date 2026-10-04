import React, { useMemo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import VectorIcons from './VectorIcons';
import { SF, SH, SW, useThemeHelper } from '../../helper';
import { Fonts } from '../../constants';

const Ratings = (props) => {
  const { colors } = useThemeHelper();

  const {
    rating = 0,                 // e.g. 4.3
    maxRating = 5,
    size = SF ? SF(20) : 20,    // replace SF(...) if you don't use it
    color = colors.secondary_color,          // active (filled) star color or colors.secondary_color
    inactiveColor = colors.bright_gray_dark,     // empty star color
    showNumber = true,
    reviews = null,
    iconFamily = 'FontAwesome',   // using AntDesign icons (star, staro)
    interactive = false,          //  allow tap
    onRate = () => { },           //  returns selected star index
  } = props;



  const styles = useMemo(() =>
    StyleSheet.create({
      wrapper: {
        alignItems: 'flex-start',
      },
      row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
      },
      icon: {
        marginHorizontal: 2,
      },
      iconContainer: {
        marginHorizontal: 0,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
      },
      iconAbsolute: {
        position: 'absolute',
        left: 0,
        top: 0,
      },
      meta: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 8,
      },
      ratingText: {
        fontSize: 15,
        color: colors.black,
        fontFamily: Fonts.Font_Medium
      },
      reviewsText: {
        fontSize: 15,
        color: colors.black,
        fontFamily: Fonts.Font_Medium
      },
    }),
    [colors],
  );

  const stars = [];

  for (let i = 1; i <= maxRating; i++) {
    // fill = fraction [0..1] of this star
    const fill = Math.min(1, Math.max(0, rating - (i - 1)));

    // full star
    if (fill >= 1) {
      stars.push(
        <TouchableOpacity
          key={i}
          disabled={!interactive}
          onPress={() => onRate(i)}
        >
          <VectorIcons
            key={i}
            iconFamily={iconFamily}
            name="star"
            size={size}
            color={color}
            style={styles.icon}
          />
        </TouchableOpacity>
      );
      continue;
    }

    // partial star (0 < fill < 1) - render empty star, overlay filled star clipped
    if (fill > 0) {
      stars.push(
        <TouchableOpacity
          key={i}
          disabled={!interactive}
          onPress={() => onRate(i)}
          activeOpacity={0.8}
        >
          <View key={i} style={[styles.iconContainer, { width: size, height: size }]}>
            {/* Empty star in background */}
            <VectorIcons
              iconFamily={iconFamily}
              name="star"
              size={size}
              color={inactiveColor}
              style={styles.iconAbsolute}
            />

            {/* Clipped filled star on top */}
            <View
              style={{
                width: size * fill,         // clip according to fraction
                overflow: 'hidden',
                position: 'absolute',
                left: 0,
                top: 0,
                height: size,
              }}
            >
              <VectorIcons
                iconFamily={iconFamily}
                name="star"
                size={size}
                color={color}
                style={styles.iconAbsolute}
              />
            </View>
          </View>
        </TouchableOpacity>
      );
      continue;
    }

    // empty star
    stars.push(
      <TouchableOpacity
        key={i}
        disabled={!interactive}
        onPress={() => onRate(i)}
      >
        <VectorIcons
          key={i}
          iconFamily={iconFamily}
          name="star"
          size={size}
          color={inactiveColor}
          style={styles.icon}
        />
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.row}>
        {stars}
        {showNumber && (
          <View style={styles.meta}>
            <Text style={styles.ratingText}>{Number(rating).toFixed(1)}</Text>
            {reviews != null && <Text style={styles.reviewsText}> ({reviews} Reviews)</Text>}
          </View>
        )}
      </View>
    </View>
  );
};


export default Ratings;
