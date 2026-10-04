import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RouteName from './RouteName';
import { MyProfileScreen, HomeScreen, CategoryScreen, WishlistScreen, MyCartScreen } from '../views';
import { getHeaderIcon, getHeaderTitle, headerProps, useThemeHelper } from '../helper';
import { Styles } from '../styles';
import { AppHeader } from '../components';
import { String } from '../constants';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

// BOTTOM TAB NAVIGATOR
const BottomTabNavigator = (props) => {
    const { colors } = useThemeHelper();
    const themestyle = Styles(colors);
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    return getHeaderIcon(route, focused, color, size)
                },
                title: getHeaderTitle(route),
                tabBarActiveTintColor: colors.primary_color, // Active tab color
                tabBarInactiveTintColor: colors.black, // Inactive tab color
                tabBarStyle: themestyle.tabBarStyle,
                tabBarLabelStyle: themestyle.tabBarLabelStyle,
                tabBarIconStyle: themestyle.tabBarIconStyle,
                headerShown: false,
                tabBarLabel: ({ focused }) => (
                    <Text
                        style={[themestyle.tabBarLabelStyle, focused && { color: colors.primary_color }]}
                        numberOfLines={1}
                    >
                        {getHeaderTitle(route)}
                    </Text>
                ),
            })}
            barStyle={{ backgroundColor: colors.primary_color }}
        >
            <Tab.Screen name={RouteName.HOME_SCREEN} component={HomeScreen} />
            <Tab.Screen name={RouteName.CATEGORY_SCREEN} component={CategoryScreen} />
            <Tab.Screen name={RouteName.MY_CART_SCREEN} component={MyCartScreen}
                options={(props) => ({
                    ...headerProps("", colors, true),
                    headerTitle: () => (
                        <AppHeader {...props} children={String.label.MyCart} spaceHorizontal={true} />
                    ),
                })}
            />
            <Tab.Screen name={RouteName.WISHLIST_SCREEN} component={WishlistScreen}
                options={(props) => ({
                    ...headerProps("", colors, true),
                    headerTitle: () => (
                        <AppHeader {...props} children={String.label.MyWishlist} spaceHorizontal={true} ifCart={true} />
                    ),
                })}
            />
            <Tab.Screen name={RouteName.MY_PROFILE_SCREEN} component={MyProfileScreen}

            />
        </Tab.Navigator>
    )
}
export default BottomTabNavigator;
