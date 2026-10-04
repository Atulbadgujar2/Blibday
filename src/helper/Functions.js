import React, { useContext } from 'react';
import { Styles } from "../styles";
import { useTheme } from '../theme/ThemeProvider';
import { RouteName } from '../routes';
import { SF, SH } from './Dimensions';
import { SvgIcons } from '../components';
import { View, Share, Platform } from 'react-native';
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

export const useThemeHelper = () => {
  return useContext(useTheme);
}

export const Colors = () => {
  const { colors } = useThemeHelper();
  return colors
}

export const headerProps = (title = "", colors = {}, bgcolor = false) => {
  const HeaderStyles = Styles(colors)
  return HeaderArray = {
    headerShown: true,
    headerTintColor: colors.primary_color,
    headerShadowVisible: false,
    headerStyle: bgcolor ? HeaderStyles.headerWhiteStyle : HeaderStyles.headerStyle,
    headerTitleStyle: HeaderStyles.headerTitleStyle,
    title: title
  };
};



export const getHeaderIcon = (route, focused) => {
  let iconName;
  if (route.name === RouteName.HOME_SCREEN) {
    iconName = focused ? 'home-fill' : 'home';

  } else if (route.name === RouteName.CATEGORY_SCREEN) {
    iconName = focused ? 'category-fill' : 'category';

  } else if (route.name === RouteName.MY_CART_SCREEN) {
    iconName = focused ? 'cart-fill' : 'cart';

  } else if (route.name === RouteName.WISHLIST_SCREEN) {
    iconName = focused ? 'wishlist-fill' : 'wishlist';

  } else if (route.name === RouteName.MY_PROFILE_SCREEN) {
    iconName = focused ? 'account-fill' : 'account';
  }

  return (
    <View
      style={{
        backgroundColor: focused ? '#cce6cc' : 'transparent',
        width: SH(40),
        height: SH(40),
        borderRadius: SH(40),
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <SvgIcons
        name={iconName}
        width={SH(26)}
        height={SH(26)}
      />
    </View>
  );

}
export const getHeaderTitle = (route) => {
  var name = ""
  if (route.name === RouteName.HOME_SCREEN) {
    name = "Home"
  } else if (route.name === RouteName.CATEGORY_SCREEN) {
    name = "Category"
  } else if (route.name === RouteName.MY_CART_SCREEN) {
    name = "Cart"
  } else if (route.name === RouteName.WISHLIST_SCREEN) {
    name = "Wishlist"
  } else if (route.name === RouteName.MY_PROFILE_SCREEN) {
    name = "Account"
  }
  return name;
}

export const BottomTabGap = () => {
  const tabHeight =  useBottomTabBarHeight();
  return tabHeight
}

export const getStatusStyle = (status) => {
  switch (status) {
    case "Delivered":
      return { backgroundColor: "#d4f8d4", navigation: RouteName.REVIEW_SCREEN, label: 'Rating' };
    case "Out for Delivery":
      return { backgroundColor: "#fff2cc", navigation: RouteName.TRACK_ORDER_SCREEN, label: 'Tracke Order' };
    case "Cancelled":
      return { backgroundColor: "#ffd6d6", navigation: RouteName.BOTTOM_TAB_NAVIGATOR, label: 'Reorder' };
    default:
      return { backgroundColor: "#eee" };
  }
};

export const getCurrentTime = () => {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${hours}:${minutes} ${ampm}`;
};

 export const onShare = async () => {
    const appLink = 'https://play.google.com/store/apps/details?id=com.greenmart';
    await Share.share({
      message: `Download my app from here:\n${appLink}`,
    });
  };