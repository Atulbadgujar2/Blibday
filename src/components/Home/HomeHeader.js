import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { SF, SH, useThemeHelper } from '../../helper';
import { HomeScreenStyle, Styles } from '../../styles';
import { GradientComponent, Spacing, VectorIcons } from '../Common';
import { RouteName } from '../../routes';

export default function SwipeToDelete(props) {
  const { navigation, placeholders, fadeAnim, translateY } = props;
  const { colors } = useThemeHelper();
  const styles = HomeScreenStyle(colors)
  const Style = Styles(colors)

  return (
    <View style={styles.headerMainContainer}>
      <GradientComponent
        setColors={[colors.secondary_light_color, colors.secondary_light1_color]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1.2 }}
      >
        <View style={[Style.width100,Style.paddingHorizontalCommon]}>
        <Spacing space={SH(13)} />

        <View style={styles.homeContainer}>
          <TouchableOpacity activeOpacity={0.9} onPress={()=>navigation.navigate(RouteName.ADD_ADDRESS_SCREEN)} style={[styles.homeLocationView,Style.flex]}>
            <View style={styles.homeRroundView}>
              <VectorIcons iconFamily="Ionicons" name="location-sharp" color={colors.black} size={SF(23)} />
            </View>
            <View style={styles.homeLocationTextView}>
              <Text style={styles.homeSmallText} >Deliver to</Text>
              <Text
                style={styles.homeLocationText}
                numberOfLines={1}
              >742 Evergreen Terrace, San Francisco, CA 94107, USA</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.homeLocationView}>
            <TouchableOpacity style={styles.homeRroundView}
            activeOpacity={0.9} onPress={()=>navigation.navigate(RouteName.NOTIFICATION_SCREEN)}
            >
              <VectorIcons iconFamily="Ionicons" name="notifications-outline" color={colors.black} size={SF(23)} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.homeRroundView}
            activeOpacity={0.9} onPress={()=>navigation.navigate(RouteName.MY_CART_SCREEN)}
            >
              <VectorIcons iconFamily="Ionicons" name="cart-outline" color={colors.black} size={SF(23)} />
            </TouchableOpacity>
          </View>
        </View>
        <Spacing space={SH(20)} />
        <View
          style={styles.searchMainView}
        >
          {/* Left Search Icon */}
          <VectorIcons
            iconFamily="Feather"
            name="search"
            size={SF(20)}
            color={colors.gray}
          />

          {/* Input */}

          <TouchableOpacity style={[styles.searchInput, { position: 'relative', justifyContent: 'center' }]}
            onPress={() => navigation.navigate(RouteName.SEARCH_BAR_SCREEN)}
          >
            <Animated.Text
              style={{
                opacity: fadeAnim,
                transform: [{ translateY }],
                color: colors.light_gray,
                fontSize: 16,
                textAlign: 'left'
              }}
            >
              {placeholders}
            </Animated.Text>
          </TouchableOpacity>
          {/* Right Filter Icon */}
          <TouchableOpacity onPress={() => { }}>
            <VectorIcons
              iconFamily="Feather"
              name="sliders"
              size={SF(20)}
              color={colors.black_to_white_color}
            />
          </TouchableOpacity>
        </View>
        <Spacing space={SH(10)} />
        </View>
      </GradientComponent>
    </View>
  );
}


